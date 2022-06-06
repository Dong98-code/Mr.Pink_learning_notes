<template>
  <div>
    <div class="row">
      <MyBanner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 之前使用a标签跳转，  -->
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->

          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyBanner from './components/Banner.vue'
export default {
  name: "App",
  components:{MyBanner}
};
</script>



