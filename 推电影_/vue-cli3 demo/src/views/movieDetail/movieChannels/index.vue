<template>
  <div class="container">
    <!-- <button @click="skip">点击</button> -->
    <div class="header">
      <h1 class="left" ref="target">观看渠道</h1>
    </div>
    <div class="thirdParty" v-show="hasThird">
      <div class="box1"><span class="setsize">第三方</span></div>

      <div class="channel" v-for="(c, index) in newList" :key="index">
        <img :src="c.platform.icon" alt="" />
        <a href="#">{{ c.platform.name }}</a>
      </div>
    </div>
    <div class="bt" v-show="hasBT">
      <div class="box1"><span class="setsize">BT</span></div>
      <div class="url">{{ btUrl }}</div>
    </div>
    <div class="none" v-show="!hasBT && !hasBT">
      <div class="box1"><span class="setsize">暂无片源</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MovieChannels",
  props: ["watchList"],
  data() {
    return {
      hasThird: false,
      hasBT: false,
      btUrl: "",
    };
  },
  watch: {
    watchList: {
      deep: true,
      immediate: true,
      handler: function (newValue, oldValue) {
        // console.log(newValue);
        let newList = [];
        for (let obj of newValue) {
          if (!obj.platform) {
            this.hasBT = true;
            this.btUrl = obj.movieWatch.url;
          } else {
            this.hasThird = true;
            newList.push(obj);
          }
        }
        this.newList = newList;
        // console.log(this.newList);
      },
    },
  },
  methods: {
    skip() {
      // console.log("点击了");
      this.$refs.target.scrollIntoView({
        behavior: "smooth"
      });
    },
  },
  mounted() {
    this.$bus.$on("skipMovieChannel", this.skip);
  },
};
</script>

<style lang="scss">
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
}

.box1 {
  display: inline-block;
  // float: left;
  position: relative;
  width: 48.5px;
  height: 17.5px;
  border: 1px solid;
  border-radius: 5px 5px 5px 5px;
  line-height: 17.5px;
  text-align: center;
  // font-size: 10px;
  margin-right: 13px;
  vertical-align: middle;
  .setsize {
    display: inline-block;
    font-size: 10px;
    transform: scale(0.7);
  }
}

.url {
  height: 25px;
  line-height: 25px;
  display: inline-block;
  // margin-left:65px ;
  color: #f39800;
}
.channel {
  position: relative;
  height: 25px;
  display: inline-block;
  line-height: 25px;
  // top: 50%;
  margin-right: 25px;

  img {
    display: inline-block;
    height: 11px;
    margin-right: 3px;
    line-height: 25px;
    transform: translateY(20%);
  }
}
.thirdParty,
.bt,
.none {
  width: 334px;
  height: 25px;
  position: relative;
  padding-bottom: 5px;
  line-height: 25px;
}
</style>