import MyHome from '@/pages/Home'
import MyLogin from '@/pages/Login'
import MySearch from '@/pages/Search'
import MyRegister from '@/pages/Register'
import Detail from '@/pages/Detail'
// 暴露 路由
export default [
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
        path: '/search/:keyword?',
        // path: '/search',

        component: MySearch,
        meta:{isShowFooter:false}
        
    },
    // 重定向
    {
        path: '*',
        redirect:'/home'
    },
    {   
        name:'detail',
        path: '/detail/:skuId',
        component: Detail,
        meta:{isDetail:true}
        
    }
]