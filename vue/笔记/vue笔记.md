# vue入门

## 插值语法

- 用于解析标签体内容
- 语法：{{xxx}} xx作为js表达式子解析 

## hello 小程序

1. 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
2. root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
3. root容器里的代码被称为【Vue模板】；
4. Vue实例和容器是一一对应的；
5. 真实开发中只有一个Vue实例，并且会配合着组件一起使用；
6. {{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；
7. 一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；

注意区分：js表达式 和 js代码(语句)
1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：

    (1). a
    (2). a+b
    (3). demo(1)
    (4). x === y ? 'a' : 'b'
2.js代码(语句)

    (1). if(){}
    (2). for(){}

![20220223211716](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220223211716.png)

## 模板语法

![20220223212101](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220223212101.png)

模板， 里面的语句语法

1.  差值语法
2.  指定语法

`v-bind` 绑定

```html
<a v-bind:href="school.url.toUpperCase()" x="hello">点我去{{school.name}}学习1</a>
<!-- ""内为js表达式 -->
<a :href="school.url" x="hello">点我去{{school.name}}学习2</a>
```


`v-bind:` 简写为`:``

插值语法 标签体之间的内容


2.指令语法：
- 功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。
- 举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式，且可以直接读取到data中的所有属性。


## 数据绑定

`v-bind ` 单向数据绑定

`v-model`双向数据绑定

v-model只能应用在表单类元素（输入类元素）上  input等


## el和data的两种写法

```js
const v = new Vue() {
    //
}
v.$mount('#root')
```

$mount 挂载 到对应的位置；

data的两种写法：

1. 对象式

![20220223214446](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220223214446.png)

2. 函数式
```js
data: function() {
    return 对象；
}
```

## MVVM模型

M model; data中的数据；
V:视图， 模板
VM： 视图模型 Vue实例对象

![20220223215002](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220223215002.png)

vue 数据绑定和 dom监听

完成双向绑定；vue实例 为dom和数据的桥梁， 完成左右的交换操作；

data中 所有的属性都会出现在 VM身上； vm身上 所有的属性 及 Vue原型上所有的属性 在Vue中 都可以直接使用


## 数据代理

### `Object.defineProperty`

给对象添加属性；
```js
let obj = {x:10};
let obj_2 = {y:100};
Object.defineProperty(obj2, 'x', {
    get(){
        return obj.x;
    },
    set(value) {
        obj.x = value;
    }
})
```

Vue中的数据代理：

1.Vue中的数据代理：
    通过vm对象来代理data对象中属性的操作（读/写）
2.Vue中数据代理的好处：
    更加方便的操作data中的数据
3.基本原理：
    通过Object.defineProperty()把data对象中所有属性添加到vm上。
    为每一个添加到vm上的属性，都指定一个getter/setter。
    在getter/setter内部去操作（读/写）data中对应的属性。

![20220228230902](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220228230902.png)


Vue充当了读取数据和改写数据的功能；

`vm._data = options.data = data`

![20220228231713](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220228231713.png)

现在可以访问到 name 和 address  但是现在并没有 绑定到 vm身上；

![20220228231835](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220228231835.png)

把 data中的数据， 绑定到 vM身上’


## 事件处理

绑定监听

![20220307102006](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220307102006.png)

### 事件修饰符

prevent 阻止事件的默认行为： event.preventDefault()

stop： 停止事件冒泡， event.Propagation()


Vue中的事件修饰符：
    1.prevent：阻止默认事件（常用）；
    2.stop：阻止事件冒泡（常用）；
    3.once：事件只触发一次（常用）；
    4.capture：使用事件的捕获模式；
    5.self：只有event.target是当前操作的发事件；
    6.passive：事件的默认行为立即执行，无回调执行完毕；


### 键盘事件

![20220307105455](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220307105455.png)

1.Vue中常用的按键别名：  
>
		回车 => enter
		删除 => delete (捕获“删除”和“退格”键)
		退出 => esc
		空格 => space
		换行 => tab (特殊，必须配合keydown去使用)
		上 => up
		下 => down
		左 => left
		右 => right

2.Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）

3.系统修饰键（用法特殊）：ctrl、alt、shift、meta
>
    	(1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
    	(2).配合keydown使用：正常触发事件。

4.也可以使用keyCode去指定具体的按键（不推荐）

5.Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名


## 计算属性

![20220307145131](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220307145131.png)

![20220307145141](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220307145141.png)

```js
get() {
    // this此时为VM
    return this.firstName + '-' + this.lastName;
}
```

get():在 初次读取 fullName时 调用； 
2. 在所依赖的数据 发生变化时 再次调用 该函数；


计算属性：  
    1.定义：要用的属性不存在，要通过已有属性计算得来。
	2.原理：底层借助了Objcet.defineproperty方法提供的getter和setter。
	3.get函数什么时候执行？
				(1).初次读取时会执行一次。
				(2).当依赖的数据发生改变时会被再次调用。
	4.优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
	5.备注：
			- 计算属性最终会出现在vm上，直接读取使用即可。
			- 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。


## 监视属性

```html
<!-- 
监视属性watch：
1.当被监视的属性变化时, 回调函数自动调用, 进行相关操作
2.监视的属性必须存在，才能进行监视！！
3.监视的两种写法：
(1).new Vue时传入watch配置
(2).通过vm.$watch监视
-->
```

### 深度监视

![20220307153113](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220307153113.png)

监视 多级结构 中的某一个属性：

`deep:true` 





(1).Vue中的watch默认不监测对象内部值的改（一层）。
(2).配置deep:true可以监测对象内部值改变（层）。
			
(1).Vue自身可以监测对象内部值的改变，但Vue供的watch默认不可以！
(2).使用watch时根据数据的具体结构，决定是采用深度监视。


### 监视 简写形式

```js
//简写
vm.$watch('isHot',(newValue,oldValue)=>{
	console.log('isHot被修改了',newValue,oldValue,this)
})
```

不需要 immediate 和 deep 参数设置， 只需要handler 就可以简写；



> 
    computed和watch之间的区别：
                1.computed能完成的功能，watch都可以完成。
                2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。
    两个重要的小原则：
                1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
                2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象。


## 绑定样式

![20220307163943](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220307163943.png)

样式对象中的Key必须符合 规则：

小驼峰：fontSize 

## 条件渲染

v-if / v-else

v-show：改变 display 变为None

v-if：会增删节点 


## 列表渲染

v-for

遍历列表时 key的作用： index作为key


1. ![20220307200838](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220307200838.png)

2. 虚拟dom 转为 真实dom

用户在真实dom中输入；

3. 新的数据 生成新的虚拟dom

![20220307201000](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220307201000.png)


对比虚拟 dom: 

虚拟dom没有 value属性

对 数据进行 打乱数据顺序的操作， 会引起数据的乱行；

使用 p.id 唯一标识；
![20220307201954](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220307201954.png)


面试题：react、vue中的key有什么作用？（key的内部原理）				
	1. 虚拟DOM中key的作用：
    key是虚拟DOM对象的标识，当数据发生变化时，【新数据】生成【新的虚拟DOM】, 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的较规则如下：
    					
    2.对比规则：
    (1).旧虚拟DOM中找到了与新虚拟DOM相同的key：
    ①.若虚拟DOM中内容没变, 直接使用之前的真实DOM！
    ②.若虚拟DOM中内容变了, 则生成新的真实替换掉页面中之前的真
    (2).旧虚拟DOM中未找到与新虚拟DOM相同的key创建新的真实DOM，随后渲染到到页面。
				
    1. 用index作为key可能会引发的问题：
         若对数据进行：逆序添加、逆序删除等破坏顺序操作:会产生没有必要的真实DOM更界面效果没问题,
        如果结构中还包含输入类的DOM：会产生错误DOM更新 ==
    2. 开发中如何选择key?:
        1.最好使用每条数据的唯一标识作为key, 比号、身份证号、学号等唯一值。
    	2.如果不存在对数据的逆序添加、逆序删除作，仅用于渲染列表用于展示，使用index作为key是没有问题的。
    
## Vue检测数据的原理——对象

![20220312212316](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220312212316.png)

![20220312212339](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220312212339.png)

![20220312212539](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220312212539.png)

加工数据： get 和set的 步骤；对对象属性的监视；

改变 name的值， 调用 set name


observer: 监视data中的属性的变化；

```js
function Observer(obj){
	//汇总对象中所有的属性形成一个数组
	const keys = Object.keys(obj)
	//遍历
	keys.forEach((k)=>{
		Object.defineProperty(this,k,{ // this为实例对象
			get(){
				return obj[k]
			},
			set(val){
				console.log(`${k}被改了，我要去解板，生成虚拟DOM.....我要开始忙了`)
				obj[k] = val
			}
		})
	})
	

```

递归判断： 
对象中的元素也为对象；

## Vue.set()

后添加的数据也能有 响应式 特点
：

![20220312215423](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220312215423.png)

![20220312220954](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220312220954.png)


### 总结

检测数据原理：

Vue监视数据的原理：
1. vue会监视data中所有层次的数据。
2. 如何监测对象中的数据？
   	通过setter实现监视，且要在new Vue时就传入要监测的数据。
           (1).对象中后追加的属性，Vue默认不做响应式处理	
           (2).如需给后添加的属性做响应式，请使用如下API：	`Vue.set(target，propertyName/index，value)` 或 `vm.$set(target，propertyName/index，value)`

3. 如何监测数组中的数据？
    通过包裹数组更新元素的方法实现，本质就是做了两件事：
    	(1).调用原生对应的方法对数组进行更新。
    	(2).重新解析模板，进而更新页面。

4. 在Vue修改数组中的某个元素一定要用如下方法：
    1. 使用这些API:`push()、pop()、shift()、unshift()、splice()、sort()、reverse()`
    2. `Vue.set() `或 `vm.$set()`
    特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！


数据劫持：
如果有人修改 数据， setter 立刻劫持：
1. 该数据 2. 解析模板

## 收集表单数据

v-model:

收集表单数据：
    若：`<input type="text"/>`，则v-model收集的是value值，用户输入的就是value值。
    若：`<input type="radio"/>`，则v-model收集的是value值，且要给标签配置value值。
    若：`<input type="checkbox"/>`
            1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
            2.配置input的value属性:
                    (1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
                    (2)v-model的初始值是数组，那么收集的的就是value组成的数
                    
备注：v-model的三个修饰符：
          lazy：失去焦点再收集数据
          number：输入字符串转为有效的数字
          trim：输入首尾空格过滤


## 过滤器

过滤器：
- 定义：对要显示的数据进行特定格式化后示（适用于一些简单逻辑的处理）。
- 语法：
    - 1.注册过滤器：Vue.filter(namcallback) 或 new Vue{filters:}
	- 2.使用过滤器：{{ xxx | 过滤器}  或  v-bind:属性 = "xxx |滤器名"
	- 备注：
		- 1.过滤器也可以接收额外参数、过滤器也可以串联
		- 2.并没有改变原本的数据, 是产的对应的数据


![20220314164227](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220314164227.png)

```js
Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
```

## 内置zhiling

### v-text

![20220314164623](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220314164623.png)


### v-html

![20220314164844](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220314164844.png)

v-html指令：
- 1.作用：向指定节点中渲染包含html结构的内容。
- 2.与插值语法的区别：
	- (1).v-html会替换掉节点中所有的内容，{{xx}}则不会。
    - (2).v-html可以识别html结构。
- 3.严重注意：v-html有安全性问题！！！！
	- (1).在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
	- (2).一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！


### v-cloak

![20220314170638](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220314170638.png)



v-cloak指令（没有值）：
- 1. 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
- 2. 使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。

## 自定义指令

原生dom操作 封装

1. 定义一个v-big指令，功能类似于 v-text 将绑定的数值放大10倍

![20220314204142](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220314204142.png)


// 1. 指令与元素绑定时会被调用；
// 2. 指令所在的模板 被重新解析时

2. 需求2 ： v-fbind： 与v-bind功能类似； 可以使得input元素默认获得焦点；

![20220323164559](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220323164559.png)

## 生命周期

1.  初始化

![20220324155955](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220324155955.png)

还没有 开始数据代理

2. creared 

数据代理和初始化

![20220324160611](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220324160611.png)

3. 产生虚拟dom

![20220324160748](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220324160748.png)

4. beforeMount

![20220324161006](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220324161006.png)

看到是 未经vm解析的dom元素

5. ![20220324161055](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220324161055.png)

6. mounted

![20220324161357](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220324161357.png)

此时 dom已经经过编译；

尽可能减少对dom的操作；

7. beforeDestroy 

关闭定时器 取消订阅消息


# Vue组件化编程


## 组件定义

组件定义是 不需要写el对象；

Vue中使用组件的三大步骤：
	一、定义组件(创建组件)
	二、注册组件
	三、使用组件(写组件标签)

一、如何定义一个组件？
使用Vue.extend(options)创建，其中options和new Vue(options)时传入那个options几乎一样，但也有点区别；
区别如下：
 1. el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的 由vm中的el决定服务哪个容器。
 2. data必须写成函数，为什么？ ———— 避免组件被复用时，数 引用关系。
	备注：使用template可以配置组件结构。

二、如何注册组件？
	1.局部注册：靠new Vue的时候传入components选项
	2.全局注册：靠Vue.component('组件名',组件)
三、编写组件标签：
	`<school></school`

## 组件使用

![20220329194029](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220329194029.png)

```html
<body>
<!-- 
几个注意点：
1.关于组件名:
	一个单词组成：
				第一种写法(首字母小写)：school
				第二种写法(首字母大写)：School
	多个单词组成：
				第一种写法(kebab-case命名)：my-school
				第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)
	备注：
			(1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
			(2).可以使用name配置项指定组件在开发者工具中呈现的
2.关于组件标签:
	第一种写法：<school></school>
	第二种写法：<school/>
	备注：不用使用脚手架时，<school/>会导致后续组件不能
3.一个简写方式：
				const school = Vue.extend(options) 可简写为：const school = options
-->
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>{{msg}}</h1>
			<school></school>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false
		
		//定义组件
		const s = Vue.extend({
			name:'atguigu',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			}
		})

		new Vue({
			el:'#root',
			data:{
				msg:'欢迎学习Vue!'
			},
			components:{
				school:s
			}
		})
	</script>
```

## Vue和 VueComponent 的关系

![20220522161131](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220522161131.png)

1. 引入 vue.js

Vue构造函数

![20220522161246](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220522161246.png)

2. Vue的原型对象

![20220522161400](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220522161400.png)

3. 创建 Vue实例对象
vm
![20220522161518](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220522161518.png)

实例对象 隐式原型对象 指向自己缔造者的原型对象


![20220522161552](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220522161552.png)


![20220522192831](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220522192831.png)

![20220522193038](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220522193038.png)

![20220522193245](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220522193245.png)

让 vc 可以访问到 Vue原型上的属性和方法


## 单组件文件
![20220522194517](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220522194517.png)
1. 结构 
   ```Vue
   <template>
	<div class="demo">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">点我提示学校名</button>	
	</div>
	</template>
	```
2. 样式 


# Vue CLI脚手架

## render 配置项

![20220523213352](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220523213352.png)

## 修改默认配置

脚手架创建的文件夹的名称 建议不要更改

![20220523213850](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220523213850.png)

配置参考项可以更改

## ref

### mian.js

## props

![20220529172630](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220529172630.png)

接收的同 对数据类型进行限制；

![20220529172721](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220529172721.png)


## 插件

增加操作

本质为对象， 里面必须包含着 install 方法；


![20220530143154](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220530143154.png)

![20220530143254](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220530143254.png)


引用 造好的轮子


## scoped

![20220530145222](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220530145222.png)

## Todo list

组件化编码流程

![20220530145434](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220530145434.png)

### 静态组件

![20220530150330](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220530150330.png)


### 数据

数据类型 和 名称

props子传父

父亲先给儿子传一个函数， 函数定义在父亲身上， 然后儿子调用这个函数

### 删除

找到按钮 绑定事件

### 底部计数

![20220530202159](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220530202159.png)

找到todos

![20220530215622](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220530215622.png)

### 底部交互

### 总结

1. 组件化编码流程

![20220530222012](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220530222012.png)

2. props 适用于：

（1）父组件 ===》 子组件 通信

（2） 子组件 ===》 父组件：献给父组件声明一个函数， 然后


![20220530222132](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220530222132.png)


## 浏览器本地存储

js中存储

sessionStorage

localStorage：

window.localStorage:

`setItem(key, value)`:字符串

![20220531134832](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531134832.png)

存储对象的时候， 默认调用toString()

JSON.stringify: 将对象转换为字符串；

读；
`getItem()`

![20220531135051](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531135051.png)

JSON.parse 解析为对象；

如果为空， 返回null;

JSON.parse(null)
删除：

`removeItem`


清空：

`clear`:localStorage.clear();

关闭浏览器， locaStorage仍然存在；


### sessionStorage

会话；

浏览器关闭， 存储消失；

用户清空缓存 ， sessionStorage消失；

![20220531135653](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531135653.png)


![20220531135712](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531135712.png)

![20220531151945](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531151945.png)


### 自定义事件绑定

![20220531155112](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531155112.png)

触发


第二种绑定：
![20220531155558](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531155558.png)


### 解绑

![20220531160219](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531160219.png)

解绑多个， 传入参数为数组， 里面为事件的名称

![20220531160837](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531160837.png)


### 总结

![20220531162314](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531162314.png)

## 全局事件总线

任意组件间的通信

![20220531164149](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531164149.png)

![20220531191001](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531191001.png)

组件间通信的流程：
![20220531191646](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531191646.png)

![20220531191704](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531191704.png)

组件销毁之前， 解绑身上的事件


父子通信： props

子->父亲传： 函数+props

爷孙组件传递 比较适合 数组总线之间传递数据；

## 消息订阅与发布

![20220531192631](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531192631.png)


pubsub-js:

![20220531193327](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531193327.png)

![20220531193337](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531193337.png)
回调函数：
`function(消息名， 数据)`

解绑：

![20220531193547](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531193547.png)

根据id 取消订阅
`pubsub.unsubscribe(pubid)`

箭头函数， this的指向

![20220531193819](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531193819.png)


### nextTick

![20220531205728](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220531205728.png)


## 动画
enter, leave
active

![20220601152832](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601152832.png)


### 多个元素过度

![20220601152942](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601152942.png)

transition-group: 配置key值

![20220601153112](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601153112.png)

![20220601153127](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601153127.png)


### animate.css

库
第三方库

### 总结

添加固定样式的类名，类名提前写好， 可以第三方引入， 也可以 自己书写完成
![20220601153605](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601153605.png)

![20220601153649](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601153649.png)


![20220601153710](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220601153710.png)

## vue ajax

![20220602204131](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602204131.png)

跨域时：

服务器收到 了并相应了请求， 但是 客户端得不到 响应的内容

配置代理服务器：

![20220602211855](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602211855.png)

端口号 和 自身一致 ， 如都是 8080端口；

服务器和服务器之间传输 数据 不存在 跨域问题

使用http 协议请求；

1. nginx: 代理服务器；

2. vue 代理服务器

![20220602212314](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602212314.png)

![20220602212413](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602212413.png)

![20220602212852](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602212852.png)

设置代理服务器：

在vue.config.js中配置：

```js
module.exports = {
  pages: {
    index: {
      entry:'src/main.js'
    }
  },
  lintOnSave: false,
  devServer: {
    proxy: 'http://localhost:5000'
  }
  
}
```

端口号为服务其的端口号， 例如为5000， 自身的端口号为8080， 配置完之后 会自动生成一个代理服务器， 然后代理服务器8080 端口和目标服务器 5000之间通信；


修改请求的端口号：
![20220602213053](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602213053.png)

更细致的配置对象：

走代理 ＋前缀； 
```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',// 请求前缀
        ws: true,
        changeOrigin: true  // 用于配置 请求头中的host值
      },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    }
  }
}
```

- 请求前缀： url 

走代理 前缀+ api

![20220602213844](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602213844.png)

前缀： 代理服务器根据url的
![20220602214022](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602214022.png)

![20220602214138](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220602214138.png)

此时 需要重写 代理中的target地址；

记得配置 重写地址
`pathRewrite:{'^/api':''},`

## GitHub案例

![20220603164843](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220603164843.png)

向该接口请求数据

我看到了我自己
![20220603173200](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220603173200.png)

要点：

使用 数据总线 `$bus` 绑定事件和 触发事件

![20220603173305](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220603173305.png)

然后 点击搜索之后， 使用emit触发事件， 然后返回数据

![20220603173345](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220603173345.png)
之后根据其地址 头像等 填充准备好的 html格式


![20220603181611](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220603181611.png)

失败了


## slot插槽

传入动态结构 ， slot插槽占位
![20220604170042](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604170042.png) 

结构先解析 再 传入到对应的徐建中
结果：

![20220604171222](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604171222.png)

### 具名插槽：

使用 slot属性名 放入到 对应的插槽中； name属性为对应的插槽取名

使用 template 包裹 插槽名一样的标签， 减少命名次数， 同时不产生新的dom结构

![20220604172220](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604172220.png)

### 作用域插槽


![20220604173214](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604173214.png)

把数据传给插槽的使用者

使用者使用 `template`标签及 scope属性
![20220604173322](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604173322.png)

把数据传给了 一个作用域中， 此时作用域scope就可以看到传进来的数据；
![20220604173424](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604173424.png)

slot-scope,支持解构 赋值
组件通信的一种方式

![20220604173731](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604173731.png)

![20220604173745](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604173745.png)

![20220604173812](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604173812.png)

![20220604173820](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604173820.png)


## vuex


![20220604205724](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604205724.png)

任意组件间通信


全局事件总线：
兄弟组件间的 数据通信
![20220604205956](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604205956.png)

vuex 不属于任意一个组件：

![20220604210152](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604210152.png)

![20220604210348](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604210348.png)

![20220604210410](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604210410.png)

共享状态

### 求和案例

![20220604212303](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604212303.png)

![20220604212313](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604212313.png)
### 原理图

![20220604212254](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604212254.png)

VC 调用 api: dispatch, 

`dispatch(动作类型： str, data:2,)`

-> actions: Obj， 对象类型；


![20220604212737](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604212737.png)

调用函数， 数据为dispatch传入的数据data'

-> 函数 "jia"调用commit：func

![20220604212856](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604212856.png)

函数 类型：

commit -> mutations中寻找对应的函数并调用：

![20220604213027](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604213027.png)

![20220604213111](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604213111.png)

之后 vue

render重新解析；

- actions用来处理异步请求；

- 允许组件内部调用 commit

- store 对象

![20220604214235](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604214235.png)

使用：

![20220604214443](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604214443.png)

![20220604221448](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220604221448.png)

### 求和——vuex

### getters 

用于将state中的数据进行加工
```js
const getters = {
    bigData:function (state) {
        return state.sum * 10;
    }
}
///...
/// 配置getters
const store = new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters:getters
})
// 使用 该值
// 再 $store.getters.bigData

<h3>当前求和放大10倍：{{$store.getters.bigData}}</h3>
```

类似于`computed`根据数据 计算得到新的值

### mapState 复用代码

计算属性的名称和数据名称；

`{key: value}`形式；

![20220605151713](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220605151713.png)

利用mapState生成计算属性， 从state中读取数据

```js
//在 index.js state中配置数据
const state = {
    // 存储数据
    sum: 0,
    schoolName:"shangguigu",
    className:"Vue",
}
// 使用mapState生成计算属性的代码， ...运算符

computed: {
        ...mapState({xuexiao:"schoolName", xueke:"className"}),
    },

// 当属性名称和变量名称一致时

computed: {
        ...mapState(['schoolName', 'className']),
    },
```
从getters中读取数据
```js
 ...mapGetters({})
computed: {
    //借助mapGetters生成计算属性：bigSum（对象写法一）
    ...mapGetters({bigSum:'bigSum'}),

    //借助mapGetters生成计算属性：bigSum（数组写法二）
    ...mapGetters(['bigSum'])
},
```
3. mapActions: 

用于帮助生成actions 对话的方法， 包含`$store.dispatch()`函数，
注意传参： 

```js
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions(['jiaOdd','jiaWait'])
}
```


1. mapMutations

帮助生成与 mutations对话的方法， 即包含`$store.commit(xxx)`函数

```js
methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    
    //靠mapMutations生成：JIA、JIAN（对象形式）
    ...mapMutations(['JIA','JIAN']),
}
```

![20220605160258](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220605160258.png)



### 多组件共享数据

![20220605160359](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220605160359.png)

数据 组件共享；

![20220605164055](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220605164055.png)

创建store:
```js
// 创建store , 管理 action mutations和。。
//引入Vuex
// import babelConfig from "babel.config";
import Vue from "vue"
import Vuex from "vuex"
// 引入Vuex


Vue.use(Vuex)

const actions = {
    // 响应组件动作
    //func， 传入的为
    a_add: function (context, value) {
        // 上下文， 调用commit
        context.commit('m_add', value);
        // mutaions中的add
    },
    a_dec(context, value) {
        context.commit('m_dec', value);
    },
    a_addOdd(context, value) {
        if (context.state.sum % 2 == 1) {
            //sumde 值判断
            context.commit('m_addOdd', value);

        }
    },
    a_addWait(context, value) {
        setTimeout(() => {
            context.commit('m_add', value)
        },500)
    }
    
}

const mutations = {
    // 操作数据吗state
    m_add: function (state, value) {
        state.sum += value;
    },
    m_dec(state, value) {
        state.sum -= value;
    },
    m_addOdd(state, value) {
        state.sum += value;
    },
    m_addPerson(state, value) {
        state.personsList.unshift(value);
    }
}

const state = {
    // 存储数据
    sum: 0,
    schoolName:"shangguigu",
    className: "Vue",
    personsList: [{id:1, name:"张三"}],
}

const getters = {
    bigData:function (state) {
        return state.sum * 10;
    }
}
// new Store, 创建store
//传入配置对象
const store = new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters:getters
})
// 导出/暴露 store 
export default store
```

store中的 state可以在不同的组件中看到， 

所以在 上方的组件中， 可与拿到 下面的数据的 `personsList`

```vue
// myCount
<template>
<div>
    <h1>当前的和为：{{$store.state.sum}}</h1>
    <h3>当前求和放大10倍：{{$store.getters.bigData}}</h3>
    <h3>我在{{xuexiao}}, 学习{{xueke}}</h3>
    <h3>人员列表的总人数为{{personsList.length}}</h3>

    <select name="" id="" v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>

    </select>
    <button @click="add">+</button>
    <button @click="dec">-</button>
    <button @click="addOdd">奇数相加</button>
    <button @click="addWait">等会再加</button>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name:"MyCount",
    data() {
        return {
            n:1, // 当前选择
            // sum:0 // cur_sum, 再state中 修改
            
        }
    },
    computed: {
        ...mapState({xuexiao:"schoolName", xueke:"className"}),
        ...mapGetters({}),
		// 利用计算属性， 监视得到下方组件的数据
        personsList() {
            return this.$store.state.personsList;
        }
    },
    methods: {
        add() {
            // dispatch
            this.$store.dispatch('a_add', this.n);
        },
        dec () {
            // this.sum -= this.n;
            this.$store.dispatch('a_dec', this.n);

        },
        addOdd() {
            // if (this.sum % 2 === 1) {
            //     this.sum += this.n;
            // }
            this.$store.dispatch('a_addOdd', this.n);

        },
        addWait() {
            // setTimeout(()=>{
            //     this.sum += this.n;
            // },500)
            this.$store.dispatch('a_addWait', this.n)
        }
    },
}
</script>

<style lang="css">
    button {
        margin-left: 15px;
    }
</style>

```

### 模块化 + 命名空间

namespace

![20220605164717](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220605164717.png)


1. 数据分类更加明确

2. 修改 store中的index.js
   对于不同的功能模块， 分别配置 `actions` `mutations` `state` `getters`

   ![20220605165213](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220605165213.png)
`
   ```js
	const countAbout = {
	  namespaced: true,	// 开启命名空间
	  state: {x:1},
	  mutations: { ... },
	  actions: { ... },
	  getters: {
	    bigSum(state){ return state.sum * 10 }
	  }
	}

	const personAbout = {
	  namespaced: true,	// 开启命名空间
	  state: { ... },
	  mutations: { ... },
	  actions: { ... }
	}

	const store = new Vuex.Store({
	  modules: {
	    // countAbout,
		countAbout: countAbout,
	    personAbout
	  }
	})
   ```
3. `modules`

![20220605165348](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220605165348.png)
![20220605165418](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220605165418.png)
分别存储 不同功能模块的 配置，

4. 开启命名空间

`namespace:true`

![20220605170352](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220605170352.png)
```js
// 方式一：自己直接读取
this.$store.state.personAbout.list
// 方式二：借助mapState读取：分类名
...mapState('countAbout',['sum','school','subject']),
```

读取 `getters`数据

```js
//方式一：自己直接读取
this.$store.getters['personAbout/firstPersonName']
//方式二：借助mapGetters读取：
...mapGetters('countAbout',['bigSum'])
```

调用 `dispatch`:

```js
//方式一：自己直接dispatch
this.$store.dispatch('personAbout/addPersonWang',person)
//方式二：借助mapActions：
...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
```

调用 `commit`:

```js
//方式一：自己直接commit
this.$store.commit('personAbout/ADD_PERSON',person)
//方式二：借助mapMutations：
...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
```

在store文件中， 分别书写对应的配置：

![20220605170848](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220605170848.png)

然后再index.js中去引用


## 路由