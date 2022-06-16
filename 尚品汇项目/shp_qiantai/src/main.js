import Vue from 'vue'
import App from './App.vue'
import store from './store'

// 全局组件 TYpeNav
import TypeNav from '@/components/TypeNav'
// params:组件名字，
// console.log(TypeNav.name);
Vue.component(TypeNav.name, TypeNav)
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)

Vue.config.productionTip = false

// 引入路由
import router from '@/router'

// 测试接口
// import { reqGetSearchInfo ,reqCategoryList} from '@/api'
// let data = reqCategoryList();
// console.log(data);
// 引入mock,执行mock
import '@/mock/mockServe'
  
  
new Vue({
  render: h => h(App),
  // kv一致, 组件身上拥有$route, 路由信息 和 $router
  router: router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
