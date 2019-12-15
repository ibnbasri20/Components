import Vue from 'vue'
import Vuex from 'vuex'
import siswa from './siswa'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
    siswa
  }
})
