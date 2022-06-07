<template>
  <MyDemo @hello="showHelloMsg" msg="你好啊" school="shangguigu">
    <template v-slot:qwe>
      <span>XDD</span>
    </template>
  </MyDemo>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import MyDemo from './components/Demo.vue'
export default {
  name: 'App',
  // 暂时不考虑 响应式
  components:{MyDemo},
  setup() {
    function showHelloMsg(data) {
      
      console.log('触发了事件',data);

    }
    return {
      showHelloMsg
    }
  }
}
</script>

