// 收集依赖 更新依赖
//传入两个参数 fn回调函数 和options
//使用类 activeEffect扩展函数fn完成 完成依赖的收集
//默认激活 1.非激活的时候 只需要执行回调函数 并不需要完成依赖收集
import { ReactiveEffectRunner } from "vue";
import { createDep } from "./dep";
let shouldTrack = false; //定义一个全局变量 当 收集的时候 收集依赖
const targetMap = new WeakMap();

export let activeEffect = void 0;
export class ReactiveEffect {
    public onStop?: () => void;
    public active = true;
    public parent = null;
    deps = [] //记录里面所有依赖的属性
    constructor(public fn, public scheduler?) { }; // 传递的fn绑定到当前的reactiveEffect上面

    run() {
        if (!this.active) { this.fn() } // 非激活状态直接执行
        //收集依赖
        shouldTrack = true;
        try {
            // debugger
            this.parent = activeEffect;
            activeEffect = this;
            return this.fn();
        } finally {
            activeEffect = this.parent; // 结束 解绑
            shouldTrack = false;
        }
    }


    stop() {
        if (this.active) {
            // 如果第一次执行 stop 后 active 就 false 了
            // 这是为了防止重复的调用，执行 stop 逻辑
            cleanupEffect(this);
            if (this.onStop) {
                this.onStop();
            }
            this.active = false;
        }
    }
}

export function effect(fn, options: any = {}) {
    const _effct = new ReactiveEffect(fn, options.scheduler);
    _effct.run();//默认执行一次

    const runner: any = _effct.run.bind(_effct);
    runner.effect = _effct;
    return runner;
}
export function stop(runner) {
    runner.effect.stop();
}


// 用于判断是否应该收集依赖
export function isTracking() {
    return shouldTrack && activeEffect !== undefined;
}
export function track(target, type, key) {
    if (!isTracking()) {
        return; // 此时不收集依赖
    }
    // 确认有没有存放过 第一次？
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        // 初始化deepMap
        depsMap = new Map();
        targetMap.set(target, depsMap)
        // weekmap = {对象：Map{name:set()}}
    }
    // 判断是否存在依赖
    let dep = depsMap.get(key); // 这个对象中是否存在一个 key操作的依赖
    if (!dep) {
        // 创建dep
        // 为一个set
        dep = createDep();
        depsMap.set(key, dep);
    }
    trackEffects(dep); // 处理依赖

}

// 定义函数 收集依赖

export function trackEffects(dep) {
    // dep对象存储effet
    // 这里是一个优化点
    // 先看看这个依赖是不是已经收集了，
    // 已经收集的话，那么就不需要在收集一次了
    // 可能会影响 code path change 的情况
    // 需要每次都 cleanupEffect
    // 处理双向的依赖 
    if (activeEffect) {
        if (!dep.has(activeEffect)) {
            dep.add(activeEffect);
            (activeEffect as any).deps.push(dep) // effect记录所有的属性值
        }
    }


}

export function trigger(target, type, key, value, oldValue) {
    // debugger;
    let deps: Array<any> = [];
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        return; // 触发的值不在模板当中
    }
    const dep = depsMap.get(key);
    deps.push(dep) //

    const effects: Array<any> = [];
    deps.forEach((dep) => {
        effects.push(...dep);
    })
    // 这里的目的是只有一个 dep ，这个dep 里面包含所有的 effect
    // 这里的目前应该是为了 triggerEffects 这个函数的复用
    triggerEffects(createDep(effects));

}

export function triggerEffects(dep) {
    // 执行收集到的所有的 effect 的 run 方法
    for (const effect of dep) {
        if (effect.scheduler) {
            // scheduler 可以让用户自己选择调用的时机
            // 这样就可以灵活的控制调用了
            // 在 runtime-core 中，就是使用了 scheduler 实现了在 next ticker 中调用的逻辑
            //   如果传入 调度函数 则使用 escheduler()
            effect.scheduler();
        } else {
            effect.run();
        }
    }
}

export function cleanupEffect(effect) {
    //找到所有依赖这个effect的响应式对象
    //把这些响应式对象 effexct清除
    effect.deps.forEach((dep) => {
        dep.delete(effect); //解除effect
    })
    effect.deps.length = 0; //双向清除
}