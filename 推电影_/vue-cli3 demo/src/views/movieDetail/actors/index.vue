<template>
  <div class="container">
    <div class="header">
      <h1 class="left">演职员</h1>
      <div class="right">
        全部 {{ 1 + actorList.length }}
        <i class="iconfont icon-right-arrow"></i>
      </div>
    </div>
    <div class="main">
      <div v-if="director && actorList">
        <img :src="director.avatar" alt="">
        <p>{{director.name}}</p>
        <p>{{director.desc}}</p>
      </div>
      <div v-for="(actor,id) in actorList" :key="id">
        <img :src="actor.avatar" alt="" />
        <p>{{ actor.name }}</p>
        <p>{{actor.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Actors",
  props: ["director", "actorList"],

};
</script>


<style scoped lang='scss' >
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
  padding-bottom:15px ;
  border-top: 0.5px dashed gray;
  h1 {
    font-size: 19px;
    font-weight: 700;
  }
  div {
    margin-top: 6px;
    color: #8a8a8a;
  }
  .icon-right-arrow {
    color: #8a8a8a;
  }
}
.main {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  display: -webkit-box;
  white-space: nowrap;
  div {
    display: inline-block;
    margin: 4.5px;
    img {
      width: 74px;
      height: 102px;
    }
  }
}
</style>
