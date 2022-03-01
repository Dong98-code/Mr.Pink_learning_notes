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



