import { initMixin } from './init'
import { initLifcycle } from './lifecycle'
import { initGlobalStaticAPI } from './global-static-api';
import {initStateMixin} from "./initState"
import { compileToFunction } from './compiler/index';
import { createEle, patch } from './vdom/patch';
/**
 * Vue构造函数
 * @param {*} options 用户选项
 */

function Vue(options) {
    // 初始化
    this._init(options);
}

initMixin(Vue); // 扩展_init方法
initLifcycle(Vue);
// 静态方法
initGlobalStaticAPI(Vue);
initStateMixin(Vue)

let render1 = compileToFunction(`<ul key="a" a="1" style="color:blue">
<li key="a">a</li>
<li key="b">b</li>
<li key="c">c</li>
</ul>`);
let vm1 = new Vue({
    data() {
        return {
            name: "xddd"
        }
    },
});
let preVnode = render1.call(vm1)

let el = createEle(preVnode);
document.body.appendChild(el);
console.log(document.body);
let render2 = compileToFunction(`<ul key="a" a="1" style="color:blue">
<li key="d">d</li>
<li key="e">e</li>
<li key="a">a</li>
<li key="b">b</li>
<li key="f">f</li>
</ul>`);;
let vm2 = new Vue({
    data() {
        return {
            name: "xddd"
        }
    },
});
let nextNode = render2.call(vm2)
setTimeout(() => {
    patch(preVnode, nextNode)
},1000)
export default Vue; 