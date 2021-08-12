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