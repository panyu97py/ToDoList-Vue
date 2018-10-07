import Vue from 'vue'
import Vuex from 'vuex'
// import addTasks from './modules/addTasks'
// import localStorage from '@/components/Storage'
import axios from 'axios'
Vue.use(Vuex)

const actions = {
  post: function (content, data) {
    axios({
      method: 'post',
      url: data.url,
      data: data.data
    }).then(data.successCallback, data.erorCallback)
  },
  delete: function (content, data) {
    console.log(data)
    axios({
      method: 'delete',
      url: data.url,
      data: data.data
    }).then(data.successCallback, data.erorCallback)
  },
  get: function (content, data) {
    console.log(data.url)
    axios({
      method: 'get',
      url: data.url
      // data: data.data
    }).then(data.successCallback, data.erorCallback)
  }
}
export default {
  actions
}
