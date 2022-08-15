let oldArrayProto = Array.prototype; //原来的数组的原型
let newArrayProto = Object.create(oldArrayProto);
// 改写7个会改变原数组的方法
// shift splice, push, pop sort, unshift, reverse
const methods = [
    "push",
    "pop",
    "unshift",
    "shift",
    "reverse",
    "sort",
    "splice",
];

methods.forEach(method => {
    newArrayProto[method] = function (...args) {
        let inserted;
        const ob = this.__ob__; //__ob__为 Observer的实例，所以可以调用 observeArray这个方法
        switch (method) {
            case "push":
            case "unshift": // 插入元素
              // 新增的元素 可能是对象
              inserted = args;
              break;
            case "splice": // 数组最强方法 splice(start, delCount, ...新增元素)
              inserted = args.slice(2); // 新增的元素
              break;
            default:
              break;
          }
        console.log(`重写的${method}方法被调用------> this = `, this);
        if (inserted) {
            // 观测新增的内容,数组
            ob.observeArray(inserted);
          }
      const res = oldArrayProto[method].call(this, ...args);
      ob.dep.notify();
      return res

    }
})
export default newArrayProto