import { isFunction } from './utils/index'
import { observer } from './observer/index'
import Watcher, {nextTick} from './observer/watcher';
import Dep from './observer/dep';
// 代理函数 vm_data 代理data
function proxy(vm, target, key) {
    Object.defineProperty(vm, key, {
      enumerable: true,
      get() {
        return vm[target][key];
      },
      set(newVal) {
        vm[target][key] = newVal;
      },
    });
  }
function initState(vm) {
    // 初始化data 
    const opts = vm.$options; // 获取所有选项
    if (opts.data) {
        // data 初始化
        initData(vm);
  }
  if (opts.computed) {
    // 初始化computed
    initComputed(vm)
  }
  // 初始化watch，标记为自己 user
  if (opts.watch) {
    initWatch(vm);
  }
  
}
function initWatch(vm) {
  // 初始化watch
  // watch的写法：
  // 1. firstName(){} 函数, firstName变化之后，执行改回调函数
  //2. firstName:[fn1, fn2],数组形式
  // 3. $watch(函数/字符串， 回调函数)
  const watch = vm.$options.watch; // 获取watch函数配置项
  for (let key in watch) {
    // 遍历键名，例如 fisrtName, 字符串
    const handler = watch[key]; // 对应的回调函数s;
    if (Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        creatWatch(vm, key, handler[i])
      }
    } else {
      creatWatch(vm, key, handler)
    }
  }
}

function creatWatch(vm, exprOrFn, handler) {
  if (typeof handler === "string") {
    handler = vm[handler];
  }
  return vm.$watch(exprOrFn, handler);
}
function initData(vm) {
    // 函数 或者是对象； vue3为函数
    // 判断函数是否为函数或者对象
    let data = vm.$options.data;
    if (isFunction(data)) data = data.call(vm); //函数执行该函数，改变this指向
    Object.defineProperty(vm, "_data", {
        configurable: true,
        // enumerable: false,
        writable: true,
        value: data,
      });
    // 数据劫持实现
    observer(data); // 劫持观测数据， 对象属性劫持

    for (let key in data) {
        proxy(vm, "_data", key); // vm.name -> vm._data.name
    }
}

function initComputed(vm) {
  const computed = vm.$options.computed;
  const watchers = (vm._computedWatchers = {}) //把watchers存到其对应的vm实例身上，之后通过vm获取到改watcher
  for (const key in computed) {
    // function -> get
    // object -> {get(){}, set(newVal){}}
    // userDef可能是一个函数，也可能是一个对象传入set和get方法
    let userDef = computed[key];
    let setter;
    debugger;
    const getter = isFunction(userDef) ? userDef : ((setter = userDef.set), getter);
    watchers[key] = new Watcher(vm, getter, { lazy: true }); //lazy true刚开始不执行get(), 讲watcher和key对应起来
    // 劫持计算属性
    defineComputed(vm, key, setter);

  }
}

function defineComputed(target, key, setter) {
  Object.defineProperty(target, key, {
    // vm.key -> vm.get key this -> vm
    get: createComputedGetter(key),
    set: setter,
  });
}

function createComputedGetter(key) {
  // 控制get的执行次数，不能
  // 返回一个函数
  return function lazyGetter() {
      // 得到对应属性的watcher
    const watcher = this._computedWatchers[key]; //通过this拿到对应的watcher实例
    if (watcher.dirty) {
      // 执行用户传入的getter并获得结果
      // 执行用户传入的函数
      watcher.evaluate(); //记录getter的返回值，改变dirty :false,之后再取值就不会重复取值了
    }
    if (Dep.target) {
      // 此时计算属性出栈之后，还有渲染watcher
      //收集上层watcher
      watcher.depend()
    }
    return watcher.value; //之后再调用get 返回watcher.value
  }
}

export function initStateMixin(Vue) {
  Vue.prototype.$nextTick = nextTick;
  Vue.prototype.$nextTick = nextTick;
  /**
   * 实现 $watch
   */
  // watch的底层实现 全是通过$watch
  Object.defineProperty(Vue.prototype, "$watch", {
    /**
     * watch的实现 也是使用观察者模式
     * @param {Function|string} exprOrFn 监控的值
     * @param {*} callback 回调函数
     * @param {*} options 选项
     */
    value(exprOrFn, callback, options = {}) {
      // console.log(exprOrFn, callback);
      // 创建观察者 user属性 表名这是用户自己定义的watch
      // 侦听的属性值发生改变 直接执行callback即可
      new Watcher(this, exprOrFn, { user: true, ...options }, callback);
    },
  });
}
export {
    initState
}