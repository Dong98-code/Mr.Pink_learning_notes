# 基本使用

**`Webpack` 是一个静态资源打包工具。**

它会以一个或多个文件作为打包的入口，将我们整个项目所有文件编译组合成一个或多个文件输出出去。

输出的文件就是编译好的文件，就可以在浏览器段运行了。

我们将 `Webpack` 输出的文件叫做 `bundle`。

## 功能介绍

Webpack 本身功能是有限的:

- 开发模式：仅能编译 JS 中的 `ES Module` 语法
- 生产模式：能编译 JS 中的 `ES Module` 语法，还能压缩 JS 代码

## 开始使用

### 1. 资源目录

```
webpack_code # 项目根目录（所有指令必须在这个目录运行）
    └── src # 项目源码目录
        ├── js # js文件目录
        │   ├── count.js
        │   └── sum.js
        └── main.js # 项目主文件
```

### 2. 创建文件

- count.js

```js
export default function count(x, y) {
  return x - y;
}
```

- sum.js

```js
export default function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
```

- main.js

```js
import count from "./js/count";
import sum from "./js/sum";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
```

### 3. 下载依赖

打开终端，来到项目根目录。运行以下指令：

- 初始化`package.json`

```
npm init -y
```

此时会生成一个基础的 `package.json` 文件。

**需要注意的是 `package.json` 中 `name` 字段不能叫做 `webpack`, 否则下一步会报错**

- 下载依赖

```
npm i webpack webpack-cli -D
```

### 4. 启用 Webpack

- 开发模式

```
npx webpack ./src/main.js --mode=development
```

- 生产模式

```
npx webpack ./src/main.js --mode=production
```

`npx webpack`: 是用来运行本地安装 `Webpack` 包的。

`./src/main.js`: 指定 `Webpack` 从 `main.js` 文件开始打包，不但会打包 `main.js`，还会将其依赖也一起打包进来。

`--mode=xxx`：指定模式（环境）。

### 5. 观察输出文件

默认 `Webpack` 会将文件打包输出到 `dist` 目录下，我们查看 `dist` 目录下文件情况就好了

## 小结

`Webpack` 本身功能比较少，只能处理 `js` 资源，一旦遇到 `css` 等其他资源就会报错。

所以我们学习 `Webpack`，就是主要学习如何处理其他资源。
