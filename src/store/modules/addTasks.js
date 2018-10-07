import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
  dataArray: function (content, data) {
    let Tasks = content.rootState.state.Tasks
    var taskPushId = () => {
      if (Tasks.length === 0) {
        return 1
      } else {
        const id = Tasks[Tasks.length - 1].id + 1

        return id
      }
    }
    var taskPush = data => {
      return {
        id: taskPushId(),
        content: data,
        isFinished: false
      }
    }
    content.commit('NEWTASKS', taskPush(data))
  },
  addData: function (content, data) {
    content.dispatch('dataArray', data.data)
    data.data = content.rootState.state.newTask
    data.successCallback = res => {
      content.commit('GETTASKS', res.data)
    }
    data.erorCallback = e => {
      console.log('错误信息：' + e)
    }
    content.dispatch('post', data)
  }
}
export default {
  actions
}
