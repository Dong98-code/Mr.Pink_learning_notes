<template>
  <div>
    搜索页面
    <h2>--params{{ this.$route.params.keyword }}</h2>
    <h2>--query{{ this.$route.query }}</h2>
    <TypeNav/>
    <MyFooter/>

  </div>
</template>

<script>
import MyFooter from "@/components/Footer";
export default {
  name: "MySearch",
  components: {
    MyFooter,
  },
};
</script>

<style>
</style>