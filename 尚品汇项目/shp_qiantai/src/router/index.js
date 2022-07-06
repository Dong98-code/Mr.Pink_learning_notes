// 路由配置

// 引入vue , router
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from '@/router/routes'

// 引入store
import store from '@/store'
// 使用插件
Vue.use(VueRouter)





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
        originPush.call(this, location, () => {}, () => {}) // 手动传入两个回调函数 占位
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    // location 为原本传入的目标 
    if (reject && resolve) {
        // call 和 apply传参的方式不一样， call用逗号隔开
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {}) // 手动传入两个回调函数 占位
    }
}

const router = new VueRouter({
    // 配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return {
            top: 0
        }
    },
})

// 设置路由守卫， 全局守卫 前置守卫
// 在每次路由跳转是都会 执行这个函数
//next函数 放行函数
router.beforeEach(async (to, from, next) => {
    //to:去的那个路由的信息
    //from:从那个路由而来的信息
    //next:放行函数!!!!!! 
    //第一种：next(),放行函数，放行到它想去的路由！！！
    //第二种:next(path),守卫指定放行到那个路由去?

    //用户是否登录:取决于仓库里面是否有token！！！
    //每一次路由跳转之前需要用有用户信息在跳转,没有发请求获取用户信息在跳转！！！！
    //token
    let hasToken = store.state.users.token;
    //用户信息
    let hasNickName = store.state.users.nickName;
    //用户登录
    if (hasToken) {
        //用户登录了,不能去login
        if (to.path == "/login") {
            next('/home');
        } else {
            //用户登陆了,而且还有用户信息【去的并非是login】
            if (hasNickName) {
                next(); // 直接放行
            } else {
                //用户登陆了,但是没有用户信息 
                try {
                    //发请求获取用户信息以后在放行
                    await store.dispatch('users/getUserInfo');
                    next();
                } catch (error) {
                    //用户没有信息，还携带token发请求获取用户信息【失败】
                    //token【学生证失效了】
                    //token失效:本地清空数据、服务器的token通知服务器清除
                    await store.dispatch('users/logout');
                    //回到登录页，重新获取一个新的学生证
                    next('/login');
                }
            }
        }
    } else {
        //用户未登录||目前的判断都是放行.将来这里会'回手掏'增加一些判断
        //用户未登录:不能进入/trade、/pay、/paysuccess、/center、/center/myorder  /center/teamorder
        let toPath = to.path;
        if (toPath.indexOf('trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1) {
            next('/login?redirect=' + toPath);
        } else {
            next();
        }
    }
});

// 暴露
export default router