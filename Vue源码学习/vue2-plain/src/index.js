import { initMixin } from './init'
import { initLifcycle } from './lifecycle'
import { initGlobalStaticAPI } from './global-static-api';
import {initStateMixin} from "./initState"
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

export default Vue; 