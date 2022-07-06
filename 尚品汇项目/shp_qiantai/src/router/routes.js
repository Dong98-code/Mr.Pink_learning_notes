import MyHome from '@/pages/Home'
import MyLogin from '@/pages/Login'
import MySearch from '@/pages/Search'
import MyRegister from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCarSuccess from '@/pages/addCartSuccess'
import ShopCar from '@/pages/shopCart'
import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 暴露 路由

//个人中心的二级路由组件
import MyOrder from '@/pages/Center/myOrder';
import TeamOrder from '@/pages/Center/teamOrder'
export default [
    {   
        name:'pay',
        path: "/pay",
        component: () => import('@/pages/PaySuccess'),
        meta:{isShowFooter:true}
        
    },
    {   
        name:'paysuccess',
        path: "/paysuccess",
        component: PaySuccess,
        meta:{isShowFooter:true}
        
    },
    {   
        name:'home',
        path: "/home",
        component: MyHome,
        meta:{isShowFooter:true}
        
    },
    {   
        name:'trade',
        path: "/trade",
        component: Trade,
        meta: { isShowFooter: true },
        beforeEnter: (to, from, next) => {
            // ...
            if (from.path == "/shopcar") {
                next();
            } else {
                next(false)
            }
        }
        
    },
    {   
        name:'shopcar',
        path: "/shopcar",
        component: ShopCar,
        meta:{isShowFooter:true}
        
    },
    {   
        name:'addcarsuccess',
        path: "/addcarsuccess",
        component: AddCarSuccess,
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
        
    },
    {
        path: '/center',
        component: Center,
        meta: { show: true },
        //二级路由配置的地方
        children:[
             //我的订单
             {
                  path:'myorder',
                  component:MyOrder
             }
             ,
             {
                 path:'teamorder',
                 component:TeamOrder
             }
             ,
             {
                 path:'/center',
                 redirect:'/center/myorder'
             }
        ]
    },
]