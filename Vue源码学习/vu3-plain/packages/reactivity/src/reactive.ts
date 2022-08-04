import { isObject } from "@vue/shared";
import {mutableHandlers, ReactiveFlags} from './baseHandler'
// 1) 将数据转化成响应式的数据, 只能做对象的代理
const reactiveMap =  new WeakMap(); // key只能是对象


// 1）实现同一个对象 代理多次，返回同一个代理 -- 使用 weakMap存储
// 2）代理对象被再次代理 可以直接返回 -- 使用 ReactiveFlags 表示 是否经过代理 
export function reactive(target){
    if(!isObject(target)){
        return 
    }
    if(target[ReactiveFlags.IS_REACTIVE]){ // 如果target是一个代理对象，那么一定被代理过了，会走get， 取这个目标字段，则会调用get 方法
        return target
    }
    // 并没有重新定义属性，只是代理，在取值的时候会调用get，当赋值值的时候会调用set
    let exisitingProxy = reactiveMap.get(target);
    if(exisitingProxy){
        return exisitingProxy
    }
    // 第一次普通对象代理，我们会通过new Proxy代理一次
    // 下一次你传递的是proxy 我们可以看一下他有没有代理过，如果访问这个proxy 有get方法的时候说明就访问过了
    const proxy = new Proxy(target, mutableHandlers);
    
    reactiveMap.set(target,proxy);
    return proxy;
}
