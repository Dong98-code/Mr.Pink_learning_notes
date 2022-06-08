<template>
  <div class="app">
    <h3>
      app组件, 祖先, {{name}}, ___{{price}}__

      <MyChild/>

    </h3>
    <button @click="price++">修改价格</button>
  </div>
</template>

<script>
import { reactive, toRefs , provide} from 'vue'
import MyChild from './components/Child.vue'
export default {
  name:"App",
  components:{MyChild},
  setup() {
    let car = reactive({
      name:'奔驰',
      price:40
    })

    provide('car', car) // 给自己的后代组件传递数组
    return {
      ...toRefs(car)
    }
  }
}
</script>

<style>
  .app {
    background-color: pink;
    padding: 10px;
  }
</style>