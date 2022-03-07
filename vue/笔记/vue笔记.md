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
    
