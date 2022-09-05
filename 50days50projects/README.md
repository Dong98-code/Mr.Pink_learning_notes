# 50天50个项目

项目来源：
[50Days50Projects](https://github.com/ozantekin/50Days50Projects)

重温js html 和css

## day1: expanding-cards

![20220903161111](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220903161111.png)

### 效果： 
点击小的照片，展开为大的照片
[live-demo](https://50projects50days.com/projects/expanding-cards/)

### 实现要点：
- flex布局：使用 flex布局设置子盒子的大小和居中
- .active属性的切换： 给每一个盒子都绑定一个点击事件， 是得每次都先移除所有的盒子身上的 ,active，然后再往点击的盒子身上添加对应的类名
  
```js
function removeActiveClassName() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClassName();
        panel.classList.add('active')
    })
})
```
使用 `element.classList.add`和`element.classList.remove`添加和移除类名；

- transition属性的使用：

![20220903165834](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220903165834.png)

设置的值为： 属性名 - duration - timing function -delay

属性名 长设置为 all表明为全部的属性变化；

## day2: progress-steps

[live demo](https://50projects50days.com/projects/progress-steps/)

![20220904095606](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220904095606.png)

点击`pre`和`next`按钮，对应的steps的颜色发生变化， 动画效果；
当最后的步数实现的时候 Next的背景色变成灰色；

### 实现
- html

1. 设置一个长条形的盒子`progress`来显示进度条，
通过控制其长度，来实现进度条的效果；
```html
<div class="progress" id="progress"></div>
```

- css的部分属性值：

1. `max-width`:
给盒子设置的最大宽度值。
![20220904101959](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220904101959.png)

2. 自定义属性 和 var

在 `：root`使用一个自定义的属性值

然后使用`var`函数函数使用它；
`var()`可有传入两个值，第一个是要替换的值，第二个值为在第一个值失效的时候使用的备选值
```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}

```

当第一个值未定义的时候 回退值生效

```css
/* 后备值 */

/* 在父元素样式中定义一个值 */
.component {
  --text-color: #080; /* header-color 并没有被设定 */
}

/* 在 component 的样式中使用它： */
.component .text {
  color: var(--text-color, black); /* 此处 color 正常取值 --text-color */
}
.component .header {
  color: var(--header-color, blue); /* 此处 color 被回退到 blue */
}

```

3. 伪元素`::`使用
   
![20220904102938](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220904102938.png)
默认为行内元素
注意： `content`属性值 必选

- js部分

使用一个`update()`函数，来控制样式的更新，具体的讲：
在点击`prev`和`next`按钮来控制当前激活的圆圈的个数，和更新update()函数；
```js
function update() {
    // 控制active的添加，实现颜色的变换
    circles.forEach((circle, idx) => {
        if (idx < curActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    // 通过设置 progress的长度来实现效果
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";
    // 控制按钮 的显示
    // 控制disabled属性的变化 来控制按钮的点击和禁止
    if(curActive === 1) {
        prev.disabled = true
    } else if(curActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

```

## day3:rotating-nav-animation 

旋转页面
![20220904114301](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220904114301.png)
点击左上方的logo,页面旋转一定角度， 然后露出菜单列表：
![20220904114339](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220904114339.png)

点击❌ 然后复原

[live demo](https://50projects50days.com/projects/rotating-navigation-animation/)

### 实现

- js

这部分的JS代码比较简答，给对应的dom添加事件监听， 添加和删除对应的类名，实现样式的切换，难点在于css样式的书写

- html

主要的dom包括三部分
1. 左上角的圆圈 点击之后 会发生旋转
2. container 部分 点击之后旋转20度
3. 左下角的nav部分， 点击旋转之后 使用transform 移入到页面中去

使用： transition + transform 实现动画

- css

当点击 菜单栏之后， 添加`.show-nav`的类名， `transform`属性发生变化， 触发了设置的`transition`设置的过度动画效果，实现 动画


## day4: hidden-search

效果：
点击搜索标志，弹出搜索框
再点击隐藏样式
[live demo](https://50projects50days.com/projects/hidden-search-widget/)
![20220904142555](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220904142555.png)
![20220904142548](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220904142548.png)

### 实现

- html

结构很简单就是一个搜索`div`里面有两个盒子：一个`input`搜索框， 一个button搜索按钮

初始状态： 使用定位`position:absolute`使得搜索按钮浮动起来，置于 input框的上方，父盒子 `search`使用相对定位，子绝父相；

点击按钮之后：1. 改变input盒子的宽度
2. `btn`相对于父盒子往右移动相应的距离，这样 两者就都显示出来了

- css

通过添加 `.active`，结合`transition`实现动画效果；

- js
重点再`toggle()`使用
![20220904145627](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220904145627.png)
```js
let search = document.querySelector('.search')
let input = document.querySelector('.input')
let btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    // toggle如果标记存在则 删除给定的标记，返回fasle
    //不存在 则添加 对应的 标记， 返回true
    search.classList.toggle('active')
    input.focus() // input获取焦点
})
```

## day5: blurry-loading

模糊加载

模糊的遮罩层逐渐消失
显示加载的百分比数字；

![20220904150301](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220904150301.png)

[live-demo](https://50projects50days.com/projects/blurry-loading/)

### 实现

主要使用css里面： `filter`实现模糊的遮罩层的变化 


![20220904154515](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220904154515.png)

设置一个定时器，没30ms执行一次，然后使用一个映射函数，计算出来透明度和模糊值

```js

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
```

## day6: scroll animation 

效果： 滚动滑轮，页面中的盒子分别从左右移入或者移出页面

从上往下 盒子移除， 从下往上， 盒子移入页面；

### 实现

[live demo](https://50projects50days.com/projects/scroll-animation/)
监控盒子到页面边缘的距离 和 页面可视窗口的高度

当 到页面的 距离大于 设定的可视窗口的高度之后， 盒子从页面外移入进来：

```js
checkBoxes(); // 首先执行一次

function checkBoxes() {
    const triggerBottom = window.innerHeight * 4 / 5; // innerHeight的4/5
    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }
    })
}
```

两个关键的高度：
`innerHeight`:
![20220905094536](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220905094536.png)


![20220905094630](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220905094630.png)

盒子到边缘的距离：
`element.getBoundingClientRect()`

返回一个对象，包含整个元素的最小矩形，包含 left top right bottom x y  width height等属性；

相当于视口的左上角计算的

![20220905094915](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220905094915.png)