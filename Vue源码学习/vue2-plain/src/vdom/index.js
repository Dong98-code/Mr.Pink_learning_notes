// 虚拟节点相关的方法
import { isObject } from "../utils/index";
// h函数
const ReservedTags = [
    "div",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "span",
    "ul",
    "ol",
    "li",
    "a",
    "table",
    "button",
    "input",
];

const isReservedTag = (tag) => {
    return ReservedTags.includes(tag);
};

function vnode(vm, tag, key, props, children, text, componentOptions) {
    // 创建一个虚拟的dom,返回值是一个js对象,增加自定义属性
    // * 虚拟dom是和ast不一样的 -> ast是语法层面的转换，他描述的是dom本身（可以描述 js css html等等）
    return {
        vm,
        tag,
        key, // diff算法，每一个虚拟dom应该有一个独一无二的key值
        text,
        props, // data
        componentOptions,
        children
    }

}

function createElementVNode(vm, tag, data, ...children) {
    // 返回的是一个节点
    // 如果是原始节点,返回
    const key = data?.key;
    key && delete data.key;
    if (isReservedTag(tag)) return vnode(vm, tag, key, data, children)
    // 不是虚拟节点，创建组件的虚拟节点
    const CtorOrObj = vm.$options.components[tag]; // 在options上可以拿到这个 tag
    return createComponentVnode(vm, tag, key, data, children, CtorOrObj); // 使用函数创建组件的虚拟doM

   
}
function createComponentVnode(vm, tag, key, data, children, CtorOrObj) {
    if (isObject(CtorOrObj)) {
        // 对象， -》构造函数
        CtorOrObj = vm.$options._base.extend(CtorOrObj) // _base指向Vue
    }
    data = data ?? {};
    data.hook = {
        // 创建真实节点，如果是组件，调用此init方法；
        init(vnode) {
            const instance = (vnode.componentInstance =
                new vnode.componentOptions.Ctor());
              // instance.$el = 组件渲染的真实节点
              instance.$mount(); // 没有传递挂载的dom 最后会去 patch方法
        }
    }
    return vnode(vm, tag, key, data, children, null, {Ctor:CtorOrObj})
}
// _v创建文本节点
function createTextVNode(vm, text) {
    return vnode(vm, undefined, undefined, undefined, undefined, text, undefined)
}

function isSameNode(node1, node2) {
    return node1.tag === node2.tag && node1.key === node2.key;
}
export {
    createElementVNode,
    createTextVNode,
    isSameNode
}