import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
  changeStatus: function (content, data) {
    data.data.isFinished = !data.data.isFinished
    data.successCallback = res => {
      content.commit('GETTASKS', res.data)
    }
    data.erorCallback = () => {}
    content.dispatch('post', data)
  }
}
export default {
  actions
}
