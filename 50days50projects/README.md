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


## day7: split_landing_page

效果： 当鼠标位于页面左侧，左侧的盒子变大；
鼠标位于右侧的盒子，右侧的盒子变大；

![20220906100506](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220906100506.png)
[live demo](https://50projects50days.com/projects/split-landing-page/)

### 实现

监听鼠标事件`mouseleave`和`mouseenter`
改变对应的盒子的大小；

- css:

两个盒子都相对于父盒子 绝对定位， 脱离文档流；

当检测到 鼠标移入事件之后，改变 盒子的宽度`width`

媒体查询：

最大宽度为：800px;改变按钮和文字的大小

## day10 jock

### 效果

点击按钮切换 文字的内容

[live demo](https://50projects50days.com/projects/dad-jokes/)

![20220915095415](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220915095415.png)


### 实现

- css

`letter-spacing`:设置文本字符的间距
可选在的值为：

`normal`:![20220915095541](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220915095541.png)

```css
/* <length> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;
```

指定文字间的间距以替代默认间距。可以是负值，但有可能会出现 implementation 限制。用户代理不会在此基础上进一步增加或缩减间距来对齐文字。

- js

使用fetch 发送网络请求；
使用 async /await 等待返回之后的数据， 然后将其 返回的内容变成对应的html;
```js

// 绑定事件

btn.addEventListener('click', generateJoke);

generateJoke(); // 默认加载的时候执行一次

async function generateJoke() {
    // 异步的该函数，发送网络请求
    // 请求的头部
    const config = {
        headers: {
            Accept:'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    let data = await res.json();
    jock.innerHTML = data.joke
}
```

> 429状态码 短时间内 连续的请求 触发了429网络错误；![20220915101124](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220915101124.png)


## day11; keyboard 显示

效果： 
按下键盘的任意事件， 然后页面显示 按下按键的 key code 和keyCode值
![20220915141036](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220915141036.png)

点击 按键`h` 显示对应的key keyCode和code
![20220915141109](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220915141109.png)

### 实现
- js 监听window 监听键盘的 `keyDoWN`获取事件 event的对应的值

```js
const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>
<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})

```
![20220915140946](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220915140946.png)


## day13： random choice picker

在输入框内输入 选择以逗号隔开， 之后选择在页面之下显示，监控enter键， 以跑马灯 的形式 选择最后的选项；



## day14 animated navigation

点击按钮 动画显示菜单栏

[live demo](https://50projects50days.com/projects/animated-navigation/#)


### 实现

css: `classList.toggle`来实现 样式的切换；
`opacity：0`仍然占据空间位置。但是此时设置父盒子宽度=0则在页面中不显示；


## day15 incrementing-counter

刷新页面，对应的数字 变化的显示在页面上

[live demo](https://50projects50days.com/projects/incrementing-counter/)

![20220920103432](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220920103432.png)

### 实现

- css: 使用媒体查询，当屏幕宽度小于 一定值的时候，改变`flex-directions` colmun;
![20220920110134](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220920110134.png)
- js

`innerText`和`innerHtml`的区别：

![20220920110310](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220920110310.png)

`Element.getAttribute()`:得到 标签上的属性值， 返回的是string格式的值；

 获取属性值，和目标值做对比；如果小于目标值， 使用计时器再调用该更新函数；

 ```js
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target"); // 字符串 -》 number
    const c = +counter.innerText; // 0
    const delta = target / 200;
    if (c < target) {
      // 现在还小于目标
      counter.innerText = `${Math.ceil(c + delta)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});


 ```

 ## DAY16 drink water

效果： 点击对应的被子中的水， 大杯子重点额总体的水变化， 再点击一次减少已被水的量

![20220921090303](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220921090303.png)

![20220921090317](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220921090317.png)

[live demo](https://50projects50days.com/projects/drink-water/)

### 实现

主要分为两部分： 小的杯子的变化和大的杯子中百分比和水量的变化；

1. 点击事件之后，给小杯子添加 类名`full`改变北京颜色， 然后使用`transition`实现动画效果；
2. 根据点击 `idx`,判断那些需要添加类名： 注意： `nextElementSibling`

![20220921101057](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220921101057.png) 

和其属于同一父元素 的后一个 节点元素；
3. 通过设置 `visibility`来实现对应的部分隐藏和展示；
```js
// 获取dom

const smallCups = document.querySelectorAll(".cup-small");

const remained = document.getElementById("remained");

const percentage = document.getElementById("percentage");

const liters = document.getElementById("liters");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
  else if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  // 小于等于他的 都添加 类名full
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  // 计算现在的被子的长度
  let length = document.querySelectorAll(".cup-small.full").length;
  let total = smallCups.length;
  if (length === 0) {
    // 空
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(length / total) * 330}px`;
    percentage.innerText = `${(length / total) * 100}%`;
  }

  if (length === total) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * length) / 1000}L`;
  }
}


```

## day18 slide

效果： 1. 简单的轮播效果，点击左右按钮实现图片的切换；
      2. 图片的中心和大的背景 图片一致吗但是 中心盒子显示部分 背景图片， 底层背景显示另外的图片部分，底层上加了一个遮罩层
      3. 轮播效果的实现是：通过给 slide 设置透明度， 要显示的设置为1，不透明的设置为0；

### 实现

```js
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;
rightBtn.addEventListener("click", () => {
  activeSlide += 1;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide -= 1;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});

setBgToBody();
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[activeSlide].classList.add("active");
}

```