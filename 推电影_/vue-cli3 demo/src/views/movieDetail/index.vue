<template>
  <div>
    <HeadTop head-title="电影详情" go-back="true"></HeadTop>
    <MovieInfo :detail="detail" :detailList="detailList" />
    <Recommendation :desc="detail.desc" :tuiDesc="detail.tuiDesc" />
    <Actors :actorList="actorList" :director="director" />
    <SyRecommend :tuiDesc="detail.tuiDesc" />
    <TuiVideo :tuiVideos="tuiVideos" />
    <TuiImage :tuiImages="tuiImages" />
    <MovieChannels :watchList="watchList" />
    <MovieComments />
    <!-- <button ref="target">111</button> -->
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
import MovieInfo from "./movieInfo";
import Recommendation from "./recommendation";
import Actors from "./actors";
import SyRecommend from "./syrecommend";
import TuiVideo from "./tuiVideo";
import TuiImage from "./tuiImages";
import MovieChannels from "./movieChannels";
import MovieComments from "./movieComments";

import { mapGetters, mapState } from "vuex";
export default {
  name: "movieDetail",
  components: {
    HeadTop,
    MovieInfo,
    Recommendation,
    Actors,
    SyRecommend,
    TuiVideo,
    TuiImage,
    MovieChannels,
    MovieComments,
  },
  beforeCreate() {
    this.$store.dispatch("get_movie_detail_info");
  },
  computed: {
    ...mapGetters({
      detail: "detail",
      actorList: "actorList",
      director: "director",
      tuiImages: "tuiImages",
      tuiVideos: "tuiVideos",
      watchList: "watchList",
      detailList: "detailList",
    }),
  },
  
};
</script>

<style lang="scss">
</style>