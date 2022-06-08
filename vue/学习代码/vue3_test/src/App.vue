<template>
<button @click="isShowDemo = !isShowDemo">点击显示/隐藏</button>
  <MyDemo v-if="isShowDemo"></MyDemo>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import MyDemo from './components/Demo.vue'
import {ref} from 'vue'
export default {
  name: 'App',
  // 暂时不考虑 响应式
  components:{MyDemo},
  setup() {
    
    const isShowDemo = ref(true)
    
    return {
      isShowDemo
    }
  }
}
</script>

