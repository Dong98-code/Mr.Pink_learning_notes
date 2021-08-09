# CSS day1
## 1. css简介
css 层叠样式表 Cascading Style Sheets  
设置 文本内容的字体 大小 等  
设置图片的大小   
美化html的样式，布局网页  
### 1.3 css 语法规范  
<font color=red>选择器 和 声明</font>  

选择器{样式} p
给谁更改样式

![20210717205949](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210717205949.png)  
![20210717210232](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210717210232.png)  

h1 给h1修改样式；  
键值对；  
属性和属性之间分号结束  
写在```<head></head>```之间   

## 2.css 基础选择器

### 2.1 选择器的作用

选择器的作用 ： 选对标签

### 2.2 选择分类  
基础选择器： 标签选择器，类选择器， id选择器，通配符选择器 
### 2.3 标签选择器

html标签名作为选择的对象
示例：
```
标签名{
    属性1：值；
}
```
全部的标签的属性都会被更改  

### 2.4 类选择器

选出其中的一个或者几个标签 对他们更改样式  
以$.$开头
```
.类名{
    属性1：值
}
```  
利用clss 属性调用class类    
调用方式：  
![20210719145607](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210719145607.png)  
谁想使用，在标签中直接设置class 的名字为 定义好的类的名字 

不能使用标签的名字作为类的属性 

**多类名**  
一个class有多个名字
1. 多类名的使用方式  
   ```<div class="red font2o"></div>``` 

    空格隔开
    定义不同的类，在调用是，多类名使用  
    减少代码量


### 2.5 id选择器  

id属性设置id选择器，id选择器以 # 定义  

```
#id名字{
    属性1：属性值；
}
```
调用：
```
id = 名字  
```

区别：
样式#定义，结构id调用，只能使用一次， 别人切勿使用  一次性的  
和class选择器的区别在于，id选择器只能使用一次，唯一性元素的使用  

### 2.6 通配符选择器  
更改所有标签的格式

$*$ 定义 

### 2.7 基础选择器总结  
![20210719152658](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210719152658.png)   

## 3. css字体属性 
### 3.1 字体系列

```
p{
    font-family:**;
}
```  
多个字体 用 英文输入法 , 隔开  

### 3.2 字体大小  

```
p{
    font-size:**;
}
```  

谷歌浏览器 默认 16px  
标题标签 需要单独设置  

### 3.3 字体加粗 

font-weight: normal, bold ,number

### 3.4 文字样式  

<code>
font-style:
<em>nihao </em>
</code>    


### 3.5 复合属性： 
<pre>
body{  
    font:font-style font-weight font-size font-family;   
}
</pre>
注意顺序 ，不能错乱顺序  
必须保留 font-size 和 font-family  
### 3.6 属性总结 

![20210719161156](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210719161156.png)  
字体size 的单位：px   

## 4. 文本属性 

文本外观 ：颜色， 对齐文本，装饰文本，文本缩进，行间距  

### 4.1 文本颜色:

<pre> {
color: **;
}</pre>  
16进制；   # FF0000  
rgb:
<pre>
    color:(,,);
</pre>  

### 4.2 文本对齐 
text-align :水平对齐方式
left,right,center  
盒子中的文字水平对齐  

### 4.3  装饰文本 

text-decoration:underline

none;  
overline;  
<u>underline</u>  
~~删除线~~ 


### 4.4 文本缩进  
text-indent
<pre>
div{
    text-indent:20px;
}
</pre>  

文本首行缩进 20px缩进值

em: 相对单位，相对于当前文本 font-size的相对大小   

### 4.5 行间距 
line-height:
<pre?>
p{
    line-height:20px;
}
</pre>

![20210719165159](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210719165159.png) 
改变上下两个间距的距离 

### 4.6 总结
![20210719165741](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210719165741.png)  


## 5. css的引入方式 
行内样式表，嵌入式
### 5.1 行内样式表
在 元素标签内部修改样式

### 5.2 内部样式表  
在html内部 style 定义样式 一般放在```<head>```标签之前 
html并没有分离  

### 5.3 外部样式表  
适合样式比较多的代码 

1.新建.css文件  
只有样式 没有标签  
2. 引入.css文件
在html页面中，使用 ```<link>```标签，引入文件
```
<link rel="stylesheet" href="css文件路径">
```
### 5.4 总结

![20210719171243](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210719171243.png)