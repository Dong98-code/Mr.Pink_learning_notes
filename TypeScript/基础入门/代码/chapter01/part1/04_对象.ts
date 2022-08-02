let a: object;
let b: { name: string, age?:number}; //？表示可选属性
b = { name: "孙悟空" } 
let c = { name: '' }; //有且只有 name属性而不能有其他的属性

let d: { name: string, [propName: string]: any } // 键名为字符串或者Symbol, 值可以为any

//对函数做出限制， e为一个函数， 参数为啊，b,输出值也为number
//设置函数的结构结构声明

let e: (a: number, b: number) => number; 

// 数组
let arr1: number[];
let arr2: Array<number>; // 声明数组

// tuple元组 
// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同