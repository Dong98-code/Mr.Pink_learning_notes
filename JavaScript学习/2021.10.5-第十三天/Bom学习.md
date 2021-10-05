# BOM
##  1.BOM  概述

### 1.1什么是bom?

browser object model 浏览器对象模型；
独立于内容而与浏览器窗口进行交互的对象 window

不足：
兼容性问题
![20211005142754](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005142754.png)

浏览器厂商自己定义；
BOM 包含DOM中的内用 

window > document 
`window.document.。。`

### 1.2 BOm 构成

window 对象 
js 访问浏览器的接口；‘

全局对象，在全局作用域中， 全局变量 会自动变成 window 的对象和属性

![20211005143157](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005143157.png)

调用时 省略window

如：alert()等方法；、

命名时 注意保留字


## 2.window 对象常见事件


### 2.1 窗口加载事件

```
window.onload = function() {}
```
![20211005143625](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005143625.png)

文档内容全部加载完成 才会执行对应的函数

```javascript
<body>
    <script>
        window.onload =  function() {
            let btn = document.querySelector('button');
            btn.onclick = function() {
                alert('hhahha');
            }
        }
    </script>
    <button>点击</button>
    <!-- 点击弹出对话框 -->
</body>
```

可以将js文件 放在页面的任意一个位置；
多个onload ,执行最后一个，以最后一个onload为准
![20211005143932](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005143932.png)


提倡：

```JavaScript
window.addEventListener('load',function(){
    <!-- 函数体 -->
})
```
`DOMContentLoaded`
![20211005144321](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005144321.png)

load等页面内容全部加载完毕， 包含dom元素，图片等；
`DOMContentLoaded ` 不包含图片等 元素


### 2.2 调整窗口大小事件

```
window.onresize() = function(){}
window.addEventListener('resize', functuion(){})
```

调整窗口与事件 大小 


```javascript
    <script>
        window.onresize = function () {
            alert('窗口变化了');
        }
    </script>

```

## 3. 定时器

### 3.1 setTiemout()
![20211005145824](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005145824.png)
```javascript
setTimeout(function(){}, 事件：ms)
```

外部定义函数，写函数名称

给不同的定时器 命名 以区别不同的定时器；
![20211005150340](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005150340.png)

函数；函数名；字符型的函数名

### 3.2 回调函数

setTimeout(回调函数， 时间）

回调函数；
等待一段时间， 然后去 调用 这个函数 ，称之为回调函数

![20211005150605](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005150605.png)


- 练习： 5s中之后关闭的广告

![20211005150643](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005150643.png)

![20211005150758](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005150758.png)



### 3.3 停止定时器

```
clearTimeout(定时器标识符)
```

timeoutID:定时器的名字


### 3.4 setInterval()

`window.setInterval(回调函数，【间隔】)`
语法和注意点 和`setTimeout()`类似

没隔一段时间就去执行 回调函数；

setTimeout()是 执行一次 回调函数；


- 练习： 秒杀倒计时

1. 定时器 变化setinternal

2. 三个盒子 为 时分秒

3. innerHtml更改盒子的内容

![20211005155601](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005155601.png)


### 3.5 清除计时器 setInternal()

在上述计时器的基础上，增加开关定时器
点击开始计时， 倒计时开始
点击停止计时，倒计时结束

![20211005160342](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005160342.png)

注意：
- 清除 倒计时时， 注意timer 的作用域， 在回调函数中，有可能找不到 定义的计时器ID ，将定时器的作用域提高，以便于 在停止计时器的时候， `clearInterval(timer);`能找到对应的计时器并停止；

代码：
```JavaScript
<script>
    var time = '2021-10-6 00:00:00';
    let h = document.querySelector('.hour');
    let m = document.querySelector('.minute');
    let s = document.querySelector('.second');
    countTime();
    let begin = document.querySelector('.begin');
    let stop  =document.querySelector('.stop');
    // 定义全局变量 timer
    let timer = null;
    begin.addEventListener('click', function () {
        countTime();
        timer = setInterval(countTime, 1000);
    })
    stop.addEventListener('click', function() {
        clearInterval(timer);
    })
    
    function countTime() {
            let now_time = +new Date();
            let input_time = +new Date(time);
            let total_time = (input_time - now_time)/1000; // ms->s
            let day = parseInt(total_time/60/60/24);
            day < 10 ? '0'+day:day;
            let hour = parseInt(total_time/60/60%24);
            hour < 10 ? '0'+hour:hour;
            h.innerText = hour;
            let minute = parseInt(total_time/60%60); // 分钟数
            minute < 10? '0'+minute:minute;
            m.innerText = minute;
            let second = parseInt(total_time%60);
            second < 10?'0'+second:second;
            s.innerText = second;
            // return `${day}天${hour}时${minute}分${second}秒`
        }
</script>
```

- 练习-发送短信案例

![20211005160934](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005160934.png)

一分钟之内 禁用按钮： 点击按钮，disabled 变为true;
按钮内的内容发生变化， button中的内容 需要innerHtml去修改

并添加倒计时案例；

每隔一秒钟， 变量-1

点击之后开始倒计时：
![20211005165458](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005165458.png)

当计数器的值减少到0时， 清除计数器；恢复 btn.innerHtml为发送；
重置计数器的值

### 3.6 this的指向问题

this 指向调用他 的对象’

1. 全局作用域下，普通函数中this指向全局对象window

计时器中的this指向 window;

2. 方法中： 指向调用者，谁调用指向谁

3. 构造函数中的this 指向实例对象；


## 4. js执行进程

### 4.1 js 单线程


![20211005170359](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005170359.png)
只想玩 定时器之后，才会执行下面的 log(2)

浪费时间

### 4.3 同步和异步

同步：程序执行的顺序和 排列顺序相同；
异步：

异步进行 ： 同时进行多个任务

![20211005170607](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005170607.png)


流水线上的各个进程 不同

如何执行？

![20211005170705](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005170705.png)

out:123


![20211005170734](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005170734.png)

回调函数 为异步任务

![20211005170752](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005170752.png)



### 4.4 执行机制

先执行 任务栈中的同步任务

![20211005170952](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005170952.png)


多个异步任务：

先进先出

事件循环

![20211005171350](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005171350.png)

## 5. location 对象



location 属性  用于获取窗体的url，并且 可以用于解析url，属性返回对象，将这个属性成为location 对象


![20211005171616](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005171616.png)


统一资源 定位符
uniform resource 
![20211005171708](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005171708.png)


`location.href`

`location.host`: 返回域名

`location。search`返回 参数


`hash` 返回片段 # 链接 锚点

![20211005172002](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005172002.png)


跳转页面：

![20211005172205](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005172205.png)


![20211005172456](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005172456.png)



#### location 中的方法

跳转： `location.assign`

跳转页面

![20211005201607](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005201607.png)

## 6.navigator 对象

useragent:
![20211005201839](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005201839.png)

![20211005201922](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005201922.png)


## 7.history对象

![20211005202136](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20211005202136.png)