import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  newTask: {},
  Tasks: [],
  Url: {
    get: 'http://test.cn/TasksData/get',
    add: 'http://test.cn/TasksData/add',
    modify: 'http://test.cn/TasksData/modify',
    delete: 'http://test.cn/TasksData/delete'
  },
  isShowed: false
}
const mutations = {
  GETTASKS: function (state, data) {
    state.Tasks = data
    let length = state.Tasks.length
    if (length > 0) state.isShowed = true
    else state.isShowed = false
  },
  NEWTASKS: function (state, data) {
    state.newTask = data
  }
}
export default {
  state,
  mutations
}
