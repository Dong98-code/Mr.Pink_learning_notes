// 创建路由器
import VueRouter from "vue-router";

// 引入组件
import MyHome from '../pages/Home.vue'
import MyAbout from '../pages/About.vue'
import MyNews from '../pages/News.vue'
import MyMessage from '../pages/Message.vue'
import MyDetails from '../pages/Details.vue'


// 创建
const router = new VueRouter({
    mode:'history',
    // 配置
    routes: [
        {
            path:'/about',
            component: MyAbout,
            

        },
        {
            path:'/home',
            component: MyHome,
            meta: {
              title:'Home'  
            },
            children: [
                {   
                    name:'xinwen',
                    path: 'news', // 此处不写 "/"
                    component: MyNews,
                    meta: {
                        isAuth:true
                    },
                    // beforeEnter(to,from,next){
                    //     console.log('beforeEnter',to,from)
                    //     if(localStorage.getItem('school') === 'atguigu'){
                    //         next()
                    //     }else{
                    //         alert('暂无权限查看')
                    //     }
                    // }
                },
                {   
                    name:'xiaoxi',
                    path: 'message',
                    component: MyMessage,
                    meta: {
                        isAuth: true,
                        title:'消息'
                    },
                    children: [
                        {   
                            name:'xiangqing',
                            path: 'detail/:id/:title',
                            component: MyDetails,
                            // 1.props第一中， 对象， 该对象中的所有 key-value会以props传 给detail组件
                            // props: {a:1, b:'hello'}
                            // 第二种, 若为真，则将该路由组件收到的oarams以props形式传给details组件
                            // props:true

                            // // 第三种， 函数式， vue.router帮忙调取i函数

                            props($route) {
                                return {id:$route.query.id, title:$route.query.title}
                            }
                        }
                    ]
                },
            ]
        },
    ]
})

// 路由守卫
// 每一次路由切换之前

// 1.  全局前置 路由守卫 切换之前 调用 该回调函数 每一次切换之前；初始化
// router.beforeEach((to, from, next) => {
//     //路由每次切换之前调用的 回调函数
//     // params: to from next
//     // next fangxin
//     console.log('aa');
//     console.log(to);
//     console.log(from);
//     // 判断 path
//     // 1. 不用设置守卫2.设置守卫的情况

//     // if (to.name === 'xinwen' && to.name === 'xiaoxi') {
//     //     if (localStorage.getItem('school') === 'atguigu') {
//     //         // 放行
//     //         next()
//     //     } else {
//     //         alert('无权限')
//     //     }
//     // } else {
//     //     next();
//     // }

//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'atguigu') {
//                     // 放行
//                     next()
//                 } else {
//                     alert('无权限')
//                 }
//     } else {
//         next()
//     }
    

// })

// 后置路由守卫
/// 每次路由之后 切换之后调用

// router.afterEach((to, from) => {
//     // 没有 next参数， 此时路由已经完成了
//     // 在meta中 配置信息
//     document.title = to.meta.title || `XDD`;
// })

// 独享路由守卫


export default router