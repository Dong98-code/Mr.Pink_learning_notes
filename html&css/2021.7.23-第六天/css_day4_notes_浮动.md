## 盒子模型-圆角边框 

### 盒子圆角

`border-radius:10px;`

![20210723162724](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210723162724.png)
![20210723162813](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210723162813.png)  


length的长度大于任何一个变成 和弧度就不会再发生变化


### 盒子阴影 

![20210723163139](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210723163139.png)
`box-shadow: h-shadow v-shadow blur spread color inset` 

默认outset 不需要写

影子不占用 盒子的空间

原先盒子没有影子， 鼠标经过添加影子 

### 文字阴影

text-shadow

![20210723164136](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210723164136.png)

# css 浮动 
为甚么？  
排列方式  
常见方式 
为甚么需要清除浮动？方式 

## 1.传统网页布局的传统方式

普通流 浮动 定位 

## 1.2 普通流

按照标签规定好的默认方式排列 
1. 块级元素 单独占一行 
   ![20210723164745](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210723164745.png)
2. 行内元素   
    span a 等

一个网页 里面有 上述3中布局方式 共同构成

## 1.3 为甚么需要浮动 ？

![20210723165040](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210723165040.png)

![20210723165253](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210723165253.png)

行内块中间出现缝隙 

所以需要浮动 

1. 网页元素 块级元素纵向排列 标准流；横向排列 ，浮动 


## 1.4 float

left 左浮
right： 右 

float 创建浮动框， 将其移动到一边， 直到左边缘或右边缘触及包含快或另外一个浮动框的边缘 

## 1.5 浮动特性 

1. 浮动元素脱离标准流 脱标，浮动的盒子不在保留原先的位置


浮动的盒子 浮起来，下面的盒子会占用他原来的位置，跑到浮动盒子的下方 


2. 多个盒子设置浮动， 顶端对齐，一行内显示 
   
一行内显示不完，则换行显示盒子

3. 浮动之后，具有行内块元素的特性  

行内元素 拥有浮动，可以设置行高和列宽 

块级元素没有设置width默认和父亲元素的宽度一样，添加浮动之后则宽度根据内容变化

浮动盒子之间没有 缝隙

## 1.6 浮动元素和标准流父亲搭配使用 

标准流 父盒子
浮动子盒子


## 2. 常见网页布局

### 2.1 

![20210724172354](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210724172354.png)

二.
![20210724172523](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210724172523.png)

三.

![20210724172548](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210724172548.png)


### 2.2浮动布局的注意要点  

1. 先用标准流排列父盒子，再浮动子盒子
2. 浮动需要同时进行，一个孩子浮动，其他兄弟元素跟着浮动 
3. 浮动只会影响之后的标准流，不会影响之后的标准流 


## 3. 清除浮动
### 3.1 为甚么清除浮动?


让子盒子撑开 父盒子

父级盒子很多情况下不方便给高度 但是盒子浮动又不占有位置，最后父子盒子高度为0  下面的标准盒子就会收到影响

![20210724175956](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210724175956.png)

### 3.2 清除浮动的本质

本上 是清除浮动带来的影响

闭合浮动

![20210724180242](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210724180242.png)

闭合浮动 

### 3.3 清除浮动的方法

#### 额外标签法

隔墙法

在浮动元素的末尾 添加一个空标签 `<div class="clear"></div>`

缺点： 添加许多无意义的标签，结构化较差

必须是块级元素

#### 给父亲添加 overflow 

给父亲属性田间overflow  hidden

缺点： 无法显示 溢出的部分
把露出的部分直接切掉


#### ：after伪元素  


![20210724181525](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210724181525.png)


#### 双位元素 清除浮动

```
.clearfix:before,
.clearfic:after {
    content:"";
    display:table;

}
.clearfix {
    *zoom: 1;
}
```