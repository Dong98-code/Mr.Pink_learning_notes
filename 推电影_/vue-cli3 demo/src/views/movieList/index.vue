<template>
  <div>
    <HeadTop head-title="电影列表" go-back="true"></HeadTop>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
import {mapGetters} from 'vuex'
export default {
    name:"movieList",
    components:{HeadTop},
    mounted() {
        this.$store.dispatch("get_movie_list_info");
        
    },
    computed: {
        ...mapGetters({movieList:'movieList'}) // 此时已经获取到数据了
    }

}
</script>

<style>

</style>