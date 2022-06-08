<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点击+1</button>
  <br />
  <h2>当前信息时：{{ msg }}</h2>
  <button @click="msg += '!'">点击+'!'</button>
  <br />

  <hr />
  <h2>当前坐标为x:{{ point.x }}, y:{{ point.y }}</h2>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import usePoint from '../hooks/usePoint' // 得到一个函数

export default {
  name: "MyDemo",

  setup() {
    console.log("---set up");
    let sum = ref(0);
    let msg = ref("你好");
    
    let point = usePoint() // 执行函数
    return {
      sum,
      msg,
      point,
    };
  },
};
</script>

