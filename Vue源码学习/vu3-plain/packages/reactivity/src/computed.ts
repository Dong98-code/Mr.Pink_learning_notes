import { isFunction } from "@vue/shared";
import { activeEffect, ReactiveEffect, track, 
    trackEffects, triggerEffects
} from "./effect";
import { createDep } from "./dep";
    

export class ComputedRefImpl {
    public dep: any;
    public effect: ReactiveEffect;
    public __v_isReadonly = true;
    public __v_isRef = true;
    public _dirty = true; //默认取值的时候计算
    private _value; //get 和set操作的值
    constructor(getter, public setter) {
        
        this.dep = createDep();// 创建一个依赖 
        this.effect = new ReactiveEffect(getter, () => {
            //scheduler函数
            //触发了这个函数 说明响应式对象的值变化了
            //解锁 
            if (!this._dirty) {
                this._dirty = true;
                // 实现触发更新
                triggerEffects(this.dep); 
            }
        })
    } 
    //类中的属性访问器
    get value() {
        // 收集依赖
        debugger
        trackEffects(this.dep) //收集依赖
        if (this._dirty) {
            this._dirty = false;
            this._value = this.effect.run();

        }
        return this._value
    }

    set value(newValue) {
        this.setter(newValue)
    }
}


export const computed = (getterOrOptions) => {
    debugger
    //传入的是一个getter 或者是一个配置对象
    let onlyGetter = isFunction(getterOrOptions);
    let getter;
    let setter;
    if (onlyGetter) {
        //是一个函数，默认为getter函数
        getter = getterOrOptions;
        setter = () => { console.warn('no set') }; //没有配置

    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    return new ComputedRefImpl(getter, setter)
}