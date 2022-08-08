import Vue from 'vue'
import App from './App.vue'
// 使用element-ui
import ElementUI from 'element-ui'
import store from './store'
import router from './router'
// 样式表的设置
import '@/assets/iconfont/iconfont.css'
import '@/styles/animate.scss'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/reset.css'
import '@/styles/global.scss'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
