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

