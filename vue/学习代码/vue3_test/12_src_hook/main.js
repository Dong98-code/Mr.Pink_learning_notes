import { createApp } from 'vue' // 名为 creatApp的工厂函数， 不需要使用new 关键字
import App from './App.vue'

// createApp(App).mount('#app')
// #app 页面上容器的id

const app = createApp(App); // 创建应用实例对象

app.mount('#app')
// app身上的属性和方法 比 vm更少
