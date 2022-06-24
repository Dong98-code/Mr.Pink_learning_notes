<template>
  <div class="container">
    <!-- <h1>花束般的恋爱</h1> -->
    <!-- 图片部分 -->
    <div class="img"><img :src="detail.cover" alt="" /></div>
    <div>
      <div v-if="detail" class="title">
        {{ detail.name }}({{ detail.showDate }})
      </div>
      <div class="minitsAndArea">
        {{ detailList.timeInMinite }}分钟/{{ detailList.typeName }}/日本
      </div>
      <div class="times">
        <div class="left">
          <img src="@/assets/imgs/like.png" alt="" />{{ detail.reviewTimes }}
        </div>
        <div class="left">
          <img src="@/assets/imgs/collected.png" alt="" />{{
            detail.collectTimes
          }}
        </div>
        <div class="left">{{ detail.reviewTimes }}人评分</div>
      </div>
      <div class="score">
        <div class="left">上影评分 {{ tuiScore }}</div>
        <div class="left gray">豆瓣评分 {{ detail.doubanScore }}</div>
      </div>
      <div class="watch">
        <div class="left">第三方平台</div>
        <div class="left">BT</div>
        <div class="left"><img src="@/assets/imgs/skip.png" alt="" @click="skipChannels"/></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "movieInfo",
  props: ["detail", "detailList"],
  data() {
    return {
      tuiScore:0.0
    }
  },
  methods: {
    skipChannels() {
      this.$bus.$emit('skipMovieChannel') // 触发事件，之后 组件MovieChennl 对应事件触发，执行回调函数
    }
  },
  watch: {
    detail: {
      // immediate:true,
      handler:function(newValue, oldValue) {
        this.tuiScore = newValue.tuiScore.toFixed(1)
      }
    }
  },
  
};
</script>

<style lang="scss" scope>
.container {
  // height: 146px;
  border-top: 0.5px dotted gray;
  border-bottom: 0.5px dotted gray;
  margin-top: 0;
  padding: 10px 20.5px 15px 20.5px;
  background-color: white;
}
</style>

<style lang="scss">
.gray {
  color: #a0a0a0;
}
.img {
  margin-top: 3px;
  vertical-align: top;
  width: 96px;
  height: 136.5px;
  background: #eee;
  float: left;
  //   margin-top: 0.1rem;
  img {
    width: 100%;
  }
}

.title {
  height: 50px;
  margin-left: 115px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.times {
  height: 16px;
  position: relative;
  margin-left: 115px;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;

  div {
    height: 16px;
    font-size: 12px;
    line-height: 16px;
    margin-right: 18px;
    img {
      // position: absolute;
      transform: translateY(2px);
      margin-right: 5px;
      height: 12px;
      width: 13.5px;
    }
  }
}

.minitsAndArea {
  font-size: 12px;
  margin-left: 115px;
  margin-top: 10px;
}
.score {
  height: 16px;
  font-size: 12px;
  margin-left: 115px;
  margin-top: 10px;
  div {
    margin-right: 25px;
  }
}

.watch {
  height: 16px;
  font-size: 12px;
  margin-left: 115px;
  margin-top: 5px;
  div {
    margin-right: 30px;
  }
  img {
    height: 9.5px;
    width: 18px;
  }
}
</style>