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