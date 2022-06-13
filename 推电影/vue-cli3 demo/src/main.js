import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import qs from 'qs';
Vue.prototype.$http=axios
axios.defaults.baseURL = '/api' // 跨域
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; 
//axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
Vue.prototype.$qs = qs;

import "lib-flexible/flexible" // 移动端 px -> rem 移动端适配
import { Toast } from 'vant'  // 组件库
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to,from,next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
