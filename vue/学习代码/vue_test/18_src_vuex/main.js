import Vue from "vue";
// 引入app
import App from './App.vue'

import store from './store/index.js'

// 生产环境
Vue.config.productionTip = false

// 创建实例对象
// use vuex

new Vue({
    el: "#app",

    render: h => h(App),
    // 安装全局事件总线
    store: store,
    // store, key = value 简写
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})