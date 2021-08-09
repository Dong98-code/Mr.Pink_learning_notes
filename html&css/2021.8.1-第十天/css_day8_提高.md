# 新特性
## html5新特性
### 1. 新增的语义化标签 

`<header>`头部标签
`nav`导航标签
`article`内容标签
`section`定义文档某个区域
`aside`侧边栏标签
`footer`尾部标签

![20210801143854](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801143854.png)

针对搜索引擎的优化

新增的标签 IE9转换成 block元素

### 2. 新增多媒体标签

音频 `<audio>`
视频 `<video>`

#### 2.1 视频
![20210801144724](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801144724.png)
mp4 一般都支持

语法：
`<video src="文件地址" controls="controls"></video>`

考虑兼容性
![20210801145330](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801145330.png)

video属性：
`autoplay: autoplay` 视频就绪自动放 
当自动播放的功能被禁用的时候 可以设置 静音播放解除限制

`muted="muted"`

`controls` : 显示播放控件; 一般情况下去掉 用js做

`loop`： 循环播放 

`preload`: 预先加载

`poster`: 加载等待的页面

#### 2.2 音频标签

![20210801150527](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801150527.png)

统一 支持 mp3格式

![20210801150554](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801150554.png)

语法类似于 video 
标签也和视频的类似

![20210801151453](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801151453.png)

### 3. input 表单

![20210801182710](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801182710.png)


添加 form 表单域

![20210801183541](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801183541.png)

### 4 表单属性 
必须包含在表单域

`required："required"` 必须书写 不能为空


`placeholder`: 提示文本

：：伪元素设置样式
`input::placeholder`

`autofocus`:自动获得焦点

`autocomplete`显示之前键入的值

`multiple`多选文件

![20210801184208](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801184208.png)
![20210801184353](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801184353.png)


##  css3的新特性
属性选择器 结构伪类选择器 伪元素选择器 
### 1. 属性选择器 

使用属性选择器 可以不使用类选择器或者id选择器

![20210801213630](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801213630.png)

具有某个属性，属性=某一个值

![20210801213907](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801213907.png)


属性选择器选择属性值开头的某些元素

匹配具有att属性且值以val开头的E元素
`E[att^="val"]`

匹配具有att属性且值以val结尾的E元素
`E[att$="val"]`

类选择器 属性选择器 伪类选择器 权重都为10

### 2.结构伪类选择器

根据文档结构选择

`：`

根据父亲选择 子元素
![20210801220310](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801220310.png)

![20210801220554](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801220554.png)
中间书写需要有空格

选择第n个孩子啊`ul li:nth-child(n)` 第n个孩子

#### 2.2 nth选择器

nth-child(n)
n数字
奇数 偶数

隔行变色：
![20210801221256](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801221256.png)

![20210801221309](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801221309.png)

![20210801221723](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210801221723.png)


![20210802173050](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210802173050.png)

nth-child  会把所有得孩子都排序

首先看nth-child（1） 选出第一个

之后再去看 所选得类型 

![20210802173423](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210802173423.png)

nth-of-type(n)
执行时 会把指定元素的孩子排序 
所以 此时 先 选出div ,然后将div的孩子 指定序列 

![20210802173648](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210802173648.png)

### 3.伪元素选择器

在 盒子内 插入Html标签

现在用css创建一个模拟标签

![20210802174153](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210802174153.png)
使用伪元素 `：：`
不用再添加一个遮罩层
![20210802174257](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210802174257.png)

1. 用  befor 和after 创建一个元素 属于行内元素 

2. 但是 该元素再文档中找不到 所成为伪元素

3. 必须拥有content 属性

4. 伪元素选择器和标签权重选择器一样 权重1

5. before为在父元素内容的前面创建元素 after为在父元素内容的后面插入元素

#### 3.2 伪元素选择器的使用

：：before 

放在父盒子里面的前面 
都是父盒子的孩子

**conten 属性必须有**

#### 3.3 使用场景-伪元素字体图标

![20210802183017](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210802183017.png)

阿里 的图标 使用时 

使用在线图标时，第一url注意加上http:


案例：
![20210802212217](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210802212217.png)


#### 3.4 使用场景-清除浮动


1。 额外标签法 

在最后一个浮动的后面添加一个 盒子

block 块级元素

 伪元素清除浮动

![20210802212914](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210802212914.png)
在父元素 的后面添加一个伪元素盒子 

```
<!-- 生成一个伪元素盒子 -->
.clearfix::after 
<!-- 必须要有内容 content -->
content:"";
<!-- 需要的是一个块级的盒子 -->
display：block;
height=0
visibility：hidden;
clear:both;

```

闭合浮动 

前后 双伪元素

```
display:table;
<!-- 转化成块级元素，一行显示 -->
```


### 4.border-box盒子模型

css3盒子模型 解决padding 和border会导致盒子变大的问题

![20210802213558](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210802213558.png)

`box-sizing:content-box `

和之前一样

`box-sizing:border-box`

![20210802213853](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210802213853.png)

padding 和border值不会改变盒子整体的大小  


### 5.css3 filter属性

filter 将模糊或者颜色等图形效果应用于元素
语法：

`filter:函数();`

blur函数 模糊函数 
![20210802214736](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210802214736.png)

增大blur的值 图像变得越来越模糊

：hover{} 
设置blur值为0  鼠标经过就不模糊了

### 6. calc函数

`width:calc(100%-20px)`

例如 父盒子 总比子盒子小30px


### 7.过度


制作动画 

从一个状态到另一个状态的 

`transition：`

属性： 变化哪一个css属性

花费时间

运动曲线

何时开始 :单位/s


谁做过渡给谁加


时间单位 s 必须加

多个属性添加用逗号隔开 

全部变化用all

