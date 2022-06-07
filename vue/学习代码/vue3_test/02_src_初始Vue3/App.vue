<template>
  <h1>我是组件App</h1>
  <h2>年龄：{{age}},</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {h} from 'vue'
export default {
  name: 'App',
  // 暂时不考虑 响应式
  setup() {
    //数据 methods computed 等 都在里面
    //中间不能有逗号
    let name = '张三'
    let age = 18
    
    // methods
    function sayHello() {
      alert('name')
    }

    // 返回对象
    // return {
    //   name,
    //   age, 
    //   sayHello
    // }

    // 返回render 函数， 渲染函数

    // return () => { return h('h1', 'atguigu')}
    return () => h('h1', 'atguigu')
  }
}
</script>

