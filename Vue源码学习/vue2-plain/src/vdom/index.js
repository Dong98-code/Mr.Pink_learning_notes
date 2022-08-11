// 虚拟节点相关的方法
// h函数
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
    const key = data?.key;
    key && delete data.key;
    return vnode(vm, tag, key, data, children)
}
// _v创建文本节点
function createTextVNode(vm, text) {
    return vnode(vm, undefined, undefined, undefined, undefined, text, undefined)
}

export {
    createElementVNode,
    createTextVNode
}