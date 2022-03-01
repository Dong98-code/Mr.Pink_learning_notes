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

