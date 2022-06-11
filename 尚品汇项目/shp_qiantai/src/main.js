import Vue from 'vue'
import App from './App.vue'
import store from './store'

// 全局组件 TYpeNav
import TypeNav from '@/components/TypeNav'
// params:组件名字，
// console.log(TypeNav.name);
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

// 引入路由
import router from '@/router'

// 测试接口
// import { reqCategoryList } from '@/api'
// reqCategoryList();

new Vue({
  render: h => h(App),
  // kv一致, 组件身上拥有$route, 路由信息 和 $router
  router: router,
  store
}).$mount('#app')
