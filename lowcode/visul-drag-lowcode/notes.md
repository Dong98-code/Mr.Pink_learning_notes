# lowcode
项目参考:[woai3c/visual-drag-demo](https://github.com/woai3c/visual-drag-demo)
与其说是lowcode 不如说是一个可拖曳的组件库
## 主要功能点
这些 都和原来的项目一样
1. 编辑器
1. 自定义组件（文本、图片、矩形、圆形、直线、星形、三角形、按钮、表格、组合）
1. 接口请求（通过接口请求组件数据）
1. 组件联动
1. 拖拽
1. 删除组件、调整图层层级
1. 放大缩小
1. 撤消、重做
1. 组件属性设置
1. 吸附
1. 预览、保存代码
1. 绑定事件
1. 绑定动画
1. 拖拽旋转
1. 复制粘贴剪切
1. 多个组件的组合和拆分
1. 锁定组件
1. 网格线 
## 开发

- 安装
```
npm i
```

- 运行

```
npm run dev
```

- 打包

```
npm run build
```

## 项目笔记

### 1. 文件结构
![20220810001630](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220810001630.png)

```
|-- public
    |-- favicon.ico
    |-- index.html
|-- src
    |-- assets 静态文件， iconfont logo
    |-- components 组件文件
    |-- custom-component 自定义的组件文件，例如button组件
    |-- router 路由管理
        |-- index.js
    |-- store
    |-- style 处理样式的一些文件
    |-- utils 工具处理函数 文件
    |-- views
    |-- main.js 入口函数
|
```
### 2. 静态页面

![20220810001247](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220810001247.png)

主要是顶部的菜单工具栏，左侧的物料堆/组件， 右侧的属性设置及展示部分

### 2. Tabbar 组件静态展示 
主要使用 el-button
```js
<template>
    <div>
        <div class="toolbar">
            <!-- 静态页面 -->
            <el-button type="">撤销</el-button>
            <el-button type="">重做</el-button>
            <label class="insert">插入图片</label>
            <el-button style="margin-left:10px">预览</el-button>
            <el-button>保存</el-button>
            <el-button>清空画布</el-button>
            <!-- 画布大小设置 -->
            <div class="canvas-config">
                <span>画布大小</span>
                <input v-model="canvasStyleData.width">
                <span>*</span>
                <input v-model="canvasStyleData.height">
            </div>
            <div class="canvas-config">
                <span>画布比例</span>
                <input> %
            </div>


        </div>
    </div>
</template>
```
cavastyleData:设置画布的样式；
初始化为：
```js
canvasStyleData: { // 页面全局数据
            width: 1200,
            height: 740,
            scale: 100, //缩放值
            color: '#000',
            opacity: 1,
            background: '#fff',
            fontSize: 14,
        },
```

### 3. 画布大小设置

中间的画布 使用`Grid`组件表示， 利用svg绘制一个网格线

`Grid.vue`
```js
<template>
    <svg
        class="grid"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <pattern
                id="smallGrid"
                width="7.236328125"
                height="7.236328125"
                patternUnits="userSpaceOnUse"
            >
                <path 
                    d="M 7.236328125 0 L 0 0 0 7.236328125" 
                    fill="none" 
                    stroke="rgba(207, 207, 207, 0.3)" 
                    stroke-width="1"
                >
                </path>
            </pattern>
            <pattern
                id="grid"
                width="36.181640625"
                height="36.181640625"
                patternUnits="userSpaceOnUse"
            >
                <rect width="36.181640625" height="36.181640625" fill="url(#smallGrid)"></rect>
                <path 
                    d="M 36.181640625 0 L 0 0 0 36.181640625" 
                    fill="none" 
                    stroke="rgba(186, 186, 186, 0.5)" 
                    stroke-width="1"
                >
                </path>
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"></rect>
    </svg>
</template>

<style lang="scss" scoped>
.grid {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
```

画布的大小主要通过设置Home组件中的样式实现；
`Home.vue`
```js
<section class="center">
            <div class="content">
                <Editor/>
            </div>
</section>
```
`Editor.vue`
```js
  <div  id="editor"
        class="editor"         
        :style="{
            ...getCanvasStyle(canvasStyleData),
            width: changeStyleWithScale(canvasStyleData.width) + 'px',
            height: changeStyleWithScale(canvasStyleData.height) + 'px',
        }">
    <!-- 网格线 -->
    <Grid/>
  </div>
```

其中 `cavasStyleData`使用vuex集中管理，函数`getCavasStyle`设置除了宽高外的样式；`changeStyleWithScale`设置宽高
`getCavasStyle()`
```js
const filterKeys = ['width', 'height', 'scale']
export function getCanvasStyle(canvasStyleData) {
    const result = {}
    Object.keys(canvasStyleData).filter(key => !filterKeys.includes(key)).forEach(key => {
        result[key] = canvasStyleData[key]
        if (key === 'fontSize') {
            result[key] += 'px' // 字体添加px
        }
    })

    return result
}
```
`changeStyleWithScale()`
```js
import store from '@/store'
import { divide, multiply } from 'mathjs'
// 
export function changeStyleWithScale(value) {
    return multiply(value, divide(parseInt(store.state.canvasStyleData.scale), 100))
}
```

### 4. 自定义组件

#### 4.1 button