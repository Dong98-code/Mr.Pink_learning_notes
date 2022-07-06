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
// 全局分页器
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name, Pagination)

Vue.config.productionTip = false

// 引入路由
import router from '@/router'

// 引入接口
import * as http from '@/api'
// 测试接口
// import { reqGetSearchInfo ,reqCategoryList} from '@/api'
// let data = reqCategoryList();
// console.log(data);
// 引入mock,执行mock
import '@/mock/mockServe'

// element ui
import { Button, Row, Col, MessageBox, Message, Input } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
//element-ui大多数组件，注册为全局组件Vue.component|Vue.use
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input)
//按需引入写法不同的:MessageBox、Message、Loading、Notification
Vue.prototype.$msgbox = MessageBox;
//消息提示框
Vue.prototype.$alert = MessageBox.alert;

Vue.prototype.$message = Message;
  
new Vue({
  render: h => h(App),
  // kv一致, 组件身上拥有$route, 路由信息 和 $router
  router: router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$http = http;
  }
}).$mount('#app')
