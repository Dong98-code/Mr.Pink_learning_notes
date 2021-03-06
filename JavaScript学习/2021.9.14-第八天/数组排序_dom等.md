# array.sort()

默认排序方法，将元素转换成 字符串，比较比较UTF-16代码单元值序列构建

本地排序

## 语法

`arr.sort([compareFunction])`

简单示例

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

```

> 从上面的案例，可以看到， 先将元素转化成字符串，按照字符编码的顺序排序。这样就会看到 1000 会排序到 21 前面


## syntax

```
// Functionless
sort()

// Arrow function
sort((firstEl, secondEl) => {... } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(firstEl, secondEl) { ... })

```

比较准则：
`compareFunction(a,b)` 如果又 比较函数，根据比较函数的返回值，排序ab

![20210914150130](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210914150130.png)

返回 值>0, 则将b 排在a前面
所以 将数组升序排列则可以使用 
```
function compareNumbers(a, b) {
  return a - b;
}

```
```javascript
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

```
### 箭头函数


`sort((firstEl, secondEl) => { ... } )`

```
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]
```


### 字符串相比

`localeCompare()` 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。`

语法：
`referenceStr.localeCompare(compareString[, locales[, options]])`
参数：
比较的字符串

返回值
如果引用字符存在于比较字符之前则为负数; 如果引用字符存在于比较字符之后则为正数; 相等的时候返回 0 .

![20210914161029](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210914161029.png)


![20210914161553](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210914161553.png)

默认按照字典序，也就是 字母的顺序

a.localCompare(b): a在 b之前，则，也就是引用字符串在比较字符串之前，返回负数；-1；这样，sort（a,b）便是按照升序排列

# 箭头函数


适用于 一些需要匿名函数的地方，并且不用构造函数


## 基础语法

```
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
//相当于：(param1, param2, …, paramN) =>{ return expression; }

// 当只有一个参数时，圆括号是可选的：
(singleParam) => { statements }
singleParam => { statements }

// 没有参数的函数应该写成一对圆括号。
() => { statements }
```

### 箭头函数的优点

函数语句更短

```javascript
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) {
  return element.length;
}); // 返回数组：[8, 6, 7, 9]

// 上面的普通函数可以改写成如下的箭头函数
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// 当箭头函数只有一个参数时，可以省略参数的圆括号
elements.map(element => {
 return element.length;
}); // [8, 6, 7, 9]

// 当箭头函数的函数体只有一个 `return` 语句时，可以省略 `return` 关键字和方法体的花括号
elements.map(element => element.length); // [8, 6, 7, 9]

// 在这个例子中，因为我们只需要 `length` 属性，所以可以使用参数解构
// 需要注意的是字符串 `"length"` 是我们想要获得的属性的名称，而 `lengthFooBArX` 则只是个变量名，
// 可以替换成任意合法的变量名
elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

```


# Web APIS

二者关联性
![20210914162408](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210914162408.png)

前面es6 基础
js 基础语法

现在主要学习 DOM 和BOM

实现页面的交互效果


## API 

应用程序变成接口

Application Programming Interface

## Web API 

浏览器的功能和页面元素

DOM

总结：
![20210914162931](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210914162931.png)
## dom 简介

DOM 为xml 和html的 编程接口

它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的`结构，样式和内容`。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来。
档对象模型（DOM）提供了对同一份文档的另一种表现，存储和操作的方式。 DOM是web页面的完全的面向对象表述，它能够使用如 JavaScript等脚本语言进行修改。

## 1.2 dom树

一个页面就是一个文档
![20210915163503](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210915163503.png)

dom 以上 看成对象

## dom 和js


开始的时候，JavaScript和DOM是交织在一起的，但它们最终演变成了两个独立的实体。JavaScript可以访问和操作存储在DOM中的内容，因此我们可以写成这个近似的等式：

API (web 或 XML 页面) = DOM + JS (脚本语言)

dom同样可以通过其他的语言访问


当您在创建一个脚本时-无论是使用内嵌 `<script>`元素或者使用在web页面脚本加载的方法— 您都可以使用 `document`或 `window` 元素的API来操作文档本身或获取文档的子类（web页面中的各种元素）。

您的DOM编程代码可能会像下面例子一样非常简单，如使用 window对象的alert()函数显示一个警告信息，或者使用比较复杂的方法来创建一个新的内容，如下面内容较长的实例所示

```JAVASCRIPT
<html>
  <head>
    <script>
    // run this function when the document is loaded
       window.onload = function() {
    // create a couple of elements
    // in an otherwise empty HTML page
       heading = document.createElement("h1");
       heading_text = document.createTextNode("Big Head!");
       heading.appendChild(heading_text);
       document.body.appendChild(heading);
      }
    </script>
  </head>
  <body>
  </body>
</html>

```

![20210915164521](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210915164521.png)
## 2 获取元素
 2.1 如何获取元素

### 2.1 根据id获得
`getElementById`

```javascript
</head>
<body>
    <div id="timr">2021-9-15</div>
    <script>
        let timer = document.getElementById('timr')
        console.log(timer);
    </script>
    
</body>
```

![20210915201309](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210915201309.png)

### 2.3根据标签名获取

`getElementByTagName`

```javascript
<ul>
        <li>1230</li>
        <li>1230</li>
        <li>1230</li>
        <li>1230</li>
        <li>1230</li>
    </ul>
    <script>
        let lis = document.getElementsByTagName(li)
        console.log(lis);
    </script>
```
返回对象：
元素集合
以伪数组的形式存储


依次打印 各个元素
for循环

得到的元素为动态的

3. 当只有一个小li，返回的依然是伪数组的形式
4. 页面中，没有元素，返回的是空的伪数组
5. 只获取 ul中的指定标签名的元素
指定父元素，获得子元素的标签

父元素必须为一个对象


### 根据类名 新增 方法

根据类名获得元素

`document.getElementsByClassName()`
根据类名返回元素；
返回伪数组形式


querySelector  指定选择器的第一个元素对象
`.box`类选择器

`#nav`id选择器

`document.querySelectorAll()`
返回所有的对象；
返回伪数组形式


### 获取特殊标签
body 标签

`document.body`

返回元素对象

`document.html`
返回 undefined

`document.documentElement` 返回html对象

# 事件

JS检测到的行为

触发响应机制

网页中的每一个元素 都可以产生 可以触发 JavaScript 的事件， 可以在用户点击某一个按钮的时候产生一个事件，然后去执行这些操作

点击之后，进行某些操作

1. 事件由三部分组成

事件源 事件类型 事件处理程序

（1）事件源

事件被触发的对象 例如 按钮

(2) 事件类型

如何触发 什么事件 鼠标点击还是经过

（3） 事件处理程序 函数赋值的形式 完成


## 事件执行步骤

1. 获取事件源

2. 注册 绑定事件

3. 添加事件处理程序 ，函数赋值

![20210915205053](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210915205053.png)


# 操作元素

dom 改变网页的内容 结构和样式 
改变元素的属性和内容


## 4.1 改变元素内容
![20210915205453](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210915205453.png)

保存 空格和换行
innertext

![20210915205915](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210915205915.png)

```javascript
<body>
    <button>获取系统时间</button>
    <div>时间</div>
    <script>
        let btn = document.querySelector('button');
        let div = document.querySelector('div');
        btn.onclick = function () {
            div.innerText = '2019-6-6';
        }
    </script>
<body>
```


- 练习 更改时间

 ![](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/>.png)

 ```javascript
<body>
    <button>获取系统时间</button>
    <div>时间</div>
    <script>
        let btn = document.querySelector('button');
        let div = document.querySelector('div');
        function getTime() {
            let time = new Date();
            h = time.getHours();
            h < 10 ? '0' + h : h;
            m = time.getMinutes();
            m < 10 ? '0' + m : m;
            s = time.getSeconds();
            s < 10 ? '0' + s : s;
            return h + ':' + m + ':' + s;
        }
        btn.onclick = function () {
            div.innerText = getTime();
        }
    
    </script>
</body>
 ```


 ## innerText 和 innerHTML

 innertext 不识别 html标签
 后者识别 html标签

 `innerHTML`用途较广

 获取元素中的内容
![20210915211339](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210915211339.png)


前者会去除空格和标签
后者 保持空格和换行
## 操作元素 属性

![20210915213242](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210915213242.png)
![20210915213303](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210915213303.png)

```javascript
<body>
    <button id='dj'>迪迦奥特曼</button>
    <button id= 'gs'>小怪兽</button>
    <img src="fig/迪迦.jpg" alt="" title="迪迦奥特曼">
    <script>
        let btn_dj = document.getElementById('dj');
        let btn_gs = document.getElementById('gs');
        let img = document.querySelector('img');
        btn_dj.onclick = function () {
            img.src = 'fig/迪迦.jpg';
            img.title = '迪迦奥特曼';

        }
        btn_gs.onclick = function() {
            img.src = 'fig/怪兽.jpg';
            img.title = '怪兽';
        }

    </script>
</body>
```

练习： 分时问候

![20210922200733](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210922200733.png)

```javascript

    <img src="fig/上午好.jpg" alt="">
    <div>
        早上好，记得写代码
    </div>
    <script>
        let img = document.querySelector("img");
        let div = document.querySelector('div');
        let date = new Date();
        let hour = date.getHours();
        if (hour < 12) {
            div.innerHTML = "上午好， 好好写代码";
            img.src = 'fig/上午好.jpg';
        } else {
            div.innerHTML = '下午好， 好好写代码';
            img.src = 'fig/下午好.jpg';
        }
    </script>
```

## 4.3 表单元素的属性

innerHTml 普通盒子

表单里面的值 通过 修改value值修改

- 练习： 点击按钮，显示内容改变
  ![20210922201438](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210922201438.png)
  ```javascript
    <button>按钮</button>
    <input type="text" value="输入内容">;
    <script>
        let btn = document.querySelector('button');
        let input = document.querySelector('input');
        btn.onclick = function() {
            input.value = '点击过了';

        }
    </script>
  ```

点击过被禁用 disableed

btn.disabled = true;

this 指向 事件函数的调用者; 在这里为btn
![20210922201700](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210922201700.png)


## 仿京东密码案例

![20210922201811](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210922201811.png)

flag 标识当前状态

![20210922204706](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210922204706.png)


## 样式属性

行内样式操作
修改较少
行内样式修改

```JavaScript
div.onclick = function (){
  this.style.backgroundColor = '';
  this.style.fontSize = '';
}
```
行内样式，修改完的权重较高；
- 练习： 关闭二维码的练习

显示和隐藏元素


display:none;
display:block;
![20210922205206](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210922205206.png)
- 练习： 显示和隐藏二维码

![20210923211527](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210923211527.png)

### 循环精灵图
获取所有小li
querySeclctorAll

![20210922205906](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210922205906.png)


### 显示隐藏文本框的内容

onfocus 获得焦点

失去焦点： onblur

![20210922210328](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210922210328.png)

- 练习：显示隐藏文本框内容
  如果获得焦点，判断表单里面的内容是否为默认文字，如果为默认文字，清空表单内容
  获得 input。value=== 手机
  获得焦点 需要把文本框中的文字颜色加深
  失去焦点，文本框中的文字颜色复原
  
![20210923214246](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210923214246.png)

## className获得 修改样式属性

![20210922210843](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210922210843.png)

当样式比较多的时候 
行内样式 修改就比较麻烦

.change {
  // 样式
}

点击之后 元素的样式变成 实现设定好的样式

this.classname = 'change'
当前类 的类名 变成change

可以修改 className更改元素的样式

会覆盖到 原来的类名


如果想要保存原来的类名
![20210922211259](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210922211259.png)

多类名选择器


## 作业
![20210922211625](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210922211625.png)

### 1.淘宝精灵图练习

![20210923160848](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210923160848.png)

代码：
```javascript
    <style>
        li, ul {
            list-style: none;
        }
        .conve-list {
            width: 294px;
            height: 154px;
            /* background-color: tomato; */
            margin: 100px auto;
        }
        .conve-list li {
            float: left;
            width: 71px;
            height: 75px;
            border: 1px solid #f4f4f4;
        }
        .conve-list li span {
            display: block;
            width: 24px;
            height: 24px;
            background-color: skyblue;
            margin-top: 10px;
            margin-left: 23px;
            background: url(fig/淘宝精灵图.png) 0 0 no-repeat;
        }
    </style>
</head>
<body>
    <ul class = "conve-list">
        <li>
            <span></span>
        </li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
    </ul>
</body>
    <script>
        let spans = document.querySelectorAll('span');
        for (let i = 0; i< spans.length;i++){
            spans[i].style.backgroundPosition = `0 -${44*i}px`;
        }


    </script>

```

### 2.世纪佳缘显示隐藏内容
![20210923214601](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210923214601.png)

文本框 颜色发生变化
点击之后：
![20210924092532](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210924092532.png)
原本的样子：
![20210924092603](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210924092603.png)

