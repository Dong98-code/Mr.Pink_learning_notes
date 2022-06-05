// 创建路由器
import VueRouter from "vue-router";

// 引入组件
import MyHome from '../pages/Home.vue'
import MyAbout from '../pages/About.vue'
import MyNews from '../pages/News.vue'
import MyMessage from '../pages/Message.vue'


// 创建
const router = new VueRouter ({
    // 配置
    routes: [
        {
            path:'/about',
            component: MyAbout,

        },
        {
            path:'/home',
            component: MyHome,
            children: [
                {
                    path: 'news', // 此处不写 "/"
                    component:MyNews
                },
                {
                    path: 'message',
                    component:MyMessage
                },
            ]
        },
    ]
})

export default router