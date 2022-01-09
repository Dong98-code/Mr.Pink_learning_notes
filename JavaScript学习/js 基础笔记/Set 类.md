# set
资料来源：[mdn:set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)

`Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

## 简述
集合，按照差额u顺序迭代元素；

![20211027164255](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211027164255.png)

0 -0 Nan 和defined 的说明

绝大多数浏览器 -0 和 0 都被视为相等的值
## 创建

`Set()`
首字母大写； 括号；



## 静态属性

`set1.size`

## 实例方法

### add:

语法： `mySet.add(value);`

返回 set本身

可以链式调用 
`add().add()`

### clear

清除set

###  delete
`mySet.delete(value);`
删除成功，返回true;
否则 返回false

### entries
entries() 方法返回一个新的迭代器对象 ，这个对象的元素是类似 [value, value] 形式的数组，value 是集合对象中的每个元素，迭代器对象元素的顺序即集合对象中元素插入的顺序。由于集合对象不像 Map 对象那样拥有 key，然而，为了与 Map 对象的 API 形式保持一致，故使得每一个 entry 的 key 和 value 都拥有相同的值，因而最终返回一个 [value, value] 形式的数组。
```js
var mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

var setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]


```

### has

判定 是否存在某一个值

### values

```js
var mySet = new Set();
mySet.add('foo');
mySet.add('bar');
mySet.add('baz');

var setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"

```