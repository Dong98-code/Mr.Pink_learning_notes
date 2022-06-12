<template>
  <div>
    <MyHeader></MyHeader>
    <router-view></router-view>
    <!-- 登录注册和搜索隐藏footer -->
    <!-- <MyFooter v-show="isShowFooter"/> -->
    <MyFooter v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import MyHeader from "./components/Header/index.vue";
import MyFooter from "./components/Footer/index.vue";
export default {
  name: "app",
  components: {
    MyHeader,
    MyFooter,
  },
  computed:{
    // isShowFooter() {
    //   return this.$route.path === '/home' || this.$route.path === '/search'
    // }
  },
  mounted() {
    this.$store.dispatch("home/categoryList");
    
  },
};
</script>

<style>
</style>