import {isFunction} from './utils/index'
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
    const data = vm.$options.data;
    if (isFunction(data)) data = data.call(vm); //函数执行该函数，改变this指向

}
export {
    initState
}