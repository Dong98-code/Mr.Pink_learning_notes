import { isFunction } from './utils/index'
import { observer } from './observer/index'
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
export {
    initState
}