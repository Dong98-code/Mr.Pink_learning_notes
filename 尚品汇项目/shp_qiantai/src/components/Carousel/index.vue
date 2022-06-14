<template>
  <div class="swiper-container" id="floor1Swiper" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="c in list" :key="c.id">
        <img :src="c.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";

import Swiper from "swiper";
export default {
  name: "Carousel",
  components: { Swiper },
  props: ["list"], // 父亲传入数据
  watch: {
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          let mySwiper = new Swiper(this.$refs.cur, {
            loop: true, // 循环模式

            // 分页器
            pagination: {
              el: ".swiper-pagination",
            },

            // 前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>