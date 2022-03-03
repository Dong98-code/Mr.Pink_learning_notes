## 结构赋值

实例代码

```html
<script>
        //ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值，
        //这被称为解构赋值。
        //1. 数组的结构
        // const F4 = ['小沈阳','刘能','赵四','宋小宝'];
        // let [xiao, liu, zhao, song] = F4;
        // console.log(xiao);
        // console.log(liu);
        // console.log(zhao);
        // console.log(song);

        //2. 对象的解构
        // const zhao = {
        //     name: '赵本山',
        //     age: '不详',
        //     xiaopin: function(){
        //         console.log("我可以演小品");
        //     }
        // };

        // let {name, age, xiaopin} = zhao;
        // console.log(name);
        // console.log(age);
        // console.log(xiaopin);
        // xiaopin();

        let {xiaopin} = zhao;
        xiaopin();


    </script>


```

## 模板字符串



## 对象简写

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。
这样的书写更加简洁

```html
  <script>
        //ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。
        //这样的书写更加简洁
        let name = '尚硅谷';
        let change = function(){
            console.log('我们可以改变你!!');
        }

        const school = {
            name,
            change,
            improve(){
                console.log("我们可以提高你的技能");
            }
        }

        console.log(school);

    </script>
```

## 箭头函数

（=>） 定义函数

1. 静态， this指向声明是所在的作用域下的this值；
2. 箭头函数不能用作构造函数
3. 不能使用arguments
4. 省略小括号： 当形参有且只有一个
5. 省略花括号： 语句只有一个；， return 必须省略； 函数的执行结果就是函数的返回值；


代码说明：
```html
 <script>
        // ES6 允许使用「箭头」（=>）定义函数。
        //声明一个函数
        // let fn = function(){

        // }
        // let fn = (a,b) => {
        //     return a + b;
        // }
        //调用函数
        // let result = fn(1, 2);
        // console.log(result);


        //1. this 是静态的. this 始终指向函数声明时所在作用域下的 this 的值
        function getName(){
            console.log(this.name);
        }
        let getName2 = () => {
            console.log(this.name);
        }

        //设置 window 对象的 name 属性
        window.name = '尚硅谷';
        const school = {
            name: "ATGUIGU"
        }

        //直接调用
        // getName();
        // getName2();

        //call 方法调用
        // getName.call(school);
        // getName2.call(school);

        //2. 不能作为构造实例化对象
        // let Person = (name, age) => {
        //     this.name = name;
        //     this.age = age;
        // }
        // let me = new Person('xiao',30);
        // console.log(me);

        //3. 不能使用 arguments 变量
        // let fn = () => {
        //     console.log(arguments);
        // }
        // fn(1,2,3);

        //4. 箭头函数的简写
            //1) 省略小括号, 当形参有且只有一个的时候
            // let add = n => {
            //     return n + n;
            // }
            // console.log(add(9));
            //2) 省略花括号, 当代码体只有一条语句的时候, 此时 return 必须省略
            // 而且语句的执行结果就是函数的返回值
            let pow = n => n * n;
                
            console.log(pow(8));

    </script>
```

### 箭头函数的实践

需求1. 点击div 2s后变成粉色；

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>点击2s变色</title>
    <style>
        #box {
            width: 100px;
            height: 100px;
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <div id="box">
        
    </div>
    <script>
        let box = document.getElementById('box');
        box.addEventListener('click', function() {
            let _this = this;
            setTimeout(()=>{
                // 箭头函数中的this为声明函数所在作用域下的this
                this.style.background = 'pink';
                // _this.style.background = 'pink';
            }, 2000)
        })
    </script>
</body>
</html>
```

箭头函数 适用于 与this无关的 环境；

有关： dom事件回调；
对象的方法：


## Symbol()

创建symbol

表示独一无二的值
```js
let s = Symbol();
let s = Symbol.for();
```

特点：

1. 不能与其他数据 进行运算
2. Symbol的值是唯一的， 解决命名冲突的问题
3. Symbol定义的对象属性 不能用 for ..in 遍历； 但可以 使用 Reflect.ownKeys()获取键名

### Symbol创建对象属性

```html
<script>
        //向对象中添加方法 up down
        let game = {
            name:'俄罗斯方块',
            up: function(){},
            down: function(){}
        };
        
        //声明一个对象
        let methods = {
            up: Symbol(),
            down: Symbol()
        };
        // 扩展方法， 向symbol添加方法， 害怕出现同名的方法
        game[methods.up] = function(){
            console.log("我可以改变形状");
        }

        game[methods.down] = function(){
            console.log("我可以快速下降!!");
        }

        // console.log(game);

        //
        let youxi = {
            name:"狼人杀",
            // 不可以 Symbol()。 添加中括号
            [Symbol('say')]: function(){
                console.log("我可以发言")
            },/ 
            [Symbol('zibao')]: function(){
                console.log('我可以自爆');
            }
        }

        console.log(youxi)

        
    </script>
``` 



### symbol内置值

```js
<script>
        class Person{
            static [Symbol.hasInstance](param){
                console.log(param);
                console.log("我被用来检测类型了");
                return false;
            }
        }

        let o = {};

        console.log(o instanceof Person);

        const arr = [1,2,3];
        const arr2 = [4,5,6];
        arr2[Symbol.isConcatSpreadable] = false;
        console.log(arr.concat(arr2));
    </script>
```

### 补充：

symbol值作为对象属性的的标志符； 唯一的字符串 


#### Symbol.for()

![20220301203408](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220301203408.png)


![20220301203517](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220301203517.png)

![20220301203533](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220301203533.png)


## 11. 迭代器

Iterator

部署 该结构， 就可以是实现 遍历操作；

for...of

### 特性：

原生具备 Iterator接口的数据 for of 

![20220301205835](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220301205835.png)


for...in 键名；
for .. of 键值；


### 原理

1. 创建指针对象
2. 调用对象的next方法；指针自动指向 数据结构的第一个成员
3. 接下来不断调用next方法， 指针一直外后移动， 直到指向最后一个成员
4. 没调用一次 next 返回一个value和done属性的对象；
   

### 自定义迭代器对象

自定义遍历

```js
<script>
        //声明一个对象
        const banji = {
            name: "终极一班",
            stus: [
                'xiaoming',
                'xiaoning',
                'xiaotian',
                'knight'
            ],
            [Symbol.iterator]() {
                //索引变量
                let index = 0;
                //
                let _this = this;
                // 返回一个对象
                return {
                    next: function () {// next的返回值应该也是一个包含 value和done的对象
                        if (index < _this.stus.length) {
                            const result = { value: _this.stus[index], done: false };
                            //下标自增
                            index++; // 自增 和用于判断 遍历结束
                            //返回结果
                            return result;
                        }else{
                            return {value: undefined, done: true};
                        }
                    }
                };
            }
        }

        //遍历这个对象 
        for (let v of banji) {
            console.log(v);
        }
    </script>
```


## 生成器 

本质是一个函数

实现 异步变成；

声明方式：

```js
// 星号
function * gen() {
    
}

```

调用next()方法才会执行；


### yield语句

后面跟函数 或者表达式；

```js
// console.log(111);
            yield '一只没有耳朵';
            // console.log(222);
            yield '一只没有尾部';
            // console.log(333);
            yield '真奇怪';
            // console.log(444);
```

函数代码的分隔符；

使用next（）方法执行： 没调用一次next()方法， 输出对应的yield语句；

### 生成器的函数参数

next方法可以传入实参， 作为yield返回的结果；
第二次调用 next(value)作为第一个 yield的返回结果
![20220301230229](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220301230229.png)

BBB 为第二次调用next(), 第一次调用的结果为 one 所以现在 one = 'BBB'

### 生成器函数实例

```html
    <script>
        // 异步编程  文件操作 网络操作(ajax, request) 数据库操作
        // 1s 后控制台输出 111  2s后输出 222  3s后输出 333 
        // 回调地狱
        function one() {
            setTimeout(()=>{
                console.log('111');
                interator.next();
            },1000)
        }
        function two() {
            setTimeout(()=>{
                console.log('111');
                interator.next();
            },1000)
        }
        function three() {
            setTimeout(()=>{
                console.log('111');
                interator.next();
            },1000)
        }
        function * gen() {
            yield one();
            yield two();
            yield three();
        }
        let interator = gen();
        interator.next()
        
    </script>
```


## promise

解决异步编程的新的解决方案；

语法上 为一个构造函数， 用来封装异步函操作 并可以获得失败和成功的结果；

### 准备
#### 1.1 实例对象和函数对象
![20220302153609](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302153609.png)

相关代码：

```html
<script>
        function Fn() {

        }
        const Fn = new Fn()// Fn 为构造函数， fn为实例对象，简称为对象

        // function Person(name) {
        //     //
        // }
        // let p = new Person() ; // 实例
        
        console.log(Fn.prototype); // Fn为函数对象， 此时Fn作为对象使用；
        Fn.bind({}) // 函数对象的bind方法，函数对象才有的方法；

        Fn.call({}) // Fn 函数对象； 
    </script>
```
#### 1.2 同步回调 和异步回调

同步回调：
```html
<script>
        const arr = [0, 1, 3];
        arr.forEach(item => {
            console.log(item);
        })
        console.log('foreach之后'); //
    </script>
```

![20220302154043](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302154043.png)

遍历回调。 同步回调；

立即执行， 完全执行完之后 

异步回调：

放在队列之中， 将来执行；
异步队列 同步队列 执行完之后才执行 异步队列；

例子： 定时器， ajax回调； Promise的成功失败案例；

![20220302154145](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302154145.png)

#### 1.3 error 处理

- 错误的类型
  1). referenceError  引用错误； 
  a is not defined ， 引用了一个不存在的变量；
  2) TypeError: 数据类型错误
  3) RangeError : 数据值不在其 范围内；
  4) 
- 错误处理
  捕获错误和抛出错误
  1) try...catch捕获
   ![20220302155750](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302155750.png)

   error对象里面有两个属性： message，stack
  2) throw error

    示例：
    ```js
     function sth() {
            if (Date.now() % 2 === 1) {
                console.log('can');
            } else {// 抛出异常
                throw new Error("can't");
            }
        }
        try {
            sth();
        } catch (error){
            alert(error.message);
        }
    ```
- 错误对象
### promise 的理解和使用
#### 2.1 pormise 是什么？
从语法上说： promise 是一个 构造函数
从功能上来说： promise 对象用来封装一个异步操作 并可以获取其结果

- 状态改变
  resolved / rejected
  pending： 未确定的
  ![20220302163138](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302163138.png)
- 基本流程
  1. 创建 新的 promise 对象
   传入一个参数， 函数； 执行异步操作
   2. 执行异步操作
   3. 调用成功或者失败的回调函数
   4. 返回一个新的promise对象
   ![20220302163545](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302163545.png)
#### 2.2 为什么？

基本使用：
```html
<script>
        const p = new Promise((resolve, reject) => {
            // 该箭头函数称为执行器函数
            // 执行异步函数
            // 成功 调用 resolve(value) value为传入的数据
            // 失败 reject(reason)
            // 执行器函数为同步回调
            setTimeout(() => {
                let time = Date.now()
                if (time % 2 == 0) {
                    resolve('成功的数据,time:' + time);
                } else {
                    reject('失败的数据,time:' + time);
                }
            }, 1000);
        })
        
        p.then(
            value => {
                // 接受得到成功的value数据
                console.log(value);
            },
            reason => {
                // 接收失败的reason数据
                console.log(reason);
            }
        )
    </script>
```

为社么使用 promise:

之前的方式：

纯的回调函数： 回调地狱问题；

1. 在执行异步函数之前， 就必须定义好需要执行的异步函数；
   先指定回调函数， 再 启动异步任务；
2. 回调地狱 
   回调函数嵌套， 外部回调函数异步执行的结果吗是嵌套的回调函数执行的条件；

promise 启动 异步任务 =》 返回promise对象=》 给promise对象绑定回调函数


回调地狱：

![20220302204028](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302204028.png)


![20220302204246](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302204246.png)

异常传透  执行错误的回调函数 
#### 2.3 如何使用 promise

mdn 看吧

关键问题：

- 1.如何改变promise状态：
   ![20220302211702](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302211702.png)

    抛出异常， 没有处理‘
    pending 变为rejected，reason 为 抛出的对象： error 或者其他
   ![20220302211912](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302211912.png)

   ![20220302212116](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302212116.png)

- 2. 一个promise指定了多个成功或者失败的回调， 都会调用吗？
  都会

- 3. 改变 promise状态 和指定 回调函数谁先谁后？
  ![20220302220250](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302220250.png)

  一般为： 先指定回调函数，再改变状态；
- 4. promise.then() 返回的新的promise的结果 状态由什么决定？
  由then()指定的回调函数的结果 决定；
    - 如果抛出异常， 新的promise变成 rejected ， reason 为抛出的异常；
    - 如果返回的是 非 promise 的任意值， 新的promise会变成resolved ， value为返回的值；
    - 如果返回的是另一个promise 此promise 的结果为新的 promise的结果
- 5. promise 如何串联 多个操作任务？
    ![20220302222448](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220302222448.png)

    
### 自定义 promise
#### 1. 自定义 整体结构

### async 和 await

### js 异步宏队列 和 微队列

### 面试题


