import { mergeOptions } from "./utils/merge";
export function initGlobalStaticAPI(Vue) {
    Vue.options = {}; // 全局的配置
    //混入 mixin
    Vue.mixin = function mixin(mixin) {
        // 用户的选项和全局的options进行合并
        this.options = mergeOptions(Vue.options, mixin);//mixin为混入的内容
        return this;
    }
}