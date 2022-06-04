<template>
  <div class="container">
    <MyCategory title="美食">
      <img
        src="https://tse1-mm.cn.bing.net/th/id/R-C.06fca03bc47990a07f7abe465252060a?rik=jSSAXhify48CAA&riu=http%3a%2f%2fpic.ntimg.cn%2ffile%2f20160413%2f9885883_170813675002_2.jpg&ehk=TXieNujZeT6PQbO9zASoTkEqke5MIhEsB0JQZ4orhXE%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <!-- <ul>
        <li v-for="(item, id) in foods" :key="id">{{ item }}</li>
      </ul> -->
    </MyCategory>
    <MyCategory title="游戏">
      <ul>
        <li v-for="(item, id) in games" :key="id">{{ item }}</li>
      </ul>
    </MyCategory>
    <MyCategory title="电影">
      <video
        controls
        src="https://www.bilibili.com/video/BV1BZ4y147X9?t=27.9"
      ></video>
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from "./components/MyCategory.vue";
export default {
  name: "App",
  components: {
    MyCategory,
  },
  data() {
    return {
      foods: ["火锅", "小面", "拉面"],
      games: ["红色警戒", "穿越火线", "劲舞团"],
      films: ["《教父》", "《拆弹专家》", "《毛片》"],
    };
  },
};
</script>

<style lang="css">
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>

