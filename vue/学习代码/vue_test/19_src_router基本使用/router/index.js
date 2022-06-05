// 创建路由器
import VueRouter from "vue-router";

// 引入组件
import MyHome from '../pages/Home.vue'
import MyAbout from '../pages/About.vue'

// 创建
const router = new VueRouter ({
    // 配置
    routes: [
        {
            path:'/about',
            component:MyAbout
        },
        {
            path:'/home',
            component:MyHome
        },
    ]
})

export default router