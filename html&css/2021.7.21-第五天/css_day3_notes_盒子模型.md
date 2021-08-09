# 三大特性
## 1.1 层叠性 

给相同的选择器 相同的样式 

就近原则

![20210721201218](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210721201218.png) 

以最后一次为准 
后写的代码 覆盖之前的代码  


## 1.2 继承性 

父子关系的标签 ，子类标签会继承 父类i标签的样式


例如 ： 给 body 标签设置 样式，里面的标签都会有相同的样式  

注意：
继承的维部分属性 ： line- font- text-等文字类相关的属性 

龙生龙，凤生凤，老鼠的儿子会打洞  


**行高的继承性**：

<pre>
body {
    font:12px/1.5 "字体"；
}
</pre>  

当前元素的 1.5倍  


## 1.3 优先级  

选择器相同，层叠性 

选择器不同，优先级 
![20210721203519](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210721203519.png)  

权重的注意点：

继承的权重 为 0
优先执行 被选中标签的样式  

a 链接 有默认的样式  

通配符和继承权重为0， 标签选择器为1， 类选择器为10， ID选择为 100

### 权重叠加 

复合选择器 权重叠加

例如：
![20210721205157](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210721205157.png) 

最后显示的为粉色

权重有叠加，但是并不会进位
10个 元素选择器 权重值仍让小于一个类选择器的权重 

![20210721205451](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210721205451.png) 



# *<font color=red>盒子模型</font> 

网页布局 定位 盒子模型 浮动和定位  

## 1.1 看透网页布局的本质 

网页由许许多多的盒子组成 

div 盒子 ，将元素装到盒子里面去 

1. 准备好 网页元素 box
2.  css 设置好样式 ，摆放到相应的位置
3.  往盒子内装内容  


**核心 ： 利用css 摆放盒子**

## 1.2 box 模型的组成部分 

box model

border 边框   
content 内容  
padding 内边距  
margin 外边距   
![20210721211001](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210721211001.png) 
![20210721211026](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210721211026.png)  

## 1.3 border 边框  

颜色；边框的粗细；虚实线；

**属性**  

border-width  
border-style  
border-color 

边框简写 

<pre>
border:5px solid pink;
</pre>


## 1.4 表格的细线边框 

border-collapse : 相邻边框合并   


## 1.5 边框影响盒子的实际大小 

边框的尺寸 会加到原来盒子的尺寸上 

## 1.6 内边距 

边框与内容之间的边距 

内边距复合写法：
![20210722105650](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210722105650.png)
<pre>
padding:5px 10px;</pre>

一个值，上下左右都是 5px;   
两个值： 上下 5px, 

三个值： 上 左右 下 的内边距

四个值： 上 右 下 左 的内边距 


## 1.7 内边距 影响盒子的实际大小  


会撑大盒子 内边距也会撑大盒子  

盒子的border 跨度和padding 大小都会影响 盒子的实际大小 

左右padding值撑开 
上下居中 ： height = inline-height

孩子 没有指定width时， 继承父亲的宽度，不会撑大盒子的大小 

## 1.8 外边距  

margin  

margin de 简写方式 和padding相同 

水平居中：   
指定 宽度 width:  
**块级元素水平居中**  

左右外边距 设置为： auto
<pre>
margin: auto
</pre>

**行内元素 行内块元素水平居中**

text-align:center

**外边距合并**  
嵌套元素 垂直外边距 塌陷问题
<pre>
overflow:hidden </pre> 


## 1.9 清除内外边距 

网页元素的自带的内外边距  

css第一行代码：
清除自带的内外边距：
<pre>
* {margin:0;
  border:0;}
  </pre>  


## 总结：

什么时候用什么标签？
标签具有语义化 例如产品标题 用h 标签 

段落 采用 p标签 等等

2. 为什么用那么多类名 ？
   类名的习惯，每一个盒子都有一个名字，后期维护比较方便 

3. 什么时候用margin？ 什么时候padding?
   
   上下距离 用margin比较合适  

先模仿 后多练习

所有的li 都去掉小圆点  
list-style : none