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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

  var id = 0;

  var Dep = /*#__PURE__*/function () {
    function Dep() {
      _classCallCheck(this, Dep);

      _defineProperty(this, "id", id++);

      // 属性的dep要收集watcher， 一个属性可以对应多个watcher
      this.subs = [];
    }
    /**
     * 收集当前属性 对应的视图 watcher
     */


    _createClass(Dep, [{
      key: "depend",
      value: function depend() {
        // 这里我们不希望收集重复的watcher，而且现在还只是单向的关系 dep -> watcher
        // watcher 也需要记录 dep
        // this.subs.push(Dep.target);
        // console.log(this.subs);
        // 这里是让watcher先记住dep
        Dep.target.addDep(this); //  this -> dep; 此时的this指向调用者 dep this
      }
      /**
       * dep 在反过来记录watcher
       * @param {*} watcher
       */

    }, {
      key: "addSub",
      value: function addSub(watcher) {
        this.subs.push(watcher); // console.log(watcher);
      }
      /**
       * 更新视图
       */

    }, {
      key: "notify",
      value: function notify() {
        this.subs.forEach(function (watcher) {
          return watcher.update();
        });
      } // 当前的watcher

    }]);

    return Dep;
  }(); // watcher queue 视图渲染栈


  _defineProperty(Dep, "target", null);

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
    var dep = new Dep(); // 每一个属性都有一个dep
    // 如果属性也是对象 再次劫持 childOb有值的情况下是Observe实例，实例上挂载了dep

    observer(value); // 每个属性都有一个dep

    Object.defineProperty(obj, key, {
      get: function get() {
        if (Dep.target) {
          //当前属性，记住watcher 视图依赖收集
          dep.depend();
        }

        return value;
      },
      set: function set(newVal) {
        // 监视新的属性
        if (newVal === value) return; // 新值是对象 则需要重新观测

        observer(newVal);
        value = newVal; // 设置属性值的时候，通知对应watcher去更新属性值

        dep.notify();
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

  // 元素类型
  var ELEMENT_TYPE = 1; // 文本类型

  var TEXT_TYPE = 3;

  /**
   * 匹配标签名
   * 开头不能包含特殊字符和数字
   * 第二个字符开始 可以是任意字符了 / \ 空白符 . 都可以
   *  div _div _ab88 a_9.//a
   *
   */

  var ncname = "[a-zA-Z_][\\-\\.0-9a-zA-Z]*"; //开始必须是字母或者下划线  ， \放到引号里里面也就是字符串的形式，第一个\将第二个\转换成正则表达式中的转义字符，第二个\再去转豁免的所以是两个\\

  /**
   * 捕获 标签名
   * 注意 ?: 只匹配不捕获
   * 这里的匹配标签名 后面还有:的这种 是带命名空间的标签 比如 a:b
   */

  var qnameCapture = "((?:".concat(ncname, "\\:)?").concat(ncname, ")"); // ((?:[a-zA-Z_][\\-\\.0-9a-zA-Z]*\\:)?[a-zA-Z_][\\-\\.0-9a-zA-Z]*)

  /**
   * 匹配到的分组是一个 标签名 <div
   */
  // ^<((?:[a-zA-Z_][\\-\\.0-9a-zA-Z]*\\:)?[a-zA-Z_][\\-\\.0-9a-zA-Z]*)

  var startTagOpen = new RegExp("^<".concat(qnameCapture));
  /**
   * 匹配标签名结束 <\/div> 因为 /具有特殊含义
   */
  // ^<\\/((?:[a-zA-Z_][\\-\\.0-9a-zA-Z]*\\:)?[a-zA-Z_][\\-\\.0-9a-zA-Z]*)[^>]*>

  var endTag = new RegExp("^<\\/".concat(qnameCapture, "[^>]*>")); // `^<\\/${qnameCapture}[^>]*>`

  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/; //在这里一个 \就行 因为使用了 //来表示正则表达式

  /*
  属性值前可以有空白： \s*, *表示前面的表达式 0次或者多次
  第一个分组：([^\s"'<>\/=]+)， 组1中不能有空白 单引号 双引号， <> / = 这些字符
  中间是 = 左右可以有空白字符 组2（=）左右 \s*表示空白
  等号右边可以是： 1. 双引号，但是双引号中不能再有双引号 ?:"([^"]*)"+, +表示匹配前一个字符一次或者多次
  第一个分组为key 第二个分组为 = 
  */

  /**
   * 匹配标签结束
   * 标签可能自闭合 <div></div> <br/>  />
   */

  var startTagClose = /^\s*(\/?)>/;
  /**
   * 匹配 双花括号语法 {{}} 匹配到的是就是双花括号的 变量
   */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g; // 模板解析幻术

  function parseHTML(html) {
    /**
     * 最终需要转换为一颗抽象语法树 ast abstract syntax tree
     * 可以借助栈思想
     * 栈中的最后一个标签元素 就是当前正在匹配的元素的父元素
     * @type {Array<{tag:string,type:number,children:Array}>}
     */
    var stack = []; // 栈帧 指向最后一个元素

    var curParent = null;
    var root = null; // 根元素

    function createASTElement(tag, attrs) {
      // 根据tag和属性值 返回 ele
      return {
        tag: tag,
        type: ELEMENT_TYPE,
        children: [],
        attrs: attrs,
        parent: null
      };
    }

    function start(tag, attrs, isSelfClose) {
      var _root;

      // console.log(tag, attrs);
      // 当前节点
      var node = createASTElement(tag, attrs); // 根节点

      root = (_root = root) !== null && _root !== void 0 ? _root : node; // 更新当前节点的父节点 更新父元素的子元素节点， 
      // 父元素的子元素节点

      curParent && (node.parent = curParent, curParent.children.push(node)); // TODO 是自闭合标签 不需要入栈的

      if (isSelfClose) return; // 新节点入栈

      stack.push(node); // 更新当前指向的最前面的父节点

      curParent = node; // console.log(node, root);
    }

    function chars(text) {
      // 去除空字符串
      text = text.replace(/^\s+|\s+$/gm, ""); // console.log(text);
      // 文本节点 插入到父元素的孩子中

      text && curParent.children.push({
        type: TEXT_TYPE,
        text: text,
        parent: curParent
      });
    }

    function end(tag) {
      // console.log(tag);
      // 弹出最后一个栈元素 并更新指向的父节点
      var node = stack.pop(); // TODO 可以根据tag和node.tag 校验标签是否合法等 也需要考虑自闭合标签

      if (tag !== node.tag) ;

      curParent = stack[stack.length - 1];
    }

    function parseStartTag() {
      // 匹配标签起始位置
      var start = html.match(startTagOpen); // mathch返回字符串匹配正则返回的结果

      if (start) {
        // 是开始标签
        var match = {
          // 标签名
          tagName: start[1],
          // 属性
          attrs: [],
          // 是否是自闭合标签
          isSelfClose: false
        };
        advance(start[0].length); // 不是标签结束位置 一直匹配

        var attr, _end;

        while ( // 如果不是开始标签 的结束
        !(_end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          // 去除属性
          advance(attr[0].length);
          match.attrs.push({
            // 属性名
            name: attr[1],
            // 属性值 key="value" key='value' key=value
            // key  对于只有key的这种，我们给默认值true
            value: attr[3] || attr[4] || attr[5] || true
          });
        } // 去除标签的右闭合箭头  <div> 中的 > 或者自闭合标签 <br/> />


        if (_end) {
          advance(_end[0].length); // 自闭合

          if (_end[0].endsWith("/>")) match.isSelfClose = true;
        } // console.log(match);


        return match;
      } // 不是开始标签


      return false;
    }

    function advance(start) {
      // 去除字符
      html = html.substring(start);
    } // vue2中 html 开头肯定是 <  <div>hello</div>


    while (html) {
      // 如果indexOf中索引的值是 0 则说明是个开始标签 或者 结束标签
      // > 0 是文本的结束位置  </div>
      var textEnd = html.indexOf("<");

      if (textEnd === 0) {
        // 解析开始标签 开始标签及其标签内的属性等
        var startTagMatch = parseStartTag(); // 匹配结果

        if (startTagMatch) {
          // console.log(startTagMatch);
          start(startTagMatch.tagName, startTagMatch.attrs, startTagMatch.isSelfClose);
          continue;
        } // 去除结束标签 来到这里 肯定是 </xxx>


        var endTagMatch = html.match(endTag);

        if (endTagMatch) {
          advance(endTagMatch[0].length); // console.log(endTagMatch, html);

          end(endTagMatch[1]);
          continue;
        }
      } // 文本内容  adb<h2></h2>


      if (textEnd > 0) {
        // 获取文本内容
        var text = html.substring(0, textEnd);

        if (text) {
          advance(text.length); // 解析到的文本

          chars(text);
        } // console.log(html);

      }
    } // console.log(root);
    // 返回 生成的vNode树 ast


    return root;
  }

  /**
   * 生成 render函数
   * @param {*} template 模板
   * @returns {Function}
   */

  function compileToFunction(template) {
    // console.log("compileToFunction-------------->" + template + "---------");
    // 1. template 转 ast
    var ast = parseHTML(template); // 2. 生成render方法（该方法的执行结果是返回虚拟dom）
    // TODO 三个方法 _v文本节点 _s把变量转为字符串 _c元素节点
    // 2.1 生成render函数的返回代码块字符串形式

    var renderCodeBlock = codeGenerator(ast); // 2.2 生成render函数 new Function
    // 生成的代码中，取变量的值的时候，并没有去当前组件实例的上下文中取值
    // 而是直接 name age 所以这里绑定上下文（组件实例） name -> vm.name -> vm._data.name
    // this -> render.call(thisArg) with{}语法扩展作用域链，执行函数的时候，获取到this，之后执行的函数，会在作用域链上去寻找对应的变量；

    var render = new Function("with(this){\n return ".concat(renderCodeBlock, "}")); // console.log(render);

    return render;
  }
  /**
   * 根据ast生成代码
   * @param {{tag:string,children:Array,type:number,text:string,attrs:Array}} 
   * _c('div',{"id":"app"},_c('div',{style:{"color":" red"}},_v(_s(name)+" hello")),_c('span',null,_v(_s(age))))
   */

  function codeGenerator(ast) {
    var children = generateChildren(ast.children);
    var code = "_c('".concat(ast.tag, "',").concat(ast.attrs.length > 0 ? generateProps(ast.attrs) : "null").concat(ast.children.length ? ",".concat(children) : "", ")");
    return code;
  }
  /**
   * 生成属性对象 {name:"",id:"app"}
   * @param {Array<{name:string|symbol,value:any}>} attrs
   */


  function generateProps(attrs) {
    var str = ""; // 返回值是一个字符串

    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];

      if (attr.name === "style") {
        (function () {
          // style:"color:red;background-color:{{backgroundColor}}"
          // style:{color:"red","background-color":"{{backgroundColor}}"}
          var style = {};
          attr.value.split(";").forEach(function (item) {
            if (!item.trim()) return; // 空白 ，color:red

            var _item$split = item.split(":"),
                _item$split2 = _slicedToArray(_item$split, 2),
                key = _item$split2[0],
                value = _item$split2[1];

            style[key] = value;
          });
          str += "".concat(attr.name, ":").concat(JSON.stringify(style), ",");
        })();
      } else str += "\"".concat(attr.name, "\":").concat(JSON.stringify(attr.value), ","); //把value转成字符串

    }

    return "{".concat(str.slice(0, -1), "}"); //去掉多余的 逗号
  }
  /**
   * 生成节点的子节点数组对象
   * @param {*} children
   */


  function generateChildren(children) {
    if (children) {
      return children.map(function (child) {
        return generateChild(child);
      }).join(",");
    }
  }
  /**
   * 根据节点生成子字符串形式
   * @param {*} node
   * @returns
   */


  function generateChild(node) {
    switch (node.type) {
      case ELEMENT_TYPE:
        // 元素节点
        // console.log(codeGenerator(node))
        return codeGenerator(node);
      // 节点类型， 递归调用codeGenerator(node)

      case TEXT_TYPE:
        // console.log(node.text)
        // 文本节点
        var text = node.text;

        if (!defaultTagRE.test(text)) {
          // 纯文本节点 没有 {{xx}}
          return "_v(".concat(JSON.stringify(text), ")");
        } // 之后匹配的是 {{name}}这种形式


        var tokens = []; // 匹配结果

        var match = null;
        defaultTagRE.lastIndex = 0; //exec 跟全局匹配标志一块使用的时候，需要重置 lastIndex 0 
        // 上一次匹配结果的起始索引位置

        var lastIndex = 0;

        while (match = defaultTagRE.exec(text)) {
          // console.log(match)
          // 当前匹配的到的起始位置
          var index = match.index;
          if (index > lastIndex) tokens.push(JSON.stringify(text.slice(lastIndex, index))); // 两个匹配位置之间的内容 {{}} name {{}}

          tokens.push("_s(".concat(match[1].trim(), ")")); // 去除空格

          lastIndex = index + match[0].length;
        } // {{age}}--- 最后一次匹配后还有内容


        if (lastIndex < text.length) {
          tokens.push(JSON.stringify(text.slice(lastIndex)));
        } // console.log(tokens);


        return "_v(".concat(tokens.join("+"), ")");

      default:
        return "";
    }
  }

  // 虚拟节点相关的方法
  // h函数
  function vnode(vm, tag, key, props, children, text, componentOptions) {
    // 创建一个虚拟的dom,返回值是一个js对象,增加自定义属性
    // * 虚拟dom是和ast不一样的 -> ast是语法层面的转换，他描述的是dom本身（可以描述 js css html等等）
    return {
      vm: vm,
      tag: tag,
      key: key,
      // diff算法，每一个虚拟dom应该有一个独一无二的key值
      text: text,
      props: props,
      // data
      componentOptions: componentOptions,
      children: children
    };
  }

  function createElementVNode(vm, tag, data) {
    // 返回的是一个节点
    var key = data === null || data === void 0 ? void 0 : data.key;
    key && delete data.key;

    for (var _len = arguments.length, children = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      children[_key - 3] = arguments[_key];
    }

    return vnode(vm, tag, key, data, children);
  } // _v创建文本节点


  function createTextVNode(vm, text) {
    return vnode(vm, undefined, undefined, undefined, undefined, text, undefined);
  }

  function patch(oldVNode, vnode) {
    if (!oldVNode) return createEle(vnode);
    var isRealElement = oldVNode.nodeType; //真实节点身上会有一个nodeType属性,如果是虚拟dom，没有该属性

    if (isRealElement) {
      var elm = oldVNode;
      var parentElm = elm.parentNode; // console.log(parentElm)

      var newEle = createEle(vnode); // 插入新dom 移除父节点上的老dom节点

      insertBefore(parentElm, newEle, elm.nextSibling); //下一个节点 nextSibling, 先插入 然后再移除旧的节点

      removeChild(parentElm, elm); // console.log(newEle)

      return newEle; // 返回新的elm
    }
  }

  function createEle(vnode) {
    //vnode一个js对象
    //根据这个对象 然后创建真实的dom节点
    var tag = vnode.tag,
        props = vnode.props,
        children = vnode.children,
        text = vnode.text;

    if (typeof tag === 'string') {
      vnode.el = createElement(tag); // 更新属性值

      patchProps(vnode.el, {}, props);
      children.forEach(function (child) {
        // 如果孩子是组件 会实例化组件 并且插入到父组件内部子节点的最后
        appendChild(vnode.el, createEle(child));
      });
    } else if (_typeof(tag) === "object") ; else {
      vnode.el = createTextNode(text); // 创建真实的文本节点
    }

    return vnode.el;
  }

  function createTextNode(tag) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "browser";

    switch (type.toLowerCase()) {
      case "browser":
        return document.createTextNode(tag);
    }
  }

  function createElement(tag) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "browser";

    switch (type.toLowerCase()) {
      case "browser":
        return document.createElement(tag);
      // 原生创建节点的方法
    }
  }

  function patchProps(el, oldProps, props) {
    // 节点，原来的属性值，新的属性值
    var oldStyle = (oldProps === null || oldProps === void 0 ? void 0 : oldProps.style) || {}; // 旧的属性值存在 且 style不为空

    var newStyle = (props === null || props === void 0 ? void 0 : props.style) || {}; // 样式移除

    for (var key in oldStyle) {
      if (!newStyle[key]) {
        el.style[key] = "";
      }
    }

    for (var _key in oldProps) {
      if (!props[_key]) {
        removeAttribute(el, _key);
      }
    } // 属性存在 则覆盖


    for (var _key2 in props) {
      if (_key2 === "style") {
        Object.keys(props[_key2]).forEach(function (k) {
          return el.style[k] = props["style"][k];
        });
      } else {
        setAttribute(el, _key2, props[_key2]);
      }
    }
  }

  function setAttribute(el, key, value) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "browser";

    switch (type.toLowerCase()) {
      case "browser":
        el.setAttribute(key, value);
        break;
    }
  }

  function appendChild(parent, child) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "browser";

    switch (type.toLowerCase()) {
      case "browser":
        parent.appendChild(child);
        break;
    }
  }

  function insertBefore(parent, child, prevChild) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "browser";

    switch (type.toLowerCase()) {
      case "browser":
        // document.insertBefore
        parent.insertBefore(child, prevChild);
        break;
    }
  }

  function removeChild(parent, child) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "browser";

    switch (type.toLowerCase()) {
      case "browser":
        parent.removeChild(child);
        break;
    }
  }

  function initLifcycle(Vue) {
    Object.defineProperties(Vue.prototype, {
      _render: {
        value: function _render() {
          var vm = this;
          return vm.$options.render.call(vm); // 执行 属性上的render函数，该边this的指向
          // _c返回一个虚拟节点
        }
      },
      _c: {
        // _c("div",{name:'zs'},...children) 元素 虚拟dom
        value: function _c() {
          return createElementVNode.apply(void 0, [this].concat(Array.prototype.slice.call(arguments)));
        }
      },
      _s: {
        // 变量转成字符串
        // 对于不是对象的字符串，没必要再次转字符串了，不然会多出引号 zs -> \"zs\"
        value: function _s(value) {
          return _typeof(value) === "object" ? JSON.stringify(value) : value;
        }
      },
      _v: {
        // 文本的虚拟dom
        value: function _v() {
          return createTextVNode.apply(void 0, [this].concat(Array.prototype.slice.call(arguments)));
        }
      },
      _update: {
        value: function _update(vnode) {
          var vm = this; // 挂载的容器 

          var el = vm.$el;
          var preVnode = vm._vnode; // 记录每次产生 vnode,每次render一次就会产生一个新的 vnode

          vm._vnode = vnode;

          if (preVnode) {
            vm.$el = patch(preVnode, vnode);
          } else {
            // 初始 渲染
            vm.$el = patch(el, vnode);
          }
        }
      }
    });
  }
  function mountComponent(vm, container) {
    // 组件挂载
    // 1.render创建虚拟dom，
    // 2. 根绝虚拟dom产生真实dom
    //3. 挂载el到元素中
    // vm._render(); //vm.$options.render()
    // vm._update(); // 虚拟dom -> 真实dom
    // vm.$el = container; //记录挂载的容器
    Object.defineProperty(vm, "$el", {
      value: container,
      writable: true
    }); // 这里把渲染逻辑封装到watcher中
    // 该函数调用一次渲染一次

    var updateComponent = function updateComponent() {
      // 1.调用render 产生虚拟节点 vNode
      var vNodes = vm._render(); // 2. 根据虚拟dom 产生真实dom


      vm._update(vNodes);
    };

    new Watcher(vm, updateComponent, true); //每执行一次这个函数， 再构造函数中， updateComponent就执行一次
    // 3. 挂载到container上 _update中实现
  }

  function initMixin(Vue) {
    // 初始化
    Vue.prototype._init = function _init(options) {
      // this , $开头 自身属性
      var vm = this;
      vm.$options = options; //用户选项挂载实例身上
      // 初始化状态
      // TODO computed methods watcher ....

      initState(vm); // el 实现数据挂载

      if (options.el) {
        // 有el配置
        vm.$mount(options.el);
      }
    }; // 手动调用


    Vue.prototype.$mount = function $mount(el) {
      var vm = this;
      el = document.querySelector(el);
      var ops = vm.$options;
      var template; // 先看是否有render函数

      if (!ops.render) {
        // 没有模板， 有el
        if (!ops.template && el) {
          // 没有template凡是写了el直接用el作为模板
          template = el.outerHTML;
        } else {
          template = ops.template;
        }
      }

      if (template) {
        // 此时再去做模板编译
        // console.log(template);
        if (/^[\.#a-zA-Z_]/i.test(template)) {
          // 模板标签
          template = document.querySelector(template).innerHTML;
        } // TODO 去除开头和结尾的空白符 m是忽略换行 进行多行匹配
        // template = template.trim();


        template = template.replace(/^\s+|\s+$/gm, "");
        var render = compileToFunction(template);
        ops.render = render;
      } // 组件挂载


      mountComponent(vm, el); //vm挂载到el上
    };
  }
  /**
   * script 标签引用的是vue.global.js 这个编译过程是在浏览器运行的
   * runtime是不包含模板编译的，整个编译打包的时候是通过loader来转义.vue文件的
   * 用runtime的时候 不能使用模板template（可以使用.vue，loader处理就行了）
   */

  /**
   * Vue构造函数
   * @param {*} options 用户选项
   */

  function Vue(options) {
    // 初始化
    this._init(options);
  }

  initMixin(Vue); // 扩展_init方法

  initLifcycle(Vue);

  return Vue;

}));
//# sourceMappingURL=vue.js.map
