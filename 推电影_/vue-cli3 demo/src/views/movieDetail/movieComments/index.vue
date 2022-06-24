<template>
  <div class="container">
    <div class="header">
      <h1 class="left">影评</h1>
      <div class="right">
        <i class="iconfont icon-right-arrow"></i>
      </div>
    </div>
    <div style="height:200px">xxxxxxxxxxxx</div>
  </div>
</template>
<script>
export default {
    name:'MovieComments'
};
</script>

<style lang="scss">
@import "@/style/mixin";

.container {
  border: none;
  margin: 0;
  padding-top: 0;
}
.header {
  display: block;
  height: 23px;
  padding-top: 22px;
  padding-bottom: 15px;
  border-top: 0.5px dashed gray;
  div {
    margin-top: 6px;
    color: #8a8a8a;
  }
  .icon-right-arrow {
    color: #8a8a8a;
  }
}
</style>