# 50天50个项目

项目来源：
[50Days50Projects](https://github.com/ozantekin/50Days50Projects)

重温js html 和css

## day1: expanding-cards

![20220903161111](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220903161111.png)

效果： 点击小的照片，展开为大的照片
[live-demo](https://50projects50days.com/projects/expanding-cards/)

实现要点：
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
