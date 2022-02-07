# 字体图标

本质是 文字，展示的是图标

## 优点

灵活性： 灵活修改样式，尺寸等

轻量级： 加载速度块 

兼容性强

## iconfont使用

1. 下载

![20220207165112](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207165112.png)

2. 使用

![20220207165134](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207165134.png)

- Unicode编码 引用

    - 引入样式表： iconfont.css
    - 复制对应的Uniccode编码
    - 设置文字字体

    ![20220207165241](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207165241.png)

- 类名 引用

    - 引入字体图标的样式表
    - 调用 图标对应的类名 ， 必须调用两个类名
        `iconfont` 基本样式
        `icont-xx` 图标对应的类名
        ![20220207165456](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207165456.png)

3. 上传矢量图

    ![20220207165541](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207165541.png)

## 案例

类选择的权重值 10

![20220127223520](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220127223520.png)

### 购物车案例

引入iconfont css样式表

![20220127224041](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220127224041.png)

盒子的css代码
![20220127224310](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220127224310.png)

几个内容 几个小标签； span和li
![20220127224856](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220127224856.png)


# 平面转换

transform  :位移 旋转 缩放等效果；

- 平面转换：
  改变盒子所在平面内的位移缩放，旋转；
  2D旋转

## 位移

语法：
`transform：translate(x, y)`

正值往右 ；负值往左；
transform:`tf`
50% : 盒子自身尺寸的百分比；

`transform: translateX`  : x,y 轴单独移动；

只给出 一个值。默认为x轴的值；

### 水平居中

绝对定位 不能用 `margin: 0 atuo`

![20220127231151](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220127231151.png)


![20220127231528](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220127231528.png)

`transform:translate(-50%, -50% )`


### 双开门特效

before after 伪元素；
精灵图位移：
直接使用right；
行内显示模式；伪元素；
![20220127232418](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220127232418.png)


## 旋转

`rotate(角度)`

deg : 正负即可；

`transform-origin`: 改变原点； 复合属性； 空格隔开

例如：
`left right`


## 复合变换 

先 transform  后 rotate

旋转的时候 坐标轴的指向 发生了旋转；


## 缩放

直接改变盒子大小 

变换 img的宽高；

`transform:scale(缩放倍数)`

## 渐变

![20220128214517](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220128214517.png)


# 空间转换


## 空间位移
`transform: translate3d(x, y, z)`

`transform：translateX(值)`

`transform：translateY(值)`

`transform：translateZ(值)`


## 透视

`perspective： 值`

添加给父级元素， 像素单位数值， 一般为800-1200

![20220207170418](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207170418.png)


## 空间旋转

`transform：rotateZ(值)`

左手法则：

![20220207170535](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207170535.png)

## 立体呈现

使用 perspective 只能实现近大远小 近实远虚的效果

`transform-style:preserve-3d`

步骤：

1. 父级元素添加 `transform-style:preserve-3d`
2. 按需求 设置盒子的位置 位移 旋转等


案例： 3d导航

![20220207170908](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207170908.png)

![20220207170923](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207170923.png)


# 动画

animation

## 动画实现步骤

1. 定义动画

```css

@keyframes 动画名称 {
    from {}
    to {}
}
```

示例：

```css
<style>
        .box {
            width: 200px;
            height: 100px;
            background-color: pink;
            /* animation: change 1s linear; */

            /* 分步动画 */

            /* 3: 重复3次播放 */
            /* animation: change 1s steps(3) 1s 3; */

            /* 无限循环 */
            /* animation: change 1s infinite alternate; */

            /* 默认值, 动画停留在最初的状态 */
            /* animation: change 1s backwards; */

            /* 动画停留在结束状态 */
            animation: change 1s forwards;
        }

        @keyframes change {
            from {
                width: 200px;
            }
            to {
                width: 600px;
            }
        }
```

## 动画属性

```css
animation: 动画名称 时长 速度曲线 延迟时间 重复次数 动画方向 执行完毕时的状态；
```

![20220207171513](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207171513.png)


### 逐帧动画

`animation-timing-function:steps(N)`

讲动画 过程 等分成 N份

案例： clock:

![20220207174546](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207174546.png)

```css
.sec {
            width: 2px;
            height: 60px;
            background-color: red;
            transform: translate(-50%) rotate(225deg);
            animation: rotate 60s steps(60) infinite;
        }

        @keyframes rotate {
            0% {
                transform: rotate(0);
            }
            100% {
                transform: rotate(360deg);
            }
        }
```


# 移动端特点

## 不同点

![20220207174752](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207174752.png)

## 谷歌模拟器

![20220207174823](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207174823.png)

## 分辨率

pc分辨率：

1920 * 1080是什么意思？

物理分辨率： 硬件设备 能够显示的 像素点；

逻辑分辨率： 缩放调节的分辨率；

![20220207175219](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207175219.png)


## 视口

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

默认情况下 网页的宽度 和逻辑分辨率相同嘛：

不同：

默认网页的宽度是980px


![20220207175418](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207175418.png)

![20220207175428](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207175428.png)


## 二倍图

![20220207175646](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207175646.png)


# 百分比布局

流式布局

宽度自适应； 高度固定

# Flex

类似与浮动

但是不用清除浮动；

浏览器提倡的布局模型；

避免浮动脱标的问题

## 作用 

适用于 结构化布局

基于Flex精确灵活 的布局方式， 避免浮动布局中 脱离文档流现象的发生；

父级盒子设置 ： `display：flex`

父级盒子为弹性容器；

子级盒子为弹性盒子；

主轴和侧轴

## 主轴对齐方式：

`justify-content`

![20220207182124](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207182124.png)

## 侧轴对齐方式

使用`align-items`

![20220207182201](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207182201.png)

控制单个弹性盒子 在侧轴的对齐方式： 

`align-self`

## 伸缩比

属性：
`flex:值`

整数

占用 父盒子 剩余尺寸的多少

## 改变轴向

`flex-direction`

弹性盒子默认沿着主轴方向排列

主轴默认方向为水平方向 ； 侧轴默认为垂直方向

![20220207182545](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207182545.png)


## 弹性盒子换行

`flex-wrap:wrap`

调整对齐方式： 
`align-content`

# 移动适配-rem

## 什么是移动适配？

根据 手机尺寸的大小 改变网页元素的大小

网页元素 宽高 随着设备的宽度 变化而变化

rem 和 vw/vh


## rem

能够使用 rem单位设置网页元素的尺寸

px 百分比布局： 宽度自使用； 高度固定；

`rem = 1 HTML字号`

根标签字号；

1. 保证 html标签有字号


### rem移动适配

1. 不同设备 html字号不同？
2. 设置为多少？

媒体查询：

检测视口的宽， 设置差异化的css样式；

写法：

```css
@media {媒体特性} {
    选择器 {
        css属性
    }
}
```

例子：
```css
@media {width:320px} {
    html {

    }
}
```

![20220204220415](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220204220415.png)

规律：

- 目前的html布局中，将网页 分成10份， html标签的字号为视口宽度的1/10

### rem适配原理

N*37.5 = 68

rem单位尺寸：
1. 确定 设计稿件对应的设备的html标签；
   - 确定视口， 1/10根字号
2. rem单位的尺寸：
   - px单位尺寸/基准根字号

### flexible

![20220204222043](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220204222043.png)


## less

使用less 运算 写法 完成px到rem单位的转换

简便 书写生成css代码

示例：

![20220205134107](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220205134107.png)


使用less  生成对应的css文件，之后 引入 css文件；生成在同级 文件夹内
## less语法

注释：

- 单行注释

// 或者 快捷键 `ctrl+/`

- 块注释

`/*内容*/`


计算：

除法”
加减乘直接书写；

除法 需要添加小括号；

嵌套：
`&` 表示当前选择器：

![20220205135343](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220205135343.png)

变量：

`@变量名:值`

使用变量： `css属性：@变量名`


引入less:

`@import "文件路径"`
空格+分号

导出css文件：


![20220205140825](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220205140825.png)

`// out: ./css/`

禁止导出：

![20220205141001](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220205141001.png)


# vm和vh

vw 单位尺寸
px单位数值/ (0.01 视口宽度)

![20220207205721](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207205721.png)


二者不能混用， 否则有可能导致 盒子变形

![20220207205806](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207205806.png)


# 响应式
适应不同的屏幕大小

## 媒体查询

根据设备的宽度的变化， 设置差差异化样式；

`max-width`

`min-width` 

检测最大宽度和最小宽度

检测视口宽度， 执行相对应的css样式

示例：

```html
<style>
        /* 视口宽度小于等于768px， 网页背景色是粉色 */
        @media (max-width: 768px) {
            body {
                background-color: pink;
            }
        }

        /* 视口宽度大于等于1200px， 网页背景色是skyblue */
        @media (min-width: 1200px) {
            body {
                background-color: skyblue;
            }
        }
        
    </style>
```
视口宽度满足 第一个 筛选条件， 显示为粉色
![20220206232921](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220206232921.png)

### 书写顺序

视口宽度 >= 768px，网页背景色是 粉色
视口宽度 >= 992px，网页背景色是 绿色
视口宽度 >= 1200px，网页背景色是 skyblue

```html
<style>
    @media (min-width: 768px) {
                body {
                    background-color: pink;
                }
    }
    @media (min-width: 992px) {
                body {
                    background-color: green;
                }
    }
    @media (min-width: 1200px) {
                body {
                    background-color: skyblue;
                }
    }
</style>
```

css的层叠性

### 完整写法
![20220206233737](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220206233737.png)


关键词：

and only not

媒体类型：
![20220206233908](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220206233908.png)

媒体特性：

![20220206234028](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220206234028.png)

### 引入外部css

```html
<link rel="stylesheet" media="逻辑符 媒体类型 and (媒体特性)" href="xx.css">

```
```html
<link rel="stylesheet" href="./one.css" media="(min-width: 992px)">
<link rel="stylesheet" href="./two.css" media="(min-width: 1200px)">
```
- 注意： 媒体特性， 外部加上小括号


## bootstrap

### 简介

twitter

![20220207000416](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207000416.png)

封装好的代码

### 下载

bootcss网站

### 使用

引入 样式表 
`bootstrap-theme.min.css` 压缩后的

container: 版心效果

### bootstrap 栅格系统

响应式布局

![20220207003426](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207003426.png)

类前缀： `col-xs-*` `*`表示第几列

![20220207005756](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220207005756.png)

```
<!-- row类作用就是抵消container类的15px的内边距, row有-15px的外边距 -->
    <div class="container">
        <div class="row">2</div>
    </div>
```

`.container-fluid`宽度100%，  


### 全局样式

手册 用法：

中文文档 -> css全局样式 ->组件 -> js插件