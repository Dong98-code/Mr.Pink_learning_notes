// 路由配置

// 引入vue , router
import Vue from 'vue'
import Router from 'vue-router'

// 使用插件
Vue.use(Router)

// 
import MyHome from '@/pages/Home'
import MyLogin from '@/pages/Login'
import MySearch from '@/pages/Search'
import MyRegister from '@/pages/Register'
// 暴露 路由

const router = new Router({
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