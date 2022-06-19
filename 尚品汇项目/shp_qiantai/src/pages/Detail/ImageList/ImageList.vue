<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, index) in imageList" :key="img.id">
        <img :src="img.imgUrl" :class="{active:index===curIndex}" @click="changeCurIndex(index)"/>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
export default {
 
  name: "ImageList",
  props: ["imageList"],

  watch: {
    imageList: {
      // 监听数据， 可以保证数据一定， 不能保证 v-for完成，当v-for完成时， nextTick
      //在下次dom循环结束之后 延迟回调， 在修改数据之后立刻执行这个方法；获取更新后
      immediate: true,
      handler() {
        this.$nextTick(() => {
          let mySwiper = new Swiper(this.$refs.cur, {
            loop: false, // 循环模式
            // 前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            slidesPerView:3
          });
        });
      },
    },
  },
  data() {
    return {
      curIndex:0
    }
  },
  methods: {
    changeCurIndex(index) {
      this.curIndex = index;
      this.$bus.$emit('sendIndex', index)
    }
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      // &:hover {
      //   border: 2px solid #f60;
      //   padding: 1px;
      // }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>