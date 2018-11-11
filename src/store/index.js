import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
// import getters from './getters'
// vuex数据持久化插件
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState()],
  // getters,
  modules
})
