// 调用声明周期的不同阶段定义的函数

export function callhooks(vm, hook) {
    const handles = vm.$options[hook];
    if (handles) {
        handles.forEach(handle => handle.call(vm)); // 声明周期上的钩子函数的this都是指向当前的实例上
    }
}