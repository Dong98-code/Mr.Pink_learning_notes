# iconfont

类选择的属性值 10

![20220127223520](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220127223520.png)

## 购物车案例

引入iconfont css样式表

![20220127224041](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220127224041.png)

盒子的css代码
![20220127224310](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220127224310.png)

几个内容 几个小标签； span和li
![20220127224856](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220127224856.png)

## 字体图标没有标签？
自定义iconfont 格式图标
1. svg格式矢量图；
2. 上传iconfont 格式


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


## 渐变

![20220128214517](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220128214517.png)