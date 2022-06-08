<template>
  <div class="child">
    <h3>
      Childd组件, 子
      <MySun/>
    </h3>
  </div>
</template>

<script>
import MySun from './Sun.vue'
export default {
  name:"MyChild",
  components:{MySun}
}
</script>

<style>
  .child {
    background-color: skyblue;
    padding: 10px;
  }
</style>