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
