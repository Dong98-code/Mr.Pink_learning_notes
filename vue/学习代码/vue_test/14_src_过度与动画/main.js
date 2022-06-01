import Vue from 'vue'
// 所有组件的父组件
import App from './App.vue'

import plugins from './plugins'
Vue.config.productionTip = false

// 使用插件
Vue.use(plugins)
// 创建实例对象
new Vue({
  el:"#app",
  // 将App组件 放入容器中
  // render 为箭头函数的缩写
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
})

// new Vue({
//   el: "#app",
//   // template:`<h1>你好</h1>`,
//   render(creatElement) {
//     // console.log(typeof a);
//     // return null;
//     return creatElement('hai');
//   }
// })
