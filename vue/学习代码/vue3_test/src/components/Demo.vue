<template>
  
  <h2>年龄：{{person.age }}</h2>
  <h2>姓名:{{person.name}}</h2>
  <slot name="qwe"></slot>
  <button @click="sayHello">点击触发hello</button>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {reactive} from 'vue'
export default {
  name: 'MyDemo',
  // 暂时不考虑 响应式
  // beforeCreate() {
  //   console.log('---beforeC');
  // },
  props:['msg', 'school'],
  emits:['hello'], // 自定义事件传递
  setup(props, context) {
    console.log('----setup---', this);

    console.log(context.slots);

    let person = reactive({
      name: '张三',
      age: 10,
      job: {
      type:'前端',
      salary:'20k',
      a:{
        c:10
      }
    },
    hobby:['吸烟', '喝酒']

    })

    // sayH
    function sayHello() {
      context.emit('hello', 666)
    }
    // 返回对象
    return {
      person,
      sayHello
    }
  }
}
</script>

