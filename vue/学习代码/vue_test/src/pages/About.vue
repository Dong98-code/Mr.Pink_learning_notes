<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "MyAboout",
  beforeRouteEnter (to, from, next) {
    // ... 通过路由规则 进入该组件时 被调用
  },
  beforeRouteLeave (to, from, next) {
    // ... 离开组件之后 调用
  }
};
</script>