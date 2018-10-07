import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
  deleteTasks: function (content, data) {
    data.successCallback = res => {
      content.commit('GETTASKS', res.data)
      console.log(res)
    }
    data.erorCallback = e => {
      console.log(e)
    }
    content.dispatch('delete', data)
  }
}
export default {
  actions
}
