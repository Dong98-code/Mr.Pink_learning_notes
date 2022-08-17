import { isFunction } from "./utils/index";
import { mergeOptions } from "./utils/merge";
export function initGlobalStaticAPI(Vue) {
    Vue.options = {}; // 全局的配置
    Object.defineProperty(Vue.options, "_base", {
        value: Vue,
        enumerable: true
    })
    //混入 mixin
    Vue.mixin = function mixin(mixin) {
        // 用户的选项和全局的options进行合并
        this.options = mergeOptions(Vue.options, mixin);//mixin为混入的内容
        return this;
    }
    Vue.extend = function extend(options) {
        // 创建一个组件的构造函数, 通过new来返回一个 vue的组件实例
        function Sub(options ={}) {
            this._init(options);
        }
        // 
        Sub.prototype = Object.create(Vue.prototype);
        // 改变constaor的指向
        // Sub.prototype.constructor = Sub;
        Object.defineProperty(Sub.prototype, "constructor", {
            value: Sub,
            writable: true,
            configurable: true,
        });
        // 合并选项; 创建组件的时候，当自身的components上没有 相应的组件名 那么应该使用全局的components
        Sub.options = mergeOptions(Vue.options, options);
        // Sub.options = options;
        return Sub;
    }
    //
    Vue.options.components = {}; //全局组件对象
    Vue.component = function component(id, definition) {
        // 如果definition不是一个函数，即没有手动调用 extend,
        if (!isFunction(definition)) {
            definition = Vue.extend(definition);
        }
        Vue.options.components[id] = definition; // 使用options.components讲id和definition对应起来
        // console.log(Vue.options.components);
    }
}