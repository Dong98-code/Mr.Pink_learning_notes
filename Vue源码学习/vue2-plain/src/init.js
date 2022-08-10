import { initState } from "./initState";
export function initMixin(Vue) {
    // 初始化
    Vue.prototype._init = function _init(options) {
        // this , $开头 自身属性
        const vm = this;
        vm.$options = options; //用户选项挂载实例身上

        // 初始化状态
        // TODO computed methods watcher ....
        initState(vm);
    };

}