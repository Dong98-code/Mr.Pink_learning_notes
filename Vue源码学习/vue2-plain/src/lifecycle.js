import {
    createElementVNode,
    createTextVNode
} from "./vdom/index";
import {
    patch
} from "./vdom/patch";
import Watcher from "./observer/watcher";
export function initLifcycle(Vue) {
    Object.defineProperties(Vue.prototype, {
        _render: {
            value: function _render() {
                const vm = this;
                return vm.$options.render.call(vm); // 执行 属性上的render函数，该边this的指向
                // _c返回一个虚拟节点
            }
        },
        _c: {
            // _c("div",{name:'zs'},...children) 元素 虚拟dom
            value: function _c() {
                return createElementVNode(this, ...arguments)
            }
        },
        _s: {
            // 变量转成字符串
            // 对于不是对象的字符串，没必要再次转字符串了，不然会多出引号 zs -> \"zs\"
            value: function _s(value) {
                return typeof value === "object" ? JSON.stringify(value) : value;
            }
        },
        _v: {
            // 文本的虚拟dom
            value: function _v() {
                return createTextVNode(this, ...arguments)
            }
        },
        _update: {
            value: function _update(vnode) {
                const vm = this;
                // 挂载的容器 
                const el = vm.$el;
                const preVnode = vm._vnode;
                // 记录每次产生 vnode,每次render一次就会产生一个新的 vnode
                vm._vnode = vnode;
                if (preVnode) {
                    vm.$el = patch(preVnode, vnode)
                } else {
                    // 初始 渲染
                    vm.$el = patch(el, vnode)
                }
            }
        }
    })
}
export function mountComponent(vm, container) {
    // 组件挂载
    // 1.render创建虚拟dom，
    // 2. 根绝虚拟dom产生真实dom
    //3. 挂载el到元素中
    // vm._render(); //vm.$options.render()
    // vm._update(); // 虚拟dom -> 真实dom

    // vm.$el = container; //记录挂载的容器
    Object.defineProperty(vm, "$el", {
        value: container,
        writable: true,
    });
    // 这里把渲染逻辑封装到watcher中
    // 该函数调用一次渲染一次
    const updateComponent = () => {
        // 1.调用render 产生虚拟节点 vNode
        const vNodes = vm._render();
        // 2. 根据虚拟dom 产生真实dom
        vm._update(vNodes);
    };
    new Watcher(vm, updateComponent, true); //每执行一次这个函数， 再构造函数中， updateComponent就执行一次
    // 3. 挂载到container上 _update中实现

}