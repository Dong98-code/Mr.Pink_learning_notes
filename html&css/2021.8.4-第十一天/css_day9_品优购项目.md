# 品优购

[代码规范](file:///D:\日常学习\前端学习\html&css\2021.8.4-第十一天\素材\品优购代码规范.md)

## 项目规划
1.创建文件夹

![20210804173350](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804173350.png)
images 背景 图片 

upload 放需要经常更换的图片

2. 模块化 开发
common.css  公共的css样式


### 网站的favicon图标 

缩略的网页标志

#### 制作favicon图标

切图 
转换成.ico格式

#### 引入 favicon图标

放在head 标签之间 
`<link rel="shortcut icon" href="/favicon.ico" />`

![20210804175233](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804175233.png)


### TDK三大标签 SEO优化

seo 利用搜索引擎规则 提高网站在有关搜索引擎内的自然排名的方式

对网站进行优化 从而帮助网站获得免费的流量 提升网站的排名 


title description keywords

1.title 网站标题


网站名-网站介绍
![20210804194431](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804194431.png)

   ![20210804193918](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804193918.png)

2. description ：
3. keywords ;

`<meta name="keywords" content="网上购物，网上商城，家电">`

## 快捷导航 shortcut结构搭建

![20210804195054](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804195054.png)

快捷导航栏 
![20210804195352](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804195352.png)

版心 左右 盒子

1. shortcut 行高，小盒子会继承
2. section 大的区块

31px #f1f1f1

左右两个浮动 

公共样式 common.css

单独的左浮动和右浮动的盒子 可以直接调用 .fl ：float left

### 导航栏左侧

![20210804200141](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804200141.png)

ul > li*2

登录注册两个 链接

子孩子会继承父亲的行高 

&nbsp 空格

颜色相同的 直接调用红色 

### 导航栏右侧

![20210804201157](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804201157.png)

字数不同 
li 不需要高度

竖线用小li做
1px 12px 

:nth-of-type(even)


## header 头部构建
![20210804222616](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804222616.png)

header 必须有高度

高度105px

### logo制作

logo seo优化

1.logo 里面放一个h1标签 目的是提权 

2.h1里面加一个链接返回首页

3.放网站名字
![20210804223509](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804223509.png)

给链接一个title属性 

### 搜索模块 
![20210804225546](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804225546.png)

search 大盒子加边框

w 538px 

![20210804233056](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210804233056.png)

### 热词模块制作

### count模块 

子绝父绝对

![20210805144028](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210805144028.png)


## nav 模块制作
![20210805144853](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210805144853.png)

下拉 dropdown
navitems 下拉的内容


## 底部模块制作

底部部分 为公共部分



![20210805195815](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210805195815.png)


## main 布局制作

![20210806110559](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210806110559.png)

margin_left:220px

w：980px

浮动 父盒子给高度 
如果父盒子没有高度 ，子盒子浮动 则会不占有位置，那么父盒子的高度变成0

main 左盒子 focus 焦点图模块
右盒子 新闻快报


## 推荐模块制作
![20210807164114](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210807164114.png)
recommend 

设置高度  宽度由版心设置
163px 
margin-top:12px;

hd  bd

hd  宽度 205px，背景颜色


## 电梯导航和楼层区设置

楼层区不设值高度，内容多少高度自动多少
### 家用电器制作

![20210807195606](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210807195606.png)

box_hd
box_bd 高度不写死


家电头部区域

30px h
2px border

## 列表页制作

结构样式 复制

创建新的list.html
list.css

### 列表页主体

大盒子 container

sk_hd :图片
sk_bd ： ul li 


## 注册页面制作

头部 主体 尾部

register.html 注册

1. 不需要seo优化 怎么简单怎么写

![20210809154158](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210809154158.png)

register_area
register_form 


![20210809175244](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210809175244.png)

居中对齐



## 详情页面制作

### 1). 详情页 detail.html  常用单词

| 名称             | 说明                                  |
| ---------------- | ------------------------------------- |
| 主体             | de_container                          |
| 面包屑导航       | crumb_wrap                            |
| 产品介绍         | product_intro   （ introduction介绍） |
| 预览包           | preview_wrap（左侧部分）              |
| 预览缩略图       | preview_img                           |
| 预览列表         | preview_list                          |
| 左按钮           | arrow_prev                            |
| 右按钮           | arrow_next                            |
| 小图列表         | preview_items                         |
| 产品详细信息区域 | itemInfo_wrap （右侧部分）            |
| 头部名称         | sku_name       skull  头骨            |
| 新闻             | news                                  |
| 摘要             | summary                               |
| 评价             | remark                                |
| 价格摘要         | summary_price                         |
| 配送至           | summary_stock                         |
| 支持             | summary_support                       |
| 选择             | choose                                |
| 选择按钮组       | choose_btns                           |
| 选择数量         | choose_amount                         |
| 减去             | reduce                                |
| 加入购物车       | addshopcar                            |
| 产品细节         | product_detail      （   detail描述） |
| 左侧边           | aside                                 |
| 详细描述         | detail                                |


### 2) 面包屑导航

crumb_wrap 
![20210810163904](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210810163904.png)

给经过的路线都撒上面包屑，用于回到上一级的页面

### 3) 产品介绍模块

![20210810172940](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20210810172940.png)

大盒子和右侧的盒子 不给高度

左边手机 的高度是固定的，可以给高度

product_intro

#### preview 制作

preview_list
margin-top

#### preview_list 制作

中间 给高宽 ，两边箭头给定位

