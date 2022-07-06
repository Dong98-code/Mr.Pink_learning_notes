<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p v-if="!$store.state.users.nickName">
            <span>请</span>
            <!-- <a href="###">登录</a> -->
            <router-link to="/login">登录</router-link>

            <router-link class="register" to="/register">注册</router-link>

            <!-- <a href="###" class="register">免费注册</a> -->
          </p>
          <p v-else>
            <a>{{ $store.state.users.nickName }}</a>
            <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center">我的订单</router-link>
          <router-link to="/shopcar">我的购物车</router-link>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <a class="logo" title="尚品汇" href="###" target="_blank">
          <img src="./images/logo.png" alt="" />
        </a>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      let location = {
        name: "search",
        params: { keyword: this.keyword || undefined },
      };
      // console.log(this.$route.query);
      // console.log(this.$route.hasOwnProperty('query')); // 含有该属性，该属性为空对象
      // console.log(JSON.stringify(this.$route.query) === '{}');
      if (JSON.stringify(this.$route.query) !== "{}") {
        // 不为空
        location.query = this.$route.query;
      }
      // 跳转
      console.log(location);
      // console.log(this.$route.params);
      this.$router.push(location);
    },
    logout() {
      //派遣action退出登录
      this.$store.dispatch("users/logout");
    },
  },
  mounted() {
    // 挂载 清除
    //事件被触发之后，执行相对应的回调函数 ，指控 keyword,箭头函数并不改变this
    this.$bus.$on("clear", () => {
      this.keyword = "";
    });
  },
};
</script>

<style scope lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>