// 声明变量指定类型
let test_num: number = 1; // a的值之后只能为数字
// a = "hello"; // 会直接报错, Type 'string' is not assignable to type 'number'
// a = 1; // 这里就不会报错

let test_num_c: boolean = true; // 直接声明
// 函数括号后面 定义为一个number
function sum(a: number, b: number):number{
    return a + b;
}
sum(123, 456)