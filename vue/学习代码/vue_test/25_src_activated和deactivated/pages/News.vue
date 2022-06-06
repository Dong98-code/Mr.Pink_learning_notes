<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "MyNews",
  data() {
    return {
      opacity:1
    }
  },
  beforeDestroy() {
    // console.log('news 即将被销毁');
  },
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01; // 每隔 16ms 透明度 -0.01
      if (this.opacity <= 0) {
        this.opacity = 1
      }
    }, 16)
  },
  deactivated() {
    //没有激活的时候， 该定时器关闭
    clearInterval(this.timer);
  },
};
</script>
