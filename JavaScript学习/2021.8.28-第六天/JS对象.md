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