import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import movieDetail from './movieDetail'
import movieLsit from './movieList'
export default new Vuex.Store({
  modules: {
    movieDetail,
    movieLsit
  }
})