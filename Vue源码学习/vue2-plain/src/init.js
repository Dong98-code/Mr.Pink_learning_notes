import {
    initState
} from "./initState";
import {
    compileToFunction
} from "./compiler/index";
import {
    mountComponent
} from "./lifecycle";
import { mergeOptions } from "./utils/merge";
import { callhooks } from "./hooks/life-hooks";
export function initMixin(Vue) {
    // 初始化
    Vue.prototype._init = function _init(options) {
        // this , $开头 自身属性
        const vm = this;
        // 合并 Vue.options 和 传入的配置项
        // TODO 目前还只是可以合并生命周期和普通属性等，对于 data 这种选项还需要特殊的合并处理
        // 这种使用this获取其构造函数上的静态属性options，因为构造函数不一定直接是 Vue，也可以是Vue的子类（组件
        vm.$options = mergeOptions(this.constructor.options, options); //用户选项挂载实例身上

        // 初始化之前调用 beforeCreated
        callhooks(vm, "beforeCreate")
        // 初始化状态
        // TODO computed methods watcher .... 计算属性 watch
        initState(vm);
        // 之后 ceated
        callhooks(vm, "created")
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
            if (/^[\.#a-zA-Z_]/i.test(template)) {
                // 模板标签
                template = document.querySelector(template).innerHTML;
            }
            // TODO 去除开头和结尾的空白符 m是忽略换行 进行多行匹配
            // template = template.trim();
            template = template.replace(/^\s+|\s+$/gm, "");
            const render = compileToFunction(template);
            ops.render = render;
        }
        // 组件挂载
        mountComponent(vm, el); //vm挂载到el上
    }

}
/**
 * script 标签引用的是vue.global.js 这个编译过程是在浏览器运行的
 * runtime是不包含模板编译的，整个编译打包的时候是通过loader来转义.vue文件的
 * 用runtime的时候 不能使用模板template（可以使用.vue，loader处理就行了）
 */