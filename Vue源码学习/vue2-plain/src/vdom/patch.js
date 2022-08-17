import {
    isSameNode
} from './index'

function patch(oldVNode, vnode) {
    // 组件挂载 ，组件初始化 调用 $mount() -》 到patch这， 递归调用vnode
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
        insertBefore(parentElm, newEle, elm.nextSibling); //下一个节点 nextSibling, 先插入 然后再移除旧的节点
        removeChild(parentElm, elm);
        // console.log(newEle)
        return newEle; // 返回新的elm
    } else {
        // diff 更新节点
        return patchVnode(oldVNode, vnode);
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
        // 组件节点和真实节点
        if (createComponent(vnode)) {
            return vnode.componentInstance.$el;
        }
        vnode.el = createElement(tag); // vnode.el为一个真实的dom 
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
function createComponent(vnode) {
    // 尝试创建组件节点
    let i = vnode.props;
    if ((i = i.hook) && (i = i.init)) {
        i(vnode);
    }
    // vnode.props?.hook.init(vnode);
    return vnode.componentInstance;
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
    const newStyle = props?.style || {}; // 新的style

    // 样式移除
    for (let key in oldStyle) {
        if (!newStyle[key]) {
            el.style[key] = ""; // 去除老的样式
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

function replaceChild(parent, child, oldChild, type = "browser") {
    switch (type.toLowerCase()) {
      case "browser":
        // document.insertBefore
        parent.replaceChild(child, oldChild);
        break;
    }
}

function textContent(element, text, type = "browser") {
    // 替换el的文本内容为传入的text内容
    switch (type.toLowerCase()) {
        case "browser":
            element.textContent = text;
            break;
    }
}

// 挂载新孩子
function mountChildren(el, newChildren) {
    for (let i = 0; i < newChildren.length; i++) {
        const child = newChildren[i];
        appendChild(el, createEle(child)); // 加入到原来的el上
    }
}

// 卸载旧孩子
function unmountChildren(el, oldChildren) {
    oldChildren.forEach((child) => removeChild(el, child.el));//循环删除
}

function makeIndexByKey(children) {
    // 根据key获得index
    const map = {};
    children.forEach((child, index) => { map[child.key] = index })
    return map;
}
// 更新孩子
function updateChildren(el, oldChildren, newChildren) {
    // 双指针，比较两个孩子
    let oldStartIndex = 0, oldEndIndex = oldChildren.length - 1, newStartIndex = 0, newEndIndex = newChildren.length - 1;
    // 分别指向四个vnode
    let oldStartVnode = oldChildren[oldStartIndex], oldEndVnode = oldChildren[oldEndIndex];
    let newStartVnode = newChildren[newStartIndex], newEndVnode = newChildren[newEndIndex];
    // 乱序比较时使用的map
    let map = makeIndexByKey(oldChildren);//根据旧的孩子们 的key生成其对应的index;

    while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
        // 1.判断指针指向是否为underfined
        if (!oldStartVnode) { oldStartVnode = oldChildren[++oldStartIndex] }
        else if (!oldEndVnode) { oldEndVnode = oldChildren[--oldEndIndex] }

        // 比较节点，5种情况：1.head-head 2. head-tail 3. tail-head 4.tail-tail 5.乱序
        else {
            if (isSameNode(oldStartVnode, newStartVnode)) {
                // 递归比较子节点
                patchVnode(oldStartVnode, newStartVnode);
                // 比较结束， 移动指针；
                oldStartVnode = oldChildren[++oldStartIndex];
                newStartVnode = newChildren[++newStartIndex];
            } else if (isSameNode(oldEndVnode, newEndVnode)) {
                // 插入操作，尾部和尾部比较
                patchVnode(oldEndVnode, newEndVnode);
                oldEndVnode = oldChildren[--oldEndIndex];
                newEndVnode = newChildren[--newEndIndex];
            } else if (isSameNode(oldEndVnode, newStartVnode)) {
                // 旧的尾部和新的头部相同，把旧的尾插入到旧的头部节点之前
                patchVnode(oldEndVnode, newStartVnode);
                insertBefore(el, oldEndVnode.el, oldStartVnode.el);
                // 旧的尾指针前移， 新的头指针后
                oldEndVnode = oldChildren[--oldEndIndex];
                newStartVnode = newChildren[++newStartIndex];
            } else if (isSameNode(newEndVnode, oldStartVnode)) {
                // 
                patchVnode(oldStartVnode, newEndVnode);
                insertBefore(el, oldStartVnode.el, oldEndVnode.el.nextSibling);
                // 旧的头指针后移
                oldStartVnode = oldChildren[++oldStartIndex];
                newEndVnode = newChildren[--newEndIndex];
            } else {
                // 根据老的列表 做一个映射关系， 在新的种区寻找key,找到了则移动节点，找不到新增节点，最后移除多余的节点；
                // 有值的话移动节点的索引
                let moveIndex = map[newStartVnode.key];//赵新节点的开始节点的key
                if (moveIndex !== undefined) {
                    let moveVnode = oldChildren[moveIndex];//
                    // 插入到头节点之前
                    insertBefore(el, moveVnode, oldStartVnode.el);
                    // 讲对应的移动的节点置为undefined
                    oldChildren[moveIndex] = undefined; // 在程序开头处理过undefined， 此时默认指针+1
                    patchVnode(moveVnode, newStartVnode);
                }else {
                    // 直接插入新的节点
                    insertBefore(el, createEle(newStartVnode), oldStartVnode.el);
                }
                // 更新新的新开始指针
                newStartVnode = newChildren[++newStartIndex];
            }
        }

    }
    // 根据指针的情况，处理节点 1、新节点比旧节点多，挂载 2. 反之卸载旧节点
    if (newStartIndex <= newEndIndex) {
        for (let i = newStartIndex; i <= newEndIndex; i++) {
            // 可能向后追加，或者向前加入
            // 如果当前的虚拟dom后还有节点，有节点就插入到当前节点的前面
            const anchor = newChildren[newStartIndex + 1]?.el; // 如果没有的话，默认在结尾插入新节点
            insertBefore(el, createEle(newChildren[i]), anchor); // anchor如果时末尾节点，则插入到末尾处的空位置
        }
    }

    // 就节点比新的节点多，卸载
    if (oldStartIndex <= oldEndIndex) {
        for (let i = oldStartIndex; i <= oldEndIndex; i++) {
            oldChildren[i] && removeChild(el, oldChildren[i].el);//从el身上移除默认的el
        }
    }
    
}
function patchVnode(oldVnode, newVnode) {
    // 1.如果不是同一个几点， 直接替换老的微信的
    const el = oldVnode.el;
    if (!isSameNode(oldVnode, newVnode)) {
        // newNode为一个vnode
        let newEl = createEle(oldVnode); // 根据虚拟节点，创建新的element节点
        replaceChild(el.parentNode, newEl, el);
        return newEl;
    }
    // 之下为相同节点
    newVnode.el = el; // 复用
    // 文本节点，比较文本的内u容

    if (!oldVnode.tag) {
        // 没有tag标签，文本内容
        if (oldVnode.text != newVnode.text) {
            textContent(el, newVnode.text);
        }
    }
    // 标签内容， 比较属性
    patchProps(el, oldVnode.props, newVnode.props);
    // 比较儿子节点；
    //获取儿子
    const oldChildren = oldVnode.children || []; // 默认 vnode的儿子为数组形式
    const newChildren = newVnode.children || [];
    const oldLen = oldChildren.length, newLen = newChildren.length;
    // 分情况1. 两方都有儿子节点 2.一方有儿子，新的有，旧的没有；新的没有，旧的有；3.新的没有，旧的也没有；
    if (oldLen && newLen) {
        // 两方都有，更新孩子
        updateChildren(el, oldChildren, newChildren);
    } else if(newLen) {
        // 只有新节点有孩子 挂载
        mountChildren(el, newChildren);
    } else if (oldLen) {
        unmountChildren(el, oldChildren); // 老节点有孩子，现在没有需要卸载老的
    }
    return el;
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