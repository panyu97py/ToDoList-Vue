import axios from './axios'
import getTasks from './getTasks'
import addTasks from './addTasks'
import deleteTasks from './deleteTasks'
import changeStatus from './changeStatus'
import state from './state'
import test from './test'
// app 模块
import app from './app'

// export default {
//   axios: axios,
//   getTasks: getTasks,
//   addTasks: addTasks,
//   deleteTasks: deleteTasks,
//   changeStatus: changeStatus,
//   state: state,
//   test: test
// }
export default {
  axios,
  getTasks,
  addTasks,
  deleteTasks,
  changeStatus,
  state,
  test,
  // app 模块
  app
}
