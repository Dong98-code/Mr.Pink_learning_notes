# 内置对象
浏览器对象 JS独有

内置对象：JS内置好的，集成好的

Math Data ARRAY STRING对象等

## 文档
MDN /w3c

查阅功能
参数
返回值
demo


## math 对象


不是构造器，直接使用，并不需要 new

查询MDN文档
### Math.max()
如果给定的参数中至少有一个参数无法被转换成数字，则会返回 NaN。
不为数字，返回`Nan`

#### 练习：封装数学对象
```
    <script>
        //myMath
        let myMath = {
            PI: 3.1415926,
            max: function () {
                let max_num = arguments[0];
                for (let i = 1; i < arguments.length; i++) {
                    if (arguments[i] > max_num) {
                        max_num = arguments[i];
                    }

                }
                return max_num;

            },
            min: function () {
                let min_num = arguments[0];
                for (let i = 1; i < arguments.length; i++) {
                    if (arguments[i] < min_num) {
                        min_num = arguments[i];
                    }

                }
                return min_num;

            }


        }

        console.log(myMath.PI);
        console.log(myMath.max(1, 5, 10));
    </script>
```
### Math.abs()

隐式转换

字符型的数字 自动先转换成数字

### Math.floor()/ceil/round()
向下取整
向上取整
四舍五入

![20210828231053](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210828231053.png)
### random()
方法

返回随机的小数 0 <= x <1

不用输入参数

得到随机整数：`getRandomInt(min,max)`

包含两个端点值：
```javascript
    <script>
        // 返回 随机整数包含两端
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        console.log(getRandom(1,10));
    </script>

```
#### 练习：猜数字游戏

```JavaScript

    <script>
        // 猜数字
        // 1。随机生成1-100整数
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
        }
        // 数字大了，提示数字大了
        let random = getRandomIntInclusive(1,100);
        while(true) {
            let num = prompt('请输入数字');
            if (random > num) {
                alert('抱歉，输入的数字小了');
            } else if(random < num) {
                alert('抱歉，输入的数字大了')
            } else {
                alert('恭喜你，猜对了')
                break;
            }
        }
    </script>
```

## 日期对象 Data

构造函数

需要使用 `new`关键字
```javascript
    <script>
        // 1. 创建新的Date对象
        let date = Date() // 返回当前时间
        console.log(date);
        // 数字型逗号隔开
        let data2 = Date(2021,8,27)
        console.log(data2);
        let data3 = Date('2021-8-27 23:39')
        console.log(data3);
    </script>
```
### 格式化
#### 年份
返回当前日期的年

`getFullYear()`

`Date.prototype.getMonth()`
根据本地时间，返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）
sb

返回日子不会出问题
`Date.getDate`日期
`Date.getDay`星期几

#### 时分秒：
![20210828235447](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210828235447.png)
```JavaScript
    <script>
        // 返回当前的时间时分秒
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
        console.log(getTime());
    </script>
```
#### 时间戳

`data.valueof`
`date.getTime`

`let date = +new Date()`返回现在的毫秒数 

`Date.now()`


### 倒计时

输入时间 - 现在的时间 就是剩余时间

时间格式不能直接相减
时间戳相减
转化时间戳

![20210829000227](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210829000227.png)

![20210829001749](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210829001749.png)
```javascript
    <script>
        function countTime(time) {
            let now_time = +new Date();
            let input_time = +new Date(time);
            let total_time = (input_time - now_time)/1000; // ms->s
            let day = parseInt(total_time/60/60/24);
            day < 10 ? '0'+day:day;
            let hour = parseInt(total_time/60/60%24);
            hour < 10 ? '0'+hour:hour;
            let minute = parseInt(total_time/60%60); // 分钟数
            minute < 10? '0'+minute:minute;
            let second = parseInt(total_time%60);
            second < 10?'0'+second:second;
            return `${day}天${hour}时${minute}分${second}秒`
        }
        console.log(countTime('2021-8-31 00:00:00'));
    </script>
```




## 数组

new Array(n) 长度为n的数组

### 检查是否为数组？

反转数组

`instanceof Array` 判断是否为数组

`Array.isArray()`

Array.isArray(obj) 
obj 为参数
``` javascript
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'))
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype });

```
当检测Array实例时, Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.


### 添加元素
push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
参数：需要添加的数组元素

返回值：
新的length自动返回

开头添加：
unshift
unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
语法：
`arr.unshift(element1, ..., elementN)`
![20210902212301](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210902212301.png)


### 删除元素

`pop()`
返回值
从数组中删除的元素(当数组为空时返回undefined)。

空数组 返回`undefined`

```JavaScript
let myFish = ["angel", "clown", "mandarin", "surgeon"];

let popped = myFish.pop();

console.log(myFish);
// ["angel", "clown", "mandarin"]

console.log(popped);
// surgeon

```

### 练习 筛选数组

```JavaScript
    <script>
        let arr = [1500, 2500, 33500, 2000]
        let newArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= 2000) {
                newArray.push(arr[i]);
            }
        }
        console.log(newArray);
    </script>
```


### reverse

`arr.reverse()`
reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。


### sort()
排序数组

sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的

由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。


`compareFunction` 可选
用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
`firstEl`
第一个用于比较的元素。
`secondEl`
第二个用于比较的元素

如果没有指明 compareFunction ，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序。例如 "Banana" 会被排列到 "cherry" 之前。当数字按由小到大排序时，9 出现在 80 之前，但因为（没有指明 compareFunction），比较的数字会先被转换为字符串，所以在Unicode顺序上 "80" 要比 "9" 要靠前。


比较函数 用于比较 列表中的值

要比较数字而非字符串，比较函数可以简单的以 a 减 b，如下的函数将会将数组升序排列

```JavaScript 
function compareNumbers(a, b) {
  return a - b;
}

```
a-b>0 b在前，升序排列

```JavaScript
var numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);
```


### 元素索引

`Array.prototype.indexOf()`
`indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

只返回第一个要查找的值的索引

`arr.indexOf(searchElement[, fromIndex])`

fromIndex 可选
开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.


### 练习：数组去重

```javascript
    <script>
        let arr = [1,2,3,1,2];
        let newArray = [];
        for (let i = 0;i<=arr.length;i++) {
            if (newArray.indexOf(arr[i]) === -1) {
                newArray.push(arr[i])
            }
        }
        console.log(newArray);
    </script>
```

### 数组转换成字符串

```
arr.toString()
```
返回值：表示制定数组及其元素的字符串

```javscript
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
```
默认分隔符为逗号`，`

`join(分割符)`

```JavaScript
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

### splice()方法

删除或者替换 现有的元素或者原地 添加新的元素 来修改数组 并以数组形式返回修改的内容


#### 语法：
```
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

`start`:指定修改的 开始位置：
 超出数组长度，尾部添加；
 负数： 倒数第几个位置添加；负数的绝对值超过数组长度则 从第0位开始操作

 `deleteCount`
 整数，需要移除的数组的个数

 大于 start开始的后面的元素的个数，则将 包含start 之后的所有元素删除
 0 或者负数， 至少添加新元素

 `item1`
 要添加进数组的元素：
 不指定，就不添加，只删除

# 字符串对象

对象才属性和方法
简单 数据类型：

基本包装类型：将简单数据类型 转换成复杂数据类型
![20210906221207](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210906221207.png)


String, Number,Boolen三种特殊的引用类型

## 字符串不可变
相同的名字 不同的人

```javascript
let str = 'andy';
str = 'red'

```
![20210906221505](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210906221505.png)
str只是指向了不同的内存地址

字符串不可变，尽量不要大量拼接字符串
拼接字符串，每次都产生新的字符串，内存变得很少

## 字符串 方法

所有的操作都不会 改变字符串，而是产生新的字符串

### str.indexOf()

`str.indexOf(searchValue [, fromIndex])`

练习： 返回字符串中 o出现的位置及次数

```JavaScript

    <script>
        let str = 'absndddnndnd';
        let index = str.indexOf('n');
        while (index !== -1) {
            console.log(index);
            index = str.indexOf('n',index+1);
        }
    </script>
```

### charAt(index)
返回

### charCodeAt(index)
返回ASCII 值
判断用户判断哪个键

### str[index]
和数组类似


### concat()
concat(str1,str2)

### 字符串切片

substr(start, num)
开始位置， 截取几个字符
### 替换字符串

replace

`str.replace(regexp|substr, newSubStr|function)`

与正则化表达式 一起使用
### split

返回 Array
`str.split([separator[, limit]])`


## 简单数据类型和复杂数据类型

### 内存分配

简单数据类型： 基本数据类型  值类型

复杂数据类型： 引用类型； 值类型

`null` 返回 object

如果 变量 将来 存储为对象，先定义成null  本身为空对象；

### 堆和栈

js中没有堆栈 概念 

复杂数据类型： 首先再栈内存放 地址，在堆中存放值
![20210908200039](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210908200039.png)


### 传参

复杂数据类型 

p 的地址给了x  两个指向内存中的同一个值，一个改变 另外一个跟着改变