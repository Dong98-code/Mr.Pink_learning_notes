1)要求
1.1：每一天老师书写代码务必三遍
1.2:node + webpack + VScode + 谷歌浏览器 + git
1.3:数组的方法 + promise + await + async + 模块化........

2)脚手架使用
2: vue init webpack 项目的名字
3|4：vue create 项目名称
脚手架目录:public + assets文件夹区别
![20220609222158](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220609222158.png)
node_modules:放置项目依赖的地方
public:一般放置一些共用的静态资源，打包上线的时候，public文件夹里面资源原封不动打包到dist文件夹里面
- src：程序员源代码文件夹
  - assets文件夹：经常放置一些静态资源（图片），assets文件夹里面资源webpack会进行打包为一个模块（js文件夹里面）
  - components文件夹:一般放置非路由组件（或者项目共用的组件）
  - App.vue 唯一的根组件
  - main.js 入口文件【程序最先执行的文件】
- babel.config.js:babel配置文件
- package.json：看到项目描述、项目依赖、项目运行指令
- README.md:项目说明文件
  

3)脚手架下载下来的项目稍微配置一下
## 3.1:浏览器自动打开
        在package.json文件中
        "scripts": {
         "serve": "vue-cli-service serve --open",
          "build": "vue-cli-service build",
          "lint": "vue-cli-service lint"
        },



## 3.2关闭eslint校验工具
创建vue.config.js文件：需要对外暴露
```js
module.exports = {
   lintOnSave:false,
}
```
## 3.3 src文件夹的别名的设置
因为项目大的时候src（源代码文件夹）：里面目录会很多，找文件不方便，设置src文件夹的别名的好处，找文件会方便一些
创建jsconfig.json文件

> 现有的脚手架已经配置好了
```js
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "src/*"
            ]
        }
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```

4:项目上传GIT
微信小程序实战课的时候，会带着大家玩耍的
注意:前面基础课程当中，创建分支、处理冲突等等
https://gitee.com/jch1011/shangpinhui_0607.git






5）路由的配置
vue-router
路由分为KV

node平台（并非语言）
对于后台而言:K即为URL地址   V即为相应的中间件
http://localhost:8080/0607
```js
app.get("/0607",(res,req)=>{
   res.send('我是祖国的老花骨朵');
});

```
前端路由:
K即为URL（网络资源定位符）
V即为相应的路由组件


## 5.1 路由的一个分析
确定项目结构顺序:上中下 -----只有中间部分的V在发生变化，中间部分应该使用的是路由组件
2个非路由组件|四个路由组件
两个非路由组件：Header 、Footer
路由组件:Home、Search、Login（没有底部的Footer组件，带有二维码的）、Register（没有底部的Footer组件，带二维码的）
herder:首页 搜索页

## 5.2安装路由
`npm install --save vue-router `
--save:可以让你安装的依赖，在package.json文件当中进行记录

> ![20220610170008](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220610170008.png)
> 注册完路由之后。 路由和非路由组件都有 $router 和 $route 
## 5.3创建路由组件【一般放在views|pages文件夹】
## 5.4配置路由，配置完四个路由组件





## 创建非路由组件（2个：Header、Footer）

非路由组件使用分为几步:
第一步：定义
第二步：引入
第三步：注册
第四步:使用

非路由组件的结构的搭建：
前台项目的结构与样式不需要自己写的，老师准备好了
辉洪老师静态页面：
结构 + 样式 +图片资源

项目采用的less样式,浏览器不识别less语法，需要一些loader进行处理，把less语法转换为CSS语法

1. 安装less less-loader@5
切记less-loader安装5版本的，不要安装在最新版本，安装最新版本less-loader会报错，报的错误setOption函数未定义
> 现在要安装6版本的组件

2. 需要在style标签的身上加上lang="less",不添加样式不生效



6) footer页面的显示和隐藏
   注册 v-if 和 v-show


7)路由的跳转
路由的跳转就两种形式：
- 声明式导航（router-link：务必要有to属性）
- 编程式导航push||replace
  
编程式导航更好用：因为可以书写自己的业务逻辑





面试题：v-show与v-if区别?
v-show:通过样式display控制
v-if：通过元素上树与下树进行操作
面试题:开发项目的时候，优化手段有哪些?
1:v-show|v-if
2:按需加载
> 首页|搜索底部是有Footer组件，而登录注册是没有Footer组件
Footer组件显示|隐藏，选择v-show|v-if
> 根据组件的 `$route`是否含有 为当前的路径
路由元信息
> `meta:{isShowFooter:true}`, 在这配置自定义属性， 然后就可以根据自定义去实现某些功能；


9）路由传参
params参数：路由需要占位，程序就崩了，属于URL当中一部分
> 需要占位， 属于路由的一部分


query参数：路由不需要占位，写法类似于ajax当中query参数
路由传递参数先关面试题
     1:路由传递参数（对象写法）path是否可以结合params参数一起使用?
     不可以：不能这样书写，程序会崩掉
     需要使用 具名路由 即给路由加上`name`属性；
     2:如何指定params参数可传可不传? 
     配置路由的时候 已经占位， 路由跳转没有传递参数， url会出错；
     在占位的时候 加入 问好 `？`，类似于正则表达， 可有可无；
     3:params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
     4:如果指定name与params配置, 但params中数据是一个"", 无法跳转，路径会出问题
     `''|| undefined`
     5: 路由组件能不能传递props数据?

     ![20220610175734](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220610175734.png)

     




















     
    


