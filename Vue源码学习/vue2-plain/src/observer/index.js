import {
    isObject
} from '../utils/index';
import arrayProto from './array'
class Observer {
    constructor(data) {
        // object.definedProperty已有的数据的劫持
        Object.defineProperty(data, "__ob__", {
            value: this, // observe的实例
            enumerable:false //该属性不可枚举
        });
        if (Array.isArray(data)) {
            // 重写数组上的7个方法 这7个变异方法是可以修改数组本身的
            // 保留数组原有的方法，重新部分方法
            Object.setPrototypeOf(data, arrayProto);
            this.observeArray(data);
        } else {
            this.walk(data);

        }
    }
    walk(data) {
        // 堆属性进行劫持
        // 重新定义属性
        Object.keys(data).forEach(key => defineReactive(data, key, data[key]))
    }
    observeArray(data) {
        data.forEach(item => observer(item))
    }
}

// vue2 应用了defineProperty需要一加载的时候 就进行递归操作，所以好性能，如果层次过深也会浪费性能
// 1.性能优化的原则：
// 1) 不要把所有的数据都放在data中，因为所有的数据都会增加get和set
// 2) 不要写数据的时候 层次过深， 尽量扁平化数据
// 3) 不要频繁获取数据
// 4) 如果数据不需要响应式 可以使用Object.freeze 冻结属性
/**
 * vue2 慢的原因 主要在这个方法中
 * 定义目标对象上的属性为响应式
 * @param {Object} obj
 * @param {string|symbol} key
 * @param {*} value
 */
export function defineReactive(obj, key, value) {
    // 如果属性也是对象 再次劫持 childOb有值的情况下是Observe实例，实例上挂载了dep
    observer(value);
    // 每个属性都有一个dep
    Object.defineProperty(obj, key, {
        get() {
            return value;
        },
        set(newVal) {
            // 监视新的属性
            if (newVal === value) return;
            // 新值是对象 则需要重新观测
            observer(newVal)
            value = newVal;

        },
    });
}
export function observer(data) {
    //  只对对象进行劫持
    // 一个对象只劫持一次， 创建一个Observer类
    // 不是对象 不需要劫持
    if (!isObject(data)) return;
    if (data.__ob__ instanceof Observer) return data.__ob__;

    //判断是否劫持过对象
    return new Observer(data)

}