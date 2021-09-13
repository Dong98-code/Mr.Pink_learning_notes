
# 补充 symbol类型
# 正则化表达式

# Map 学习
Map 对象保存键值对，和python中的 字典类似； 并且能够记住键的原始插入顺序。任何对象和 原始值都可以作为键或者值

## 遍历：
一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 一个  for...of 循环在每次迭代后会返回一个形式为[key，value]的数组。

## 键的相等
![20210913141512](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210913141512.png)
## `Objects`和`map`的区别

二者相似的是，都可以允许按照键 存取一个值，删除键， 检测一个键是否绑定了值。可以将Object 当作 map来使用，但是 有以下区别
|map|object|
![20210913141805](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210913141805.png)
## 初始化

`Map()` 创建 Map对象

## 属性

计算map中的条目的数目：
`Map.prototype.size`


## 示例

![20210913142050](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210913142050.png)


### 遍历 map

```javascript
let new_map = new Map();
new_map.set(0, "1");
new_map.set(1, "2");
// 遍历键
for (let key of new_map.keys()) {
    console.log(key);
}

// 遍历值

for (let value of my_map.values()) {
  console.log(value);
}
```

使用 `forEach()`迭代 Map

```JavaScript
my_map.forEach(function(value, key) {
  console.log(key + " = " + value);
})
// 将会显示两个logs。 一个是 "0 = zero" 另一个是 "1 = one"

```

## array 生成map

将二维键值对 数据可以使用构造函数 生成map 对象

```JavaScript

let kvArray = [["key1", "value1"], ["key2", "value2"]];

// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
let myMap = new Map(kvArray);

myMap.get("key1"); // 返回值为 "value1"

// 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组
console.log(Array.from(myMap)); // 输出和kvArray相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log([...myMap]); 
// 展开语法, map是可迭代对象 使用展开语法时没有那么多限制


// 或者在键或者值的迭代器上使用Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap.keys())); // 输出 ["key1", "key2"]

```
数组合并：

注意： 当两个数组合并时， 共有的键 即重复的键，后面的会覆盖掉前面的键
```JavaScript
let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开运算符本质上是将Map对象转换成数组。
let merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```
map 也可以和 数组合并

```JavaScript
let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// Map对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。
let merged = new Map([...first, ...second, [1, 'eins']]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```


## map 方法

### clear
移除所有元素：

`myMap.clear();`
返回值：
`undefined`

### delete
删除指定元素

`myMap.delete(key);` 移除元素的键

注意删除的时 `key`
返回值：
`Boolean`
如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false。
### has

`myMap.has(key);`
返回值：
`Boolean`
如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false。

### entries

Map.prototype.entries()
entries() 方法返回一个新的包含 [key, value] 对的 Iterator 对象，返回的迭代器的迭代顺序与 Map 对象的插入顺序相同。
> 迭代器对象还是很熟悉,暂时简单了解

### keys & vaules 
返回的是引用的 Iterator 对象 ，

它包含按照顺序插入 Map 对象中每个元素的key值

### 
# 展开语法

**展开语法(Spread syntax)**, 可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。(译者注: 字面量一般指 `[1, 2, 3] `或者 `{name: "mdn"}` 这种简洁的构造方式)

## 语法

### 函数调用：
`myFunction(...iterableObj)`

等价于`apply`
将数组元素 迭代为 函数参数， 使用 apply方式展开
```javascript
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);
```
```JavaScript
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
```

apply 执行的是调用 [[Call]]


### 字面量数组构造或字符串：

了展开语法,  通过字面量方式, 构造新数组会变得更简单、更优雅：


```javascript
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; 
// ["head", "shoulders", "knees", "and", "toes"]

```

连接两个数组

`arr1.concat(arr2);`

```JavaScript
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];

```


### 构建字面量对象

其行为是, 将已有对象的所有可枚举(enumerable)属性拷贝到新构造的对象中.

在数组或者 函数参数中使用展开语法， 只可用于可迭代对象

```javascript
var obj = {'key1': 'value1'};
var array = [...obj]; // TypeError: obj is not iterable

```