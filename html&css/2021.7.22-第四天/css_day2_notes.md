## css day2
emmet 语法；css复合选择器；css元素显示模式；背景；三大特性；css的注释  

### 1. emmet语法

生成多个语法：  
``` div*4 tab```  
父子关系：
```
div > span
```
兄弟关系：
```
div+p
```
类名：

```
div.nav, span.gray
```
直接生成 带有类名的标签 

生成有顺序的类名 & 自增符号

```
div{}
```
默认显示文字 

#### 1.3 快速格式化代码
自动对齐：
<pre>shift+alt+f</pre>  
自动保存并格式化：

<pre>
editor.formatOnType:True
editor.formatOnSave:True
</pre>  

### 2. css复合选择器

基础选择器的组合 ，选择元素/标签
后代，子，并集，伪类选择器 

#### 2.1 后代选择器  

<pre>
元素1 元素2{}
</pre>

空格隔开 ，元素1父亲，元素2 孩子
更改孩子的样式

可以堆叠：
<pre>
ol li a
</pre>
ol 标签中li标签中a标签的格式的内容   

#### 2.2 子选择器  

必须选择 亲儿子  
<pre>
class > class2

.nav>a
</pre>
选择类 nav中的a 标签 而不是其他别的a标签  

#### 2.3 并集选择器
并集选择器选择多组标签  

<pre>
元素1,元素2{样式声明}
示例：
div,
p{ 
    样式声明
}
</pre>  
可以多个元素 一起并列  
并集选择器 习惯竖着写  
最后一个选择器不需要逗号   
集体声明   

#### 2.4 伪类选择器  
鼠标放到文字上面， 文字的颜色发生变化  
用 $:$选择， 例如  ：hover   
链接伪类，结构伪类

**链接伪类选择器**  
<pre>
a: link  选择未被访问过的链接   
a: visited 选择以访问过的链接    
a: hover 算则指针位于其上的链接   
a: active 选择活动链接，鼠标按下未弹起 
</pre>   

注意事项：  
1. 按照顺序声明 ：LVHA，顺序一般不颠倒  
   love hate  
2. 给链接单独指定标签样式  
   ![20210720112941](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210720112941.png) 


**：focus 伪类选择器**  

选取 光标所在位置的标签 

<pre>
input:focus {样式声明}

例如：    
input：focus {
    background-color:yellow;
}
</pre> 

![20210720113549](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210720113549.png)   


### 3. 元素显示模式  
#### 3.1 元素显示模式是什么？

种类不同，特点不同，显示模式不同  
元素以什么样 的方式 显示 例如: ```<div>```标签 自占一行  
html 一般分为行内元素和块元素 

#### 3.2 块元素  

div p h li等元素

1. 独占一行
2. 可以设置 高宽  
3. 宽度的默认值 为 父级宽度  
4. 容器或者盒子内可以放行内和块级元素  

注意： 
文字类元素不能块级元素 例如 p h 标签   

#### 3.3 行内元素  

```
<a> <span>  <em> <i>等
```
内联元素 

1. 相邻元素放在一行，一行可以放多个元素  
2. 高宽设置无效  
3. 行内元素 只能放 文本或者其他行内元素
4. 默认宽度为本身的宽度  
注意：  
链接直接不能再放链接  
```<a>```可以再放行内元素  

#### 3.4 行内块元素  

同时具有 行元素和块元素的特点 
img input td等

一行之内可以放几个该类元素  

总结：  
 ![20210720140305](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210720140305.png)    

 #### 3.5 元素显示转换  
 增加链接 ```<a>```的触发范围  

 ```display:block```

 ```display:inline```

 ```dispaly:inline-block```


转换为块元素：宽度和高度可以设置   

#### 3.7 单行文字 垂直居中
行高 = 盒子的高度    


### 4. 背景 

背景颜色 背景图片 背景平铺 背景图片位置 背景  

#### 4.1  颜色

background-color: 背景颜色
transparent 透明   
 
 
#### 4.2 背景图片  

background-image : 
便于控制位置   
```background-image: none/ url```

url（） 不要忘记  


#### 4.3 背景平铺

```background-repeat:```

repeat   
no-repeat  
repeat-x  
repeat-y  

沿 x y轴平铺

#### 4.4 背景位置  

```background-position: x y ;```

x y 可以为方位词 和精确单位 

**一. 方位词：**
left top  
两者顺序 并没有关系    
参数空缺，默认为center

超大图片 一般居中 显示主要内容 

**二. 精确位置：**

一个必须是 x坐标，第二个为y坐标  

只有一个参数，那么 为x坐标，y默认居中 


**三. 混合单位**

![20210720153930](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210720153930.png)

默认第一个值为 x值 ，第二个为y轴方向的位置 

#### 4.5  背景固定  

background-attachment: 固定 

默认为 scroll 滚动

fixed 固定  

空格隔开 

颜色 地址 是否平铺 背景图片是否固定  


#### 4.6 背景色半透明

```
background:rgba(0,0,0,0.3)  
```
最后一个参数设置 透明度  

只是让盒子的背景色 半透明 对盒子内的内容没有影响


#### 总结

![20210720155506](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210720155506.png)





