import { initMixin} from './init'
/**
 * Vue构造函数
 * @param {*} options 用户选项
 */

function Vue(options) {
    // 初始化
    this._init(options);
}

initMixin(Vue); // 扩展_init方法

export default Vue; 