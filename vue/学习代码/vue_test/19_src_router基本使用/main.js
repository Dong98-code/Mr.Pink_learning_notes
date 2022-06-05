import Vue from "vue";
// 引入app
import App from './App.vue'
//引入 rooter
import VueRouter from 'vue-router'

// 引入路由器
import router from './router/index.js'

// 生产环境
Vue.config.productionTip = false

Vue.use(VueRouter)
// 创建实例对象


new Vue({
    el: "#app",

    render: h => h(App),
    //router配置项
    router:router
})