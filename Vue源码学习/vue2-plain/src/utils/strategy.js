// 定义合并策略
// 策略模式
export const strategy = {};
// 生命周期
const LIFE_CYCLE = [
    "beforeCreate",
    "created",
    "beforeMount",
    "mounted",
    "beforeUpdate",
    "update",
];
LIFE_CYCLE.forEach((hook) => {
    // 策略是一个对象，key为声明周期的钩子，分别定义为不同的函数
    strategy[hook] = function (s1, s2) {
        //  s1 s2为 source1[key], source2[key]
        if (s2) {
            // minin混入的有这个key
            if (s1) {
                // 原来也有,现在也有
                // 合并选项
                // return s1.concat(s2);
                return [...s1, s2];
            } else {
                // 全局options没有 用户传递的有 变成数组
                return [s2];
            }
        } else {
            return s1;
        }
    };
});

// 组件的合并策略
strategy.components = function (parentVal, childVal) {
    // TODO 这里这种做法不一定很好 该条件是不是应该有还应该考究 有了该条件 全局的组件定义的位置不同 可能最后的结果不同
    // 已经和全局组件对象创建关系了，则不需要再次建立关系 直接返回
    // if (Object.getPrototypeOf(parentVal) === Vue.options.components)
    //   return parentVal;
    // 通过父亲 创建一个对象 原型上有父亲的所有属性和方法
    const res = Object.create(parentVal); // {}.__proto__ = parentVal, 包含着父亲的多有属性，res的原型为parentVal
    if (childVal) {
        for (const key in childVal) {
            // 拿到所有的孩子的属性和方法
            res[key] = childVal[key];//res自身的有的方法， res[[proto]]上为全局的components
        }
    }
    // console.log(res);
    return res;
};