# jQuery

## 1.基本使用

引入jQuery

![20220210212601](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210212601.png)

隐藏盒子：

`// $('div').hide();`

### 1.1入口函数

等 dom主要元素加载完毕再执行；
```js
$(document).ready(function() {

})
```

```js
$(function () {
    ...
})
```

`DOMContentLoaded`

### 1.2顶级对象 `＄`

`＄`为jQuery的别称

![20220210213221](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210213221.png)
```js
jQuery(function() {

})
```

### 1.3jQuery 对象和DOM对象

1. 原生js获取的就是DOM对象
2. jQuery获取的元素就是jQuery对象
3. 使用`$`对DOM 对象 包装后产生的对象；使用伪数组存储

tips:

jQuery对象才能使用 jQuery方法；

DOM对象 使用原生js方法；

```js
$('div'); // $('div')是一个jQuery 对象
$('span'); // $('span')是一个jQuery 对象
```

`$('div').style.display = 'none'; `
这个`$('div')`是一个jQuery对象不能使用原生js 的属性和方法

### 1.4 jQuery 对象和DOM对象 相互转换

```js
    // 1. DOM对象转换为 jQuery对象
    // (1) 我们直接获取视频，得到就是jQuery对象
    // $('video');
    // (2) 我们已经使用原生js 获取过来 DOM对象
    var myvideo = document.querySelector('video');
    // $(myvideo).play();  jquery里面没有play 这个方法
    // 2.  jQuery对象转换为DOM对象
    // myvideo.play();
    $('video')[0].play()
    $('video').get(0).play()
```

2.jQuery 对象转换成DOM对象

![20220210214213](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210214213.png)


## 2.jQuery API

### 2.1.选择器

#### 2.1.1 基础选择器

![20220210214632](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210214632.png)


#### 2.1.2 层级选择器

1. 子代选择器

`$("ul>li")`

2. 后代选择器

`$("ul li")`

![20220210214800](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210214800.png)


#### 2.1.3 隐式迭代

设置样式值:

`$('div').css("属性"， "值")`
```html
<script>
        // 1. 获取四个div元素 
        console.log($("div"));

        // 2. 给四个div设置背景颜色为粉色 jquery对象不能使用style
        $("div").css("background", "pink");
        // 3. 隐式迭代就是把匹配的所有元素内部进行遍历循环，给每一个元素添加css这个方法
        $("ul li").css("color", "red");
</script>
```

隐式迭代：

遍历dom元素(伪数组形式存储) 的过程叫做 隐式迭代；并且执行相对应的过程；


#### 2.1.4 筛选选择器

![20220210215434](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210215434.png)


#### 2.1.5 筛选方法

父子兄

方法，记得加`()`;


![20220210220006](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210220006.png)


下拉菜单案例：

![20220210224424](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210224424.png)


`siblings(selector)`：

除了自身元素之外的所有亲兄弟元素；

`nextAll()`: 之后的兄弟元素


#### 2.1.6 链式编程

`$(this).css('color', 'red).sibling().css('color', "")`


### 2.2 jQuery 样式操作

#### 2.2.1 操作css方法


1. 参数只有属性名字， 返回 属性值

`$(this).css('color')`

返回颜色值

2. 属性名， 属性值

逗号分割 属性必须加引号；数字不用跟单位和引号；

```js
$("div").css("width", "300px");
$("div").css("width", 300);
$("div").css(height, "300px"); // 属性名一定要加引号
```


```js
$("div").css({
        width: 400,
        height: 400,
        backgroundColor: "red"
        // 如果是复合属性则必须采取驼峰命名法，如果值不是数字，则需要加引号
})
```

#### 2.2.2 设置类样式方法

1. 添加类

`$('div').addClass("current")`;

2. 移除类

`$("div").removeClass("current")`

3. 切换类

`$("div").toggleClass("current")`;


#### 2.2.3 类操作 与 className 区别

原生 js中的className 会覆盖原先里面的类名；

jQuery 里面 操作 对指定类进行操作， 不影响原来的类名；

### 2.3 jQuery 效果

#### 2.3.1 显示与隐藏

`show([speed, [easing], [fn]])`

1. speed:

三种预定义的字符串； 'slow', 'normal', 'fast';

或者 表示动画时长的毫米数值： 1000；

2. easing

切换效果 默认 'swing'

3. fn

回调函数  在动画执行 完成时的效果； 每个元素执行一次；


隐藏 效果：

![20220210233142](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210233142.png)
同显示相似；

![20220210233156](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210233156.png)


#### 2.3.2 滑动效果

`slideUp([speed, [easing], [fn]])`

![20220210233450](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210233450.png)

#### 2.3.3 切换事件

`hover`

只写一个函数 鼠标经过 和 鼠标离开都会 除法这个函数；

#### 2.3.4 动画队列 及其停止 排队方法

1. 动画 或 效果队列

动画一经触发 如果多次触发， 就会造成多个动画或者效果排队执行


2. stop()

stop() 方法写道 动画的前面， 相当于 结束上一次动画；

```js
$(".nav>li").hover(function() {
    // stop 方法必须写到动画的前面
    $(this).children("ul").stop().slideToggle();
});
```

#### 2.3.5 淡入淡出效果

`fadeOut()`

淡入 效果
`fadeIn()`


```html
<script>
        $(function() {
            $("button").eq(0).click(function() {
                // 淡入 fadeIn()
                $("div").fadeIn(1000);
            })
            $("button").eq(1).click(function() {
                // 淡出 fadeOut()
                $("div").fadeOut(1000);

            })
            $("button").eq(2).click(function() {
                // 淡入淡出切换 fadeToggle()
                $("div").fadeToggle(1000);

            });
            $("button").eq(3).click(function() {
                //  修改透明度 fadeTo() 这个速度和透明度要必须写
                $("div").fadeTo(1000, 0.5);

            });


        });
    </script>
```


在动画前面加`stop()`


#### 2.3.6 自定义动画

`animate(params, [speed], [easing], [fn])`

![20220210235111](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220210235111.png)

`params`： 以对象 形式传递； 属性名 可以不加 引号； 复合属性使用驼峰 命名法； `borderLeft`


### 2.4 属性操作


#### 2.4.1 设置或者获取元素固有的属性值 prop()

1. `prop("属性")`

2. `prop("属性"， 值)`


#### 2.4.2 自定义属性

`attr`

![20220211105815](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220211105815.png)

#### 2.4.3 数据缓存 data() 

附加数据：

`data("name", "value")` 向被选中元素 附加数据

获取数据

`data("name")`

```js

// 2. 元素的自定义属性 我们通过 attr()
console.log($("div").attr("index"));
$("div").attr("index", 4);
console.log($("div").attr("data-index"));
// 3. 数据缓存 data() 这个里面的数据是存放在元素的内存里面
$("span").data("uname", "andy");
console.log($("span").data("uname"));
// 这个方法获取data-index h5自定义属性 第一个 不用写data-  而且返回的是数字型
console.log($("div").data("index"));

```

`:checked` 被选中 的框的个数；


### 2.5内容文本值


1. 普通元素内容 html()  相当于 innerHTML

`html()` // 获取元素的内容

`html("内容")` // 设置元素的内容

1. 文本内容 

`text()`  // 设置元素的文本内容

3. 表单的值

`val()` 相当于原生 `value`


`val() ; val("内容")` 设置值


案例： 增减商品数量；

![20220211120534](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220211120534.png)


`parents("选择器")` 返回 制定的祖先元素；


### 2.7 jQuery 元素操作

#### 2.7.1 遍历元素

```js
$("div).each(function(i, domele){
// 函数体
})

```
第二个元素为 dom元素 需要先讲jQuery转换成 dom元素；


#### 2.7.2 创建 添加和 删除元素

创建
`$("<li></li>")`

添加：
1. 内部添加：

`element.append("内容")`
创建到 匹配元素的后面

`prepend("内容")`

放在匹配元素的前面

2. 外部添加

`element.before("内容")`

`element.after("内容")`

![20220211232204](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220211232204.png)

删除元素：

![20220211232231](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220211232231.png)



### 2.8 尺寸和位置操作


#### 2.8.1 jQuery 尺寸

`width()` / `height()`


![20220211233309](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220211233309.png)


#### 2.8.2 位置操作

`offset()`

返回 被选中元素 相对于 文档的偏移坐标 跟父级没有关系；

- left top 两个属性值

例如： `offset().left` 获取 距离文档左侧的位置；

- 可以设置 元素的偏移 ： `offset({top:10, left:30})`


`position()`:

- 相对于带有定位的父级偏移坐标 如果父级没有定位 那么以文档为准；
- 该方法为只读属性； 不能更改 值

`scrollTop()` / `scrollLeft()`

- 返回被选中元素 被卷去 的头部或者左侧部分；


![20220211234016](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220211234016.png)


## 3.jQuery 事件


### 3.1 事件注册

单个事件注册：

`element.事件(function() {})`

事件处理程序

`$("div").click(function() {事件处理})`

### 3.2 事件处理

#### 3.2.1 事件处理 on() 绑定事件

on()方法 在匹配元素上绑定一个或者多个 事件的处理函数；

`element.on(events, [selector], fn)`

`events` 一个或者多个事件类型; 逗号隔开；

```js
// (1) on可以绑定1个或者多个事件处理程序
$("div").on({
    mouseenter: function() {
        $(this).css("background", "skyblue");
    },
    click: function() {
        $(this).css("background", "purple");
    },
    mouseleave: function() {
        $(this).css("background", "blue");
        }
});
```

添加类或者删除类

```js
$("div").on("mouseenter mouseleave", function() {
    $(this).toggleClass("current");
});
```

事件委托：

将原来 加在 子元素身上的事件 绑定在 父元素身上； 就是把事件委派给 父元素；

```js
// $("ul li").click();
            $("ul").on("click", "li", function() {
                alert(11);
            });
```

绑定在 ul身上， 触发为li ， 利用冒泡 ul将执行相对应的 回调函数；


![20220212120153](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220212120153.png)


#### 3.2.2 事件解绑
 
事件解绑

![20220212155805](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220212155805.png)

事件只能触发一次；
```js
$("p").one("click", function() {
                alert(11);
            })
```

#### 3.2.3 自动触发事件trigger()

首先给 事件绑定一个事件 On：

```js
(function() {
            $("div").on("click", function() {
                alert(11);
            });

```
自动触发事件
1. `$("div").click()`
点击之后自动触发
2. 
```js
 // 2. 元素.trigger("事件")
            // $("div").trigger("click");会触发元素的默认行为
```
3. ![20220212160339](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220212160339.png)


```element.triggerHandler(type)```

第三种不会触发 元素的默认行为


### 3.3 事件对象

阻止冒泡

![20220212160822](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220212160822.png)


## 4. jQuery 其他方法
### 4.1 对象拷贝

`$.extend([deep], target, object1, [objectN])`

![20220212161039](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220212161039.png)


### 4.2 多库共存

![20220212163956](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220212163956.png)


`$.nonConflict()`

### 4.3 插件

jq22



