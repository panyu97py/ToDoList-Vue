import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  test: 'this is first test mesage'
}
const actions = {
  console1: content => {
    console.log(state.test)
  },
  console2: content => {
    console.log('this is second test message')
  }
}
export default {
  state,
  actions
}
