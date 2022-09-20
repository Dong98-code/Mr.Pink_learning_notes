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

jsx练习：

```js

//模拟一些数据
const data = ['Angular','React','Vue']
//1.创建虚拟DOM
const VDOM = (
	<div>
		<h1>前端js框架列表</h1>
		<ul>
			{
				data.map((item,index)=>{
					return <li key={index}>{item}</li>
				})
			}
		</ul>
	</div>
)
```
### 虚拟dom基础
关于虚拟DOM：
1.本质是Object类型的对象（一般对象）
2.虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。
3.虚拟DOM最终会被React转化为真实DOM，呈现在页面上。


### 组件

1. 函数式组件

```js 
function MyComponent(){
	console.log(this); //此处的this是undefined，因为babel编译后开启了严格模式
	return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>
}
```

返回一个组件： H2 标签， 之后渲染组件到页面；

```js
ReactDOM.render(<MyComponent/>,document.getElementById('test'))
```
- 组件名字的书写： 自定义组件都以大写字母开头，小写字母默认为原生标签- `</>` 闭合标签形式 书写；


2. 类式组件

```js
class MyComponent extends React.Component {
	render(){
		//render是放在哪里的？——MyComponent的原型对象上，供实使用。
		//render中的this是谁？——MyComponent的实例对象 <=>MyComponent组件实例对象。
		console.log('render中的this:'this);
		return <h2>我是用类定义的组件(用于【复杂组件】的定义)</h2>
	}
}
```

- 类式组件的构造器 可以不写
- `render()`函数必须写
- `render()`函数必须有返回值；
  
执行了`ReactDOM.render(<MyComponent/>`之后，发生了什么？
1.`React`解析组件标签，找到了`MyComponent`组件。
2.发现组件是使用类定义的，随后`new`出来该类的实例，并通过该实例调用到原型上的`render`方法。`render()`函数在组件实例身上
3.将`render`返回的虚拟`DOM`转为真实`DOM`，随后呈现在页面中。

### 2.2 state

状态驱动 页面；
组件的状态 数据 -》 数据改变-》 页面改变

```js
class Weather extends React.Component{
			
	//构造器调用几次？ ———— 1次
	constructor(props){
		console.log('constructor');
		super(props)
		//初始化状态
		this.state = {isHot:false,wind:'微风'}
		//解决changeWeather中this指向问题
		this.changeWeather = this.changeWeather.bind(this)
	}

	//render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
	render(){
		console.log('render');
		//读取状态
		const {isHot,wind} = this.state
		return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，{wind}</h1>
	}

	//changeWeather调用几次？ ———— 点几次调几次
	changeWeather(){
		//changeWeather放在哪里？ ———— Weather的原型对象上，供实例使用
		//由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
		//类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined
		
		console.log('changeWeather');
		//获取原来的isHot值
		const isHot = this.state.isHot
		//严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。
		this.setState({isHot:!isHot})
		console.log(this);

		//严重注意：状态(state)不可直接更改，下面这行就是直接更改！！！
		//this.state.isHot = !isHot //这是错误的写法
	}
}
```

初始化状态： `this.state = {}`
读取 实例身上的 state

1. 绑定事件

`onClick={回调函数}`  `C`大写吗然后，写回调函数的名字， 不能带 小括号，`函数（）`这样传入的是 该回调函数的返回结果；

2. 类中的this指向；

在`render`中的this指向 组件实例对象；

函数直接写道 组件实例身上：

```js

class Weather extends React.Component{
			
	...
	changeWeather(){
	...
	}
}
```


```js

changeWeather(){
	//changeWeather放在哪里？ ——Weather的原型对象上，供实例使用
	//由于changeWeatheronClick的回调，所以不是通过用的，是直接调用
	//类中的方法默认开启了局部模式，所以changeWeather中的t为undefined
	
	console.log('changeWeather');
	//获取原来的isHot值
	const isHot = this.state.isHot
	//严重注意：状态必须通过setSt进行更新,且更新是一种合并，换。
	this.setState({isHot:!isHot})
	console.log(this)
	//严重注意：状态(state)不可改，下面这行就是直接更改！！！
	//this.state.isHot = !isHot这是错误的写
}
```

默认开启了局部的 严格模式； 调用`changeWeather`的时候， 并不是 实例调用；


```js
//解决changeWeather中this指向问题
this.changeWeather = this.changeWeather.bind(this)
```

= 右侧 的 `this.changeWeather`刚开始并不出现在实例身上， 通过 其原型链在其父类上找到这个方法；之后于使用`bind`方法，返回一个改变了`this`指向的函数；
之后 实例身上有了一个方法，叫做`this.changeWeather`


- 修改state 使用`setState()`
 `this.setState({isHot:！isHot})`


- state简写方式

1. 初始化状态： 赋值语句
```js
state = {...}
...
//自定义方法————要用赋值语句的形式+箭头函数
changeWeather = ()=>{
	const isHot = this.state.isHot
	this.setState({isHot:!isHot})
}

```

### 2.4 props
1. `props`传参

```js
class Person extends React.Component{
	render(){
		console.log(this);
	const {name,age,sex} = this.props
	return (
			<ul>
				<li>姓名：{name}</li>
				<li>性别：{sex}</li>
				<li>年龄：{age+1}</li>
			</ul>
			)
		}
	}
	//渲染组件到页面
	ReactDOM.render(<Person name="jerry" age={19}  sex="男"/>,document.getElementById('test1'))

```

批量传值： 对象传值 ，本质上是 收组件身上的那个 对象得值：
展开运算符得使用： es9支持 对象得展开；


```js
const p = {name:'老刘',age:18,sex:'女'}
ReactDOM.render(<Person {...p}/>,document.getElementById('test3'))

。。。
const obj = {...obj1}// 复制对象

```
- 注意react中得`{}`表示里面得语句为 js语法和 实际得`{}`得含义不一样；

用过 babel 来实现这样的 批量传参；


2. `props`限制

对组件传入的props 的值的类型进行限制；
`PropTypes.string|number|func`进行限制；
```js
//对标签属性进行类型、必要性的限制
Person.propTypes = {
	name:PropTypes.string.isRequired,//限制name必传，且为字符串
	sex:PropTypes.string,//限制sex符串
	age:PropTypes.number,//限制age值
	speak:PropTypes.func,//限制spea函数
}

```

注意：
- `propTypes`: 必须是这个字段； 为一个对象，对象的书写规则为： 
```js
name: PropTypes.string
```

其中。`PropTypes`为React自身的属性 
```html
<!-- 引入prop-types，用于对组件标签属性进行限制 -->
<script type="text/javascript" src="../js/prop-types.js"></script>
```
引入之后，全局增加了一个对象`PropTypes`,之后使用这个接口对 传入的值进行限制；

- 设置默认值

```js
Person.defaultProps = {
	sex:'男',//sex默认值为男
	age:18 //age默认值为18
}
```

- `props`为只读属性

- `props`属性的简写

```js
constructor(props) {
	//构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props

	super(props)
	...
	...

	//对标签属性进行类型、必要性的限制
	static propTypes = {
		...
	}
	//指定默认标签属性值
	static defaultProps = {
		...
	}
}
```
使用`static`关键字给类本身而不是其实例 添加属性和方法；此时 `propTypes`为类本身的有的一个属性

- 函数式组件的 `props`

```js
function Person (props){
	const {name,age,sex} = props
	return (
			<ul>
				<li>姓名：{name}</li>
				<li>性别：{sex}</li>
				<li>年龄：{age}</li>
			</ul>
		)
	}
	Person.propTypes = {
		name:PropTypes.string.isRequired, /限制name必传，且为字符串
		sex:PropTypes.string,//限制sex为符串
		age:PropTypes.number,//限制age为值
	}

	//指定默认标签属性值
	Person.defaultProps = {
		sex:'男',//sex默认值为男
		age:18 //age默认值为18
	}
	//渲染组件到页面
	ReactDOM.render(<Person name="jerry"/>document.getElementById('test1'))
```