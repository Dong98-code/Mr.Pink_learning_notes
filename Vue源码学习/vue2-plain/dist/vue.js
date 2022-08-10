(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  /**
   * 是否是函数
   * @param {*} source 对象
   * @returns
   */
  function isFunction(source) {
    return typeof source === "function";
  }
  var isObject = function isObject(source) {
    return source != null && _typeof(source) === "object";
  };

  var oldArrayProto = Array.prototype; //原来的数组的原型

  var newArrayProto = Object.create(oldArrayProto); // 改写7个会改变原数组的方法
  // shift splice, push, pop sort, unshift, reverse

  var methods = ["push", "pop", "unshift", "shift", "reverse", "sort", "splice"];
  methods.forEach(function (method) {
    newArrayProto[method] = function () {
      var _oldArrayProto$method;

      var inserted;
      var ob = this.__ob__; //__ob__为 Observer的实例，所以可以调用 observeArray这个方法

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      switch (method) {
        case "push":
        case "unshift":
          // 插入元素
          // 新增的元素 可能是对象
          inserted = args;
          break;

        case "splice":
          // 数组最强方法 splice(start, delCount, ...新增元素)
          inserted = args.slice(2); // 新增的元素

          break;
      }

      console.log("\u91CD\u5199\u7684".concat(method, "\u65B9\u6CD5\u88AB\u8C03\u7528------> this = "), this);

      if (inserted) {
        // 观测新增的内容,数组
        ob.observeArray(inserted);
      }

      var res = (_oldArrayProto$method = oldArrayProto[method]).call.apply(_oldArrayProto$method, [this].concat(args));

      return res;
    };
  });

  var Observer = /*#__PURE__*/function () {
    function Observer(data) {
      _classCallCheck(this, Observer);

      // object.definedProperty已有的数据的劫持
      Object.defineProperty(data, "__ob__", {
        value: this,
        // observe的实例
        enumerable: false //该属性不可枚举

      });

      if (Array.isArray(data)) {
        // 重写数组上的7个方法 这7个变异方法是可以修改数组本身的
        // 保留数组原有的方法，重新部分方法
        Object.setPrototypeOf(data, newArrayProto);
        this.observeArray(data);
      } else {
        this.walk(data);
      }
    }

    _createClass(Observer, [{
      key: "walk",
      value: function walk(data) {
        // 堆属性进行劫持
        // 重新定义属性
        Object.keys(data).forEach(function (key) {
          return defineReactive(data, key, data[key]);
        });
      }
    }, {
      key: "observeArray",
      value: function observeArray(data) {
        data.forEach(function (item) {
          return observer(item);
        });
      }
    }]);

    return Observer;
  }(); // vue2 应用了defineProperty需要一加载的时候 就进行递归操作，所以好性能，如果层次过深也会浪费性能
  // 1.性能优化的原则：
  // 1) 不要把所有的数据都放在data中，因为所有的数据都会增加get和set
  // 2) 不要写数据的时候 层次过深， 尽量扁平化数据
  // 3) 不要频繁获取数据
  // 4) 如果数据不需要响应式 可以使用Object.freeze 冻结属性

  /**
   * vue2 慢的原因 主要在这个方法中
   * 定义目标对象上的属性为响应式
   * @param {Object} obj
   * @param {string|symbol} key
   * @param {*} value
   */


  function defineReactive(obj, key, value) {
    // 如果属性也是对象 再次劫持 childOb有值的情况下是Observe实例，实例上挂载了dep
    observer(value); // 每个属性都有一个dep

    Object.defineProperty(obj, key, {
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        // 监视新的属性
        if (newVal === value) return; // 新值是对象 则需要重新观测

        observer(newVal);
        value = newVal;
      }
    });
  }
  function observer(data) {
    //  只对对象进行劫持
    // 一个对象只劫持一次， 创建一个Observer类
    // 不是对象 不需要劫持
    if (!isObject(data)) return;
    if (data.__ob__ instanceof Observer) return data.__ob__; //判断是否劫持过对象

    return new Observer(data);
  }

  function proxy(vm, target, key) {
    Object.defineProperty(vm, key, {
      enumerable: true,
      get: function get() {
        return vm[target][key];
      },
      set: function set(newVal) {
        vm[target][key] = newVal;
      }
    });
  }

  function initState(vm) {
    // 初始化data 
    var opts = vm.$options; // 获取所有选项

    if (opts.data) {
      // data 初始化
      initData(vm);
    }
  }

  function initData(vm) {
    // 函数 或者是对象； vue3为函数
    // 判断函数是否为函数或者对象
    var data = vm.$options.data;
    if (isFunction(data)) data = data.call(vm); //函数执行该函数，改变this指向

    Object.defineProperty(vm, "_data", {
      configurable: true,
      // enumerable: false,
      writable: true,
      value: data
    }); // 数据劫持实现

    observer(data); // 劫持观测数据， 对象属性劫持

    for (var key in data) {
      proxy(vm, "_data", key); // vm.name -> vm._data.name
    }
  }

  function initMixin(Vue) {
    // 初始化
    Vue.prototype._init = function _init(options) {
      // this , $开头 自身属性
      var vm = this;
      vm.$options = options; //用户选项挂载实例身上
      // 初始化状态
      // TODO computed methods watcher ....

      initState(vm);
    };
  }

  /**
   * Vue构造函数
   * @param {*} options 用户选项
   */

  function Vue(options) {
    // 初始化
    this._init(options);
  }

  initMixin(Vue); // 扩展_init方法

  return Vue;

}));
//# sourceMappingURL=vue.js.map
