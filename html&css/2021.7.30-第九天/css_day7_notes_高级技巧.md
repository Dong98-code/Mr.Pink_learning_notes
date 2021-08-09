## 目标

精灵图  字体图标 css三角  常见的css用户界面样式 

## 1.精灵图

### 1. 1什么是精灵图 

![20210730205637](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210730205637.png)


有效的减少服务器接收和发送的次数，提高页面的加载速度 。css精灵计数

css sprites 
**核心技术**
将网页中的一些小的北京图像整合到一张大图中，只需呀一次请求
![20210730210017](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210730210017.png)

### 1.2 精灵图 sprites 的使用 
1. 主要用于背景图

2. 移动背景图片的位置，background-position

3. 网页中的坐标有所不同 

y轴越往下越大 x轴越往右越大 
移动背景图

4. 盒子大小和相对的位置需要测量精确


## 2.字体图标

### 2.1 字体图标的产生

精灵图的缺点 ： 
1.文件大小
2. 缩小失真
3. 更换麻烦

iconfont 

文字的放大缩小 不会失真

展示位图标 实质位文字 

### 2.2 文字图标的优点

轻量级： 占地方小

灵活性： 本质位文字 

兼容性 好

样式结构简单 没有办法 做很复杂的图标 

![20210730233449](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210730233449.png) 

### 2.3 字体图标的使用

1. 字体图标的下载 
2. 引用
3. 追加


第一步：
![20210730233708](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210730233708.png)

fonts文件 放在根目录

![20210730234403](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210730234403.png)

第二步： 
引入

字体声明： 赋值粘贴 style.css

![20210730235246](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210730235246.png)

第三步：
使用 复制 .html中的对应的小方框 

![20210730235335](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210730235335.png)
粘贴到对应的位置就行 
![20210730235353](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210730235353.png)

然后就可以像字体一样设置文字大小颜色等格式

![20210730235441](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210730235441.png)


### 2.4 字体图标追加

重现上传.json文件 

阿里图标的在线使用：


![20210731002833](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731002833.png)

再项目中 使用在线项目 
![20210731002904](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731002904.png)

引用.css文件时，使用该图标 注意添加http://


## 3.三角形制作 

盒子宽高为0 
透明的实线边框 
三角的大小取决于border的宽度 

![20210731155258](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731155258.png)

案例： 京东三角 

![20210731155353](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731155353.png)

![20210731160153](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731160153.png)

需要移动的尺寸大小： -2*border-bottom 

使用定位 摆放三角的位置

## 4.用户界面的样式
改变用户一些操作样式 

1.更改鼠标样式 
2.表单轮廓
3.防止表单拖拽

### 4.1 鼠标样式 cursor

默认： 
`li{cursor:pointer;}`
default： 小手
pointer： 小手
move: 移动
text:文本
not-allowed: 禁止

鼠标放在li上面 变成不同的样式 

### 4.2 表单的轮廓线


表单的轮廓线 
![20210731161233](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731161233.png)
默认的蓝色边框去掉

`input{outline: none;}`

### 4.3文本域 防止拖拽
```
textarea {
    resize:none;
    }
```
不能被拖拽 变大

### 4.4 vertical-align属性应用

#### 4.4.1 文字图片垂直居中
用于设置图片或者表单 行内块元素 和文字垂直对齐 


![20210731161958](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731161958.png)

图片和文字 垂直矩阵

用于设置一个行内元素或者行内块元素的垂直对齐方式

**语法**：
`vertical-align:baseline `

baseline: 元素放在父元素的基线上
top:元素的顶端与行内最高元素的顶端对齐
middle: 放在父亲元素的中部
bottom: 把元素的顶端与行内中最低的元素的顶端对齐

![20210731162344](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731162344.png)

![20210731162836](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731162836.png)

先转化成 行内块元素 ;然后设置 属性为 middle

i一般用来放 文字图标


#### 4.4.2 图片底部空白间隙解决方案

![20210731163520](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731163520.png) 


红圈内的缝隙的出现  

文字和图片 是默认基线对齐

![20210731163717](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731163717.png) 


2. 转化成 block 元素 不存在基线对齐的方式 


## 5. 溢出文字省略号显示 


![20210731163918](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731163918.png)

### 5.1 单行文本溢出

需满足三个条件：
1. 强制文字一行内显示
2. 超出的部分隐藏
3. 文字的省略部分用省略号替代 

![20210731175215](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731175215.png)

nowrap 自动换行

![20210731180123](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731180123.png)

溢出部分隐藏: 
overflow:hidden


text-overflow 用什么替换溢出的部分
![20210731180206](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731180206.png)


### 5.2 多行溢出 显示省略号

![20210731181159](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731181159.png)

后端控制 


## 6 布局技巧

### 6.1 margin 负值应用 

margin-lext :-1px

定位： 鼠标放上去 盒子的边框变成橙色

![20210731185342](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731185342.png)

都有定位时，采用z-index 

li 记得必选有 position-relative


### 6.2 文字围绕浮动元素 

盒子 浮动 不会压住文字


### 6.3 行内块元素的应用

![20210731224655](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731224655.png)

### 6.4 css三角应用

![20210731224743](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731224743.png)


![20210731231628](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731231628.png)


## 7.css初始化

利用css 对浏览器的值初始化 

![20210731232156](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210731232156.png)