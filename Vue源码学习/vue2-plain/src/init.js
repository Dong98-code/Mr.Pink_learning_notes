import {
    initState
} from "./initState";
export function initMixin(Vue) {
    // 初始化
    Vue.prototype._init = function _init(options) {
        // this , $开头 自身属性
        const vm = this;
        vm.$options = options; //用户选项挂载实例身上

        // 初始化状态
        // TODO computed methods watcher ....
        initState(vm);
        // el 实现数据挂载
        if (options.el) {
            // 有el配置
            vm.$mount(options.el);
        }
    };


    // 手动调用
    Vue.prototype.$mount = function $mount(el) {
        const vm = this;
        el = document.querySelector(el);
        let ops = vm.$options;
        let template;
        // 先看是否有render函数
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
            const render = compileToFunction(template);
            ops.render;
        }


    }

}
/**
 * script 标签引用的是vue.global.js 这个编译过程是在浏览器运行的
 * runtime是不包含模板编译的，整个编译打包的时候是通过loader来转义.vue文件的
 * 用runtime的时候 不能使用模板template（可以使用.vue，loader处理就行了）
 */