<template>
  <div>
    <!-- typernav 此时不需要引入了 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <!-- 传参 -->
    <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"/>
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";

export default {
  name: "MyHome",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("home/getFloorList");
    // // 获取用户信息在首页展示
    // this.$store.dispatch('users/getUserInfo')
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floor,
    }),
  },
};
</script>

<style>
</style>