## transform  转换

实现元素的位移 旋转和缩放等

### 移动

`transform ： translate(x,y);`
`transform：translatex(Npx);`

x 为移动位置
特点：

- translate 最大的优点：不影响其他的盒子
- 队行内标签没有效果
- translate 的百分比是相对于自身元素的translate

50% 是相当于盒子的高度或者宽度而言的 
![20210812183336](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210812183336.png)

移动 50px

应用：

子盒子在父盒子 垂直居中 

```
left:50%;
margin-left:-..;
```

现在：
![20210812183800](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210812183800.png)
这样不用去考虑 盒子的大小对垂直居中 水平居中的影响

- translate 对行内元素无效

### 旋转 rotate

2D旋转 让元素在二维平面内顺时针或者逆时针旋转

1. `transform：rotate(度数)`

重点：
- 度数的单位 ；deg
- 角度为正为顺时针，反之逆时针
- 默认的中心点为元素的中线点

案例：
头像旋转：
![20210812185159](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210812185159.png)

案例二：三角形
![20210812191028](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210812191028.png)


改进：
改变旋转的中心点

### transform-origin

`transform： x y;`

重点：
- x y 空格隔开
- 默认为中心点
- x y可以设置为方位名词

![20210812192746](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210812192746.png)

![20210812192801](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210812192801.png)


### 缩放


`transform：scale(x, y);`


- 逗号隔开xy 
- 可以设置缩放远点

- 缩放写的数字不加单位为 相对原来的倍数
- 等比例缩放 写一个参数 
- 不影响其他的 盒子



案例1. 图片缩放

案例2. 按钮缩放
![20210813145334](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813145334.png)

### 2D转换的书写顺序

综合写法

![20210813145415](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813145415.png)

顺序问题  先旋转会改变坐标轴的方向 

先写位移，先放到该到的位置，再做其他操作，**旋转会改变坐标轴的方向**

### 总结

位移 旋转 缩放

![20210813145740](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813145740.png)


## css3-动画

- 定义动画
- 使用动画 

1. 使用 keyframes 定义动画

```
@keyframes 动画名称 {
    0% {

    }
    100% {

    }

}
```

动画序列

![20210813153057](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813153057.png)


使用动画

animation-name: 名称；
animation-duration：持续时间；

百分比为整数；
百分比按照时间划分 

### 动画常见属性

![20210813154619](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813154619.png)

css简写 ：
animation： 名称 持续时间 运动曲线 何时开始 播放次数 是否反向 起始或者结束的状态；

name 和 duration 必须都写 
- 不包含 animation-paly-state

![20210813160132](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813160132.png)


![20210813164313](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813164313.png)


### 速度曲线的细节
![20210813164411](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813164411.png)

steps 分几步完成动画

![20210813174137](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813174137.png)


## 3D转换

### 3维坐标系 

![20210813192846](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813192846.png)

3D位移和3D旋转

透视 3D呈现

### 3D移动

![20210813193041](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813193041.png)

translateZ 再透视 时使用 perspective

单位一般维正值

translate3d(x,y,z)

没有的话 0值，不能省略

### 透视 perspective

![20210813193619](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813193619.png)

透视写在被观察元素的父盒子上

d 为视距，为眼睛到屏幕的距离

z为 物体到屏幕的距离

透视值 为视距


### 3D旋转

元素沿着 x y z轴旋转 

![20210813195209](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813195209.png)


![20210813195709](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813195709.png)


rotateY（45deg）
左手 定则：
大拇指 左手
![20210813195942](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813195942.png)

### 3D呈现

tranform-style

![20210813201144](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813201144.png)

代码写给父盒子 但是 影响的是子盒子

![20210813201909](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813201909.png)

**<font color="orange">这个属性很重要</font>**

### 练习：
1. 两面反转的盒子

![20210813203330](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813203330.png)

![20210813203340](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813203340.png)


2. 3D导航栏

![20210813211736](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813211736.png)


![20210813220139](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210813220139.png)