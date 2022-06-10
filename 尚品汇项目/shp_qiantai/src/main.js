import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入路由
import router from '@/router'
new Vue({
  render: h => h(App),
  // kv一致, 组件身上拥有$route, 路由信息 和 $router
  router:router
}).$mount('#app')
