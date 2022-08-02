//字面量 声明
let a: 10; // 10字面量为数字 类似于常量
// a = 11; // 报错， 限制

let b: "male" | "female" | 10; // 使用 | 连接字面量

// any表示认为一类型
let d: any; // 对改变量 关闭 ts的类型检索， 对别的变量没有影响； 不建议使用any
let e; //  声明但是不赋值， 默认为any

/*
未知类型:unknown
未知类型赋值给 确定的类型 会报错；
 
*/

let f: unknown; 

e = f as unknown; // 类型断言

function fn():never {
    // return true
    // 没有返回值 返回为空 void
    // return; //没有返回值 return null
    // return null;
    // never 永远不会返回结果 ，异常 捕获错误的情况
    throw new Error('') // 抛出错误 的情况下没有返回值值
}
