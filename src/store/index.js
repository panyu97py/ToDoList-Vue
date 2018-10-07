import Vue from 'vue'
import Vuex from 'vuex'
import axios from './modules/axios'
import getTasks from './modules/getTasks'
import addTasks from './modules/addTasks'
import deleteTasks from './modules/deleteTasks'
import changeStatus from './modules/changeStatus'
import state from './modules/state'
import test from './modules/test'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    axios: axios,
    getTasks: getTasks,
    addTasks: addTasks,
    deleteTasks: deleteTasks,
    changeStatus: changeStatus,
    state: state,
    test: test
  }
})
