犯的错误:
1:项目阶段，左侧菜单目录，只能有项目文件夹
2:联想电脑安装node_modules依赖包的时候，经常丢包。npm install --save axios --force
3：单词错误
4：路由理解
KV：K--->URL  V---->相应的组件
配置路由：
     ------路由组件
     -----router--->index.js
                  import Vue  from 'vue';
                  import VueRouter from 'vue-router';
                  //使用插件
                  Vue.use(VueRouter);
                  //对外暴露VueRouter类的实例
                  export default new VueRouter({
                       routes:[
                            {
                                 path:'/home',
                                 component:Home
                            }
                       ]
                  })
    ------main.js   配置项不能瞎写


$router:进行编程式导航的路由跳转
this.$router.push|this.$router.replace
$route:可以获取路由的信息|参数
this.$route.path
this.$route.params|query
this.$route.meta


## 1. NavigationDuplicated错位
编程式导航路由跳转到当前路由(参数不变), 多次执行会抛出`NavigationDuplicated`的警告错误?
注意:编程式导航（`push|replace`）才会有这种情况的异常，声明式导航是没有这种问题，因为声明式导航内部已经解决这种问题。
这种异常，对于程序没有任何影响的。
为什么会出现这种现象:
由于`vue-router`最新版本3.5.2，引入了`promise`，当传递参数多次且重复，会抛出异常，因此出现上面现象,
第一种解决方案：是给push函数，传入相应的成功的回调与失败的回调
第一种解决方案可以暂时解决当前问题，但是以后再用`push|replace`还是会出现类似现象，因此我们需要从‘根’治病；

`this.$router`为`VueRouter`类的实例，`push`方法为 `VueRouter.prototype.push()` 原型对象的方法；
重写`push` 和 `replace`

```js
// 保存原始
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push
VueRouter.prototype.push = function (location, resolve, reject) {
    // location 为原本传入的目标 
    if (reject && resolve) {
        // call 和 apply传参的方式不一样， call用逗号隔开
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, ()=>{}, ()=>{}) // 手动传入两个回调函数 占位
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    // location 为原本传入的目标 
    if (reject && resolve) {
        // call 和 apply传参的方式不一样， call用逗号隔开
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, ()=>{}, ()=>{}) // 手动传入两个回调函数 占位
    }
}
```

## 2. 拆分Home组件
将Home组件的静态组件拆分
- 2.1静态页面（样式）
- 2.2拆分静态组件
- 2.3发请求获取服务器数据进行展示
- 2.4开发动态业务
拆分组件：结构+样式+图片资源
一共要拆分为七个组件

### 2.1 三级联动

该组件多次使用， 注册为全局组件
```js
// 全局组件 TYpeNav
import TypeNav from '@/pages/Home/TypeNav'
// params:组件名字，
// console.log(TypeNav.name);
Vue.component(TypeNav.name, TypeNav)
```




### 2.2 接口地址

`http://gmall-h5-api.atguigu.cn`

axios配置对象
```js
// 对 axios进行二次封装
import axios from "axios";

// 创建 axios实例对象

const requests = axios.create({
    // 配置对象
    baseURL: '/api',
    //请求超时的事件 5s
    timeout: 5000,
    
})

// 请求拦截器， 在请求发出之前 请求拦截器 检测到在请求发出之前做一些事情

requests.interceptors.request.use((config) => {
    // header请求头
    return config;
})

// 响应拦截器

requests.interceptors.response.use((res) => {
    return res.data; // 响应成功的数据
}, (error) => { 
    return Promise.reject(new Error('false')) // 返回 Promise对象
})
```



### 2.3axios二次封装
AJAX:客户端可以'敲敲的'向服务器端发请求，在页面没有刷新的情况下，实现页面的局部更新。
XMLHttpRequest、$、fetch、axios
跨域:如果多次请求协议、域名、端口号有不同的地方，称之为跨域
JSONP、CROS、代理
2.1:工作的时候src目录下的API文件夹，一般关于axios二次封装的文件
2.2进度条：nprogress模块实现进度条功能
工作的时候，修改进度条的颜色，修改源码样式.bar类名的


### 2.5 进度条插件
`nprogress`
![20220611162609](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220611162609.png)

### 2.4 vuex:今晚务必vuex复习一下
vuex:Vue官方提供的一个插件，插件可以管理项目共用数据。
vuex：书写任何项目都需要vuex？
项目大的时候，需要有一个地方‘统一管理数据’即为仓库store
Vuex基本使用:

     
   


















