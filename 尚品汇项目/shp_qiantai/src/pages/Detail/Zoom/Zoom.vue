<template>
  <div class="spec-preview">
    <img :src="imgobj.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big" >
      <img :src="imgobj.imgUrl" ref="big"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["imageList"],
  data() {
    return {
      curIndex: 0,
    };
  },
  computed: {
    imgobj() {
      return this.imageList[this.curIndex] || {};
    },
  },
  mounted() {
    this.$bus.$on("sendIndex", (index) => {this.curIndex = index});
  },
  methods: {
    handler(event) {
      let mask = this.$refs.mask;
      let bigImg = this.$refs.big;
      let left = event.offsetX - mask.offsetWidth/2;
      let top = event.offsetY - mask.offsetHeight/2
      if (left < 0) left = 0;
      if (left > mask.offsetWidth) left = mask.offsetWidth;
      if (top < 0) top = 0;
      if (top > mask.offsetHeight) top = mask.offsetHeight;
      mask.style.left = left + 'px';
      mask.style.top = top + 'px';
      bigImg.style.left = -2*left + 'px';
      bigImg.style.top = -2*top+'px';
    }
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>