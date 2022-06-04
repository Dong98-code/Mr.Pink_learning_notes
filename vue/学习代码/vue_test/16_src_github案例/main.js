import Vue from "vue";
// 引入app
import App from './App.vue'

// 生产环境
Vue.config.productionTip = false

// 创建实例对象

new Vue({
    el: "#app",
    render: h => h(App),
    // 安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})