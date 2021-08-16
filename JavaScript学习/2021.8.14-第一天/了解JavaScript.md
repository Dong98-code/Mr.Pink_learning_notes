## 浏览器执行JS

渲染引擎： 解析Html和css 内核 chrome 内核 blink 
JS引擎：JS解释器，读取网页中的JavaScript 代码 ；chrome :V8

![20210814163130](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814163130.png)


## JS组成

ECMAScript

规定了Js的编程语法和基础知识核心
JavaScript 语法

DOM ：页面文档对象模型

document object model 
文档对象模型（DOM，Document Object Model）是一个应用编程接口（API），用于在HTML中使 用扩展的 XML。DOM将整个页面抽象为一组分层节点。HTML或 XML页面的每个组成部分都是一种 节点，包含不同的数据。比如下面的 HTML页面


对页面中的元素操作
![20210814165602](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814165602.png)

BOM： 浏览器模型

提供与浏览器交互的方法个接口

## JS初体验

1. 行内式
2. 内嵌式
3. 外部JS

### 行内JS

![20210814170457](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814170457.png)

![20210814170508](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814170508.png)

### 外部JS
![20210814170640](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814170640.png)
中间不加代码


再JS代码中使用单引号 
HTML中 使用双引号

![20210816194233](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816194233.png)
# JavaScript 注释

单行注释 
`CTRL+/`

多行注释
`shift+ctrl+/`

# JavaScript输入输出语句

prompt();


![20210814171808](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814171808.png)

alert();

![20210814171839](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814171839.png)

console.log();
![20210814171906](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814171906.png)

控制台显示输出

![20210814171921](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814171921.png)

# 关键字

![20210816194530](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816194530.png)
# 变量


## 什么是变量？
存储数据的容器
通过变量名 获取数据 

![20210814193448](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814193448.png)


## 变量的使用

声明变量
赋值

`var age;`
age为变量名 

variable 变量声明 

分配内存空间


声明变量并赋值 

`var myname = 'XD';`

![20210814194213](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814194213.png)

## 更新变量
![20210814194608](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814194608.png)

声明多个变量

```
var name1,
    name2,
    name3;
```

声明不赋值：
未定义 
![20210814194859](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210814194859.png)


## 变量的命名规范

- 字母 数字 $ 组成
-   严格区分大小写
-   不能以数字开头
-   不能为关键字和保留字

关键字

![20210816194530](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816194530.png)

以上 关键字 有特殊的含义 ，不能再以关键字 作为变量名

- 变量名 有意义；英文单词作为变量

- 驼峰命名法 双驼峰 `myName` 第一个字母小写，第二个字母大写之后首字母都大写
- 某些保留字 name等

- `$` 和 `_`  其他符号不被允许


## 交换两个变量的值
![20210816200629](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816200629.png)

## let 和 const 声明

块级声明 
优先使用const声明和 let声明 
变量拥有明确的作用域 声明位置和不变的值，只在需要更改 变量的时候 使用let声明



# 数据类型
## 变量的数据类型

动态语言 
在程序运行过程中  才确定数据的类型 
而不用像C 语言 `int num = 10`
`var num = 10;`

变量的数据类型可变 


```
var x = 'pink';
x = 10;
```
上述的变化可以

## 简单数据类型（基本数据类型）

![20210816201820](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816201820.png)


### 数字型 Number

#### 八进制
八进制：数字前面加0表示 8进制

console.log()
输出默认转成10进制

`010`  十进制为 8
#### 十六进制
十六进制：
数字前 0x

#### 最大值
数字型的最大值
`Number.MAX_VALUE`


非数字：
NaN


### 字符串类型

` '' `
单引号引用


引号嵌套： 外单内双；外双内单 

![20210816203315](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816203315.png)

转义符：
写到引号里面

- \\ 单个 斜杠

![20210816204040](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816204040.png)

换行


#### 字符串的长度 

`length `属性

拼接：`+`

使用 加号 

字符串 +数字型  结果为 字符串型

![20210816204532](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816204532.png)


数值相加，字符相连 


字符串+变量+字符串


练习：
显示年龄：
![20210816205314](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816205314.png)

![20210816205333](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816205333.png)

![20210816205353](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816205353.png)


### 布尔型

true 加法运算 当1来看 
false  运算时 当作 0 

### undefined

和数字相加 ：NaN

和字符串相加：'undefined'+字符串1

![20210816205755](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816205755.png)


prompt 取过来为字符型


## 数据类型转换

### 转换成字符串

toString()

String()
强制转换 

加号拼接字符串

![20210816210856](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816210856.png)



### 转换成数字型

![20210816210940](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816210940.png)


`parseInt()`

'3.94' 转换取整，但不是4舍五入
`parseFloat()`

得到浮点数

注意大小写

`Number()` 

使用`- * / ` 转换 默认先转换成数字型


### 转换成布尔值

`Boolean()`
空值，null undefined 结果都为False


![20210816213030](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816213030.png)


![20210816213236](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816213236.png)


课后作业：
![20210816213757](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816213757.png)
![20210816213830](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210816213830.png)