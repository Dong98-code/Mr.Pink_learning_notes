import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Index from '../views/Index.vue'
import login from '../views/login/login'
import bindMobile from '../views/login/bindMobile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',  component: App , //顶层路由，对应index.html
    children:[ //二级路由。对应App.vue
      {path: '',  redirect: '/index'},
      {path: '/index',  component: Index, meta: { title:"在线实习" } },
      {path: '/u/login',  component: login, meta: { title:"登录" } },
      {path: '/u/bindMobile',  component: bindMobile, meta: { title:"绑定手机" } },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
