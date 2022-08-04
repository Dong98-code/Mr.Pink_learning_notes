import { isObject } from "@vue/shared";
import { reactive } from "./reactive";
import { track, trigger } from "./effect";

export const enum ReactiveFlags {
    IS_REACTIVE = '__v_isReactive' //响应式的标志
}
export const mutableHandlers = {
    get(target,key,receiver){
        if(key === ReactiveFlags.IS_REACTIVE){
            return true;
        }
        track(target,'get',key)
        // 去代理对象上取值 就走get
        // 这里可以监控到用户取值了
        // debugger
        let res =  Reflect.get(target,key,receiver)

        if(isObject(res)){
            return reactive(res); // 深度代理实现
        }
        return res;
    },
    set(target,key,value,receiver){
        // 去代理上设置值 执行set
        // debugger
        let oldValue = target[key];
        let result = Reflect.set(target,key,value,receiver);
        if(oldValue !== value){ // 值变化了
            // 要更新 
            trigger(target,'set',key,value,oldValue)
        }
        // 这里可以监控到用户设置值了
        return result
    }
}

