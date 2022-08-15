function patch(oldVNode, vnode) {
    if (!oldVNode) return createEle(vnode);
    const isRealElement = oldVNode.nodeType; //真实节点身上会有一个nodeType属性,如果是虚拟dom，没有该属性
    // debugger;
    if (isRealElement) {
        // debugger;
        const elm = oldVNode
        const parentElm = elm.parentNode;
        // console.log(parentElm)
        const newEle = createEle(vnode);
        // 插入新dom 移除父节点上的老dom节点
        insertBefore(parentElm, newEle, elm.nextSibling);//下一个节点 nextSibling, 先插入 然后再移除旧的节点
        removeChild(parentElm, elm);
        // console.log(newEle)
        return newEle; // 返回新的elm
    } else {
        // diff 更新节点
    }
}

function createEle(vnode) {
    //vnode一个js对象
    //根据这个对象 然后创建真实的dom节点
    const {
        tag,
        props,
        children,
        text
    } = vnode
    if (typeof tag === 'string') {
        vnode.el = createElement(tag);
        // 更新属性值
        patchProps(vnode.el, {}, props);
        children.forEach((child) => {
            // 如果孩子是组件 会实例化组件 并且插入到父组件内部子节点的最后
            appendChild(vnode.el, createEle(child));
        });

    } else if (typeof tag === "object") {
        // 
    } else {
        vnode.el = createTextNode(text) // 创建真实的文本节点
    }
    return vnode.el;
}

function createTextNode(tag, type = "browser") {
    switch (type.toLowerCase()) {
        case "browser":
            return document.createTextNode(tag);
    }
}

function createElement(tag, type = "browser") {
    switch (type.toLowerCase()) {
        case "browser":
            return document.createElement(tag); // 原生创建节点的方法
    }
}

function patchProps(el, oldProps, props) {
    // 节点，原来的属性值，新的属性值
    const oldStyle = oldProps?.style || {}; // 旧的属性值存在 且 style不为空
    const newStyle = props ?.style || {};

    // 样式移除
    for (let key in oldStyle) {
        if (!newStyle[key]) {
            el.style[key] = "";
        }
    }

    for (const key in oldProps) {
        if (!props[key]) {
            removeAttribute(el, key);
        }
    }

    // 属性存在 则覆盖
    for (const key in props) {
        if (key === "style") {
            Object.keys(props[key]).forEach((k) => (el.style[k] = props["style"][k]));
        } else {
            setAttribute(el, key, props[key]);
        }
    }
}

function setAttribute(el, key, value, type = "browser") {
    switch (type.toLowerCase()) {
        case "browser":
            el.setAttribute(key, value);
            break;
    }
}

function appendChild(parent, child, type = "browser") {
    switch (type.toLowerCase()) {
      case "browser":
        parent.appendChild(child);
        break;
    }
}
  
function insertBefore(parent, child, prevChild, type = "browser") {
    switch (type.toLowerCase()) {
      case "browser":
        // document.insertBefore
        parent.insertBefore(child, prevChild);
        break;
    }
  }
  
  function removeChild(parent, child, type = "browser") {
    switch (type.toLowerCase()) {
      case "browser":
        parent.removeChild(child);
        break;
    }
  }
  export {
    patch,
    createEle,
    patchProps,
    createElement,
    createTextNode,
    appendChild,
    setAttribute,
    insertBefore,
    removeChild
  };
  