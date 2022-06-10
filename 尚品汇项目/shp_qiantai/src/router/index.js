// 路由配置

// 引入vue , router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

// 
import MyHome from '@/pages/Home'
import MyLogin from '@/pages/Login'
import MySearch from '@/pages/Search'
import MyRegister from '@/pages/Register'

// 暴露 路由


// 重写push
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

const router = new VueRouter({
    // 配置路由
    routes: [
        {   
            name:'home',
            path: "/home",
            component: MyHome,
            meta:{isShowFooter:true}
            
        },
        {
            name: 'login',
            path: '/login',
            component: MyLogin,
        },
        {
            name: 'register',
            path: '/register',
            component:MyRegister
        },
        {
            name: 'search',
            path: '/search',
            component: MySearch,
            meta:{isShowFooter:false}
            
        },
        // 重定向
        {
            path: '*',
            redirect:'/home'
        }
    ]
})

// 暴露
export default router