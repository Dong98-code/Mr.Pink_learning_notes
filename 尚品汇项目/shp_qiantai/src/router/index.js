// 路由配置

// 引入vue , router
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from '@/router/routes'
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

// 暴露
export default router