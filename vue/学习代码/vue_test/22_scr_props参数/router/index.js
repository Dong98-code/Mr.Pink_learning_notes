// 创建路由器
import VueRouter from "vue-router";

// 引入组件
import MyHome from '../pages/Home.vue'
import MyAbout from '../pages/About.vue'
import MyNews from '../pages/News.vue'
import MyMessage from '../pages/Message.vue'
import MyDetails from '../pages/Details.vue'


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
                    component: MyMessage,
                    children: [
                        {   
                            name:'xiangqing',
                            path: 'detail/:id/:title',
                            component: MyDetails,
                            // 1.props第一中， 对象， 该对象中的所有 key-value会以props传 给detail组件
                            // props: {a:1, b:'hello'}
                            // 第二种, 若为真，则将该路由组件收到的oarams以props形式传给details组件
                            props:true

                            // // 第三种， 函数式， vue.router帮忙调取i函数

                            // props($route) {
                            //     return {id:$route.query.id, title:$route.query.title}
                            // }
                        }
                    ]
                },
            ]
        },
    ]
})

export default router