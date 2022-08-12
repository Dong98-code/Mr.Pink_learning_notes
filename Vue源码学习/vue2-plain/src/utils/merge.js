import {
    strategy
} from "./strategy";
export function mergeOptions(...options) {
    function mergeField(key) {
        // 需要用到的处理函数
        if (strategy[key]) {
            opts[key] = strategy[key](source1[key], source2[key]);
        } else {
            opts[key] = source2[key] === void 0 ? source1[key] : source2[key];
        }
    }
    // 
    const opts = {};
    const [source1, source2] = options;
    for (let key in source1) {
        // 遍历key属性
        mergeField(key);
    }

    for (let key in source2) {
        // 遍历孩子的key
        // source1没有的key 再去处理 source2中的key
        if (!source1.hasOwnProperty(key)) {
            mergeField(key)
        }
    }

    if (options.length > 2) {
        options.splice(0, 2)
        return mergeOptions(opts, ...options);
    }
    return opts;
}