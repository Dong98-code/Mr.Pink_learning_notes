<template>
  <div class="container">
    <div class="header">
      <h1 class="left">推剪辑</h1>
    </div>

    <div class="main">
      <div v-for="(video, id) in tuiVideos" :key="id">
        <img :src="video.cover" alt="" />
        <span class="watchTimes">{{ video.zanTimes }}播放</span>
        <div class="desc">
          花束般的恋爱：连二次元都打不赢的爱情 ，为何值得我们相信？
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TuiVideo",
  props: ["tuiVideos"],
};
</script>

<style lang="scss" scoped>
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
  h1 {
    font-size: 19px;
    font-weight: 700;
  }
}

.main {
  //   width: 100%;
  width: 334px;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  display: -webkit-box;
  white-space: nowrap;

  div {
    position: relative;
    .watchTimes {
      position: absolute;
      width: 59px;
      height: 16px;
      right: 8px;
      top: 155px;
      z-index: 11;
      background-color: rgb(70, 78, 76);
      opacity: 0.5;
      text-align: center;
      line-height: 16px;
      color: #ffffff;
    }
    img {
      width: 334px;
    }
    .desc {
      margin-top: 20px;
      width: 334px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      white-space: normal;
    }
  }
}
</style>

