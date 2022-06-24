<template>
  <div class="container">
    <div class="pannel">
      <van-tabs class="active" animated>
        <van-tab title="简介">
          <div :class="showTotal ? 'total-introduce' : 'detailed-introduce'">
            <div class="intro-content" :aaa="desc" ref="desc">
              <span class="merchant-desc" v-if="desc">
                {{ desc }}
              </span>
              <div
                class="unfold"
                @click="showTotalIntro"
                v-if="showExchangeButton"
              >
                <p>{{ exchangeButton ? "展开" : "收起" }}</p>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab title="推荐"> 内容 </van-tab>
        <van-tab title="影评">
          <div :class="showTotal ? 'total-introduce' : 'detailed-introduce'">
            <div class="intro-content" :aaa="tuiDesc" ref="desc">
              <span class="merchant-desc" v-if="tuiDesc">
                {{ tuiDesc }}
              </span>
              <div
                class="unfold"
                @click="showTotalIntro"
                v-if="showExchangeButton"
              >
                <p>{{ exchangeButton ? "展开" : "收起" }}</p>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendation",
  props: ["desc", "tuiDesc"],
  data() {
    return {
      showTotal: true,
      exchangeButton: true,
      showExchangeButton: false,
      rem: "",
    };
  },
  methods: {
    showTotalIntro() {
      this.showTotal = !this.showTotal;
      this.exchangeButton = !this.exchangeButton;
    },
    getRem() {
      // console.log("getRem");
      const defaultRem = 16;
      let winWidth = window.innerWidth;
      // console.log("winWidth:" + winWidth);
      let rem = (winWidth / 750) * defaultRem;
      return rem;
    },
  },
  watch: {
    desc: {
      immediate: true,
      handler() {
        this.$nextTick(
          function () {
            // 判断介绍是否超过四行
            let rem = parseFloat(this.getRem());
            // console.log("watch 中的rem", rem);
            if (!this.$refs.desc) {
              // console.log("desc null");
              return;
            }
            let descHeight = window
              .getComputedStyle(this.$refs.desc)
              .height.replace("px", "");
            // console.log("descHeight:" + descHeight);
            // console.log("如果 descHeight 超过" + 5.25 * rem + "就要显示展开按钮");
            if (descHeight > 5.25 * rem) {
              // console.log("超过了四行");
              // 显示展开收起按钮
              this.showExchangeButton = true;
              this.exchangeButton = true;
              // 不是显示所有
              this.showTotal = false;
            } else {
              // 不显示展开收起按钮
              this.showExchangeButton = false;
              // 没有超过四行就显示所有
              this.showTotal = true;
              // console.log("showExchangeButton", this.showExchangeButton);
              // console.log("showTotal", this.showTotal);
            }
          }.bind(this)
        );
      },
    },
  },
};
</script>


<style lang="scss" scope>
.container {
  margin-top: 5px;
  padding-top: 0;
  padding-bottom: 20.5px;
  border-bottom: none;
}
.pannel {
  background: white;
}

.merchant-desc {
  width: 100%;
  line-height: 21px;
}
// 展示全部的样式
.total-introduce {
  text-align: left;
  height: auto;
  overflow: hidden;
  font-size: 14px;
  color: #434343;
  //   margin: 10px;
  .unfold {
    display: block;
    z-index: 11;
    float: right;
    width: 40px;
    height: 21px;
    p {
      color: skyblue;
      transform: translateY(3px);
    }
  }
}
// 展示部分的样式
.detailed-introduce {
  font-size: 14px;
  color: #434343;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  .intro-content {
    // 最大高度设为4倍的行间距
    max-height: 84px;
    line-height: 21px;
    word-wrap: break-word;
    /*强制打散字符*/
    word-break: break-all;
    background: #ffffff;
    /*同背景色*/
    overflow: hidden;
    // 显示最后一行文字
    &:after,
    &:before {
      //   content: attr(aaa);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      color: #434343;
      // overflow: hidden;
    }
    // 把最后最后一行自身的上面三行遮住
    &:before {
      display: block;
      overflow: hidden;
      z-index: 1;
      max-height: 63px;
      background: #ffffff;
    }
    &:after {
      z-index: 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      height: 81px;
      /*截取行数*/
      -webkit-line-clamp: 4;
      text-overflow: ellipsis;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      /*行首缩进字符数，值为[(截取行数-1)*尾部留空字符数]*/
      text-indent: -12em;
      /*尾部留空字符数*/
      padding-right: 4em;
    }
    .unfold {
      display: block;
      z-index: 11;
      width: 43px;
      height: 21px;
      outline: 0;
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: white;
      p {
        color: pink;
      }
    }
  }
}
</style>