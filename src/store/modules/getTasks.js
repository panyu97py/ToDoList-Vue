import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const actions = {
  getData (content, data) {
    data.successCallback = res => {
      let data = res.data
      console.log(data)
      content.commit('GETTASKS', data)
    }
    data.erorCallback = e => {
      console.log('错误信息：' + e)
    }
    console.log(data)
    content.dispatch('get', data)
  }
}
export default {
  actions
}
