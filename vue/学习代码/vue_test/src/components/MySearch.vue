<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWords"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "MySearch",
  data() {
    return {
      keyWords: "",
    };
  },
  methods: {
    searchUsers() {
      //   https://github.com/search?q=dong&type=users
      this.$bus.$emit("upDateListData", {
        users: [],
        isFirst: false,
        isLoading: true,
        errMessage: "",
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWords}`).then(
        (res) => {
          console.log("请求成功");
          // 此时触发 bus身上的 事件名称
          this.$bus.$emit("upDateListData", {
            users: res.data.items,
            isFirst: false,
            isLoading: false,
            errMessage: "",
          });
        },
        (err) => {
          //   console.log('请求失败', err.message);
          this.$bus.$emit("upDateListData", {
            users: [],
            isFirst: false,
            isLoading: false,
            errMessage: err.message,
          });
        }
      );
    },
  },
};
</script>

<style>
</style>