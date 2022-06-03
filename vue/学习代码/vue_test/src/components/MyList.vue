<template>
  <div class="row">
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width:100px"/>
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <h1 v-show="info.isFirst">欢迎使用!!!!</h1>
    <h1 v-show="info.isLoading">加载中.......</h1>
    <h1 v-show="info.errMessage">{{info.errMessage}}</h1>
  </div>
</template>

<script>
export default {
  name: "MyList",
  data() {
      return {
          info: {
            isFirst:true,
            isLoading:false,
            errMessage:"",
            users:[]

          }
      }
  },
  // 在需要数据的地方绑定一个自定义事件
  mounted() {
    //   this.$bus.$on('getUsers', (users)=>{
    //       // 回调函数
    //       console.log('获得了data', users);
    //       // 得到数据
    //       this.users = users;
    //   })
    this.$bus.$on('upDateListData', (dataObj) => {
        this.info = {...this.info, ...dataObj}; // 使用rest语法， 然后更新listdata
        console.log(this);
    })
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>