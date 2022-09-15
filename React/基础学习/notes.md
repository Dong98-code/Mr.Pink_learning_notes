# react学习

## 基础

### hello world

```html
<!-- 引入react核心库 -->
<script type="text/javascript" src="./jsreact.development.js"></script>
<!-- 引入react-dom，用于支持react操作DOM -->
<script type="text/javascript" src="./jsreact-dom.development.js"></script>
<!-- 引入babel，用于将jsx转为js -->
<script type="text/javascript" src="./jsbabel.min.js"></script>
```
- 核心库必须最先引入
创建虚拟dom ,然后渲染:
` ReactDOM.render(VDOM,document.getElementById('...')`

### 创建虚拟dom

jsx：

```js
const VDOM = (  /* 此处一定不要写引号，因为不是字符串 */
	<h1 id="title">
		<span>Hello,React</span>
	</h1>
)
```

js结合react创建虚拟dom

```js
//1.创建虚拟DOM
const VDOM = React.createElement('h1{id:'title'},React.createEleme('span',{},'Hello,React'))
//2.渲染虚拟DOM到页面
ReactDOM.render(VDOM,documengetElementById('test'))
```

- jsx嵌入表达式

在 JSX 语法中，你可以在大括号`{}`内放置任何有效的 JavaScript 表达式。例如，`2 + 2`，`user.firstName` 或 `formatName(user)` 都是有效的 JavaScript 表达式。
> 使用括号 包裹内容`（）`

在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。
- jsx 防止注入攻击
  ![20220915155236](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220915155236.png)

jsx语法总结：

- 1.定义虚拟DOM引号。
- 2.标签中混入用{}。
- 3.样式的类名指定不要用`className`。
- 4.内联样式，要用stley={{key:value}}的形式去写。
  `style={{color:'white',fontSize:'29px'}}`
  小驼峰；命名
- 5.只有一个根标签
- 6.标签必须闭合
- 7.标签首字母
	- (1).若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
	- (2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。

babel 将jsx转译成 一个名为 `React.creatElement()`函数调用
### 虚拟dom
关于虚拟DOM：
1.本质是Object类型的对象（一般对象）
2.虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。
3.虚拟DOM最终会被React转化为真实DOM，呈现在页面上。

