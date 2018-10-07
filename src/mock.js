import Mock from 'mockjs'
var Tasks = [
  { id: 1, content: 'vuex', isFinished: false },
  { id: 2, content: 'Vue多入口多出口', isFinished: false },
  {
    id: 3,
    content: 'Vue:router的beforeEach与afterEach钩子函数',
    isFinished: false
  },
  { id: 4, content: 'Vue路由配置', isFinished: true },
  { id: 5, content: 'Vue 路由跳转及传参', isFinished: true },
  { id: 6, content: 'Vue生命周期函数mounted', isFinished: true }
]

Mock.mock('http://test.cn/TasksData/get', 'get', function (options) {
  // console.log('接收到前端的get请求')
  console.log(options)
  return Tasks
})
Mock.mock('http://test.cn/TasksData/add', 'post', function (options) {
  // console.log('add')
  console.log(options)
  Tasks.push(JSON.parse(options.body))
  return Tasks
})
Mock.mock('http://test.cn/TasksData/modify', 'post', options => {
  // console.log('change')
  let data = JSON.parse(options.body)
  Tasks = Tasks.map(val => {
    return val.id === data.id ? data : val
  })
  return Tasks
  // console.log(Tasks)
})
// , 'delete'
Mock.mock('http://test.cn/TasksData/delete', 'delete', function (options) {
  // console.log('已接受到删除请求')
  // console.log(options)
  let id = parseInt(JSON.parse(options.body).id) // 获取请求的id，将options.body转换为JSON对象
  console.log(id)
  Tasks = Tasks.filter(function (val) {
    // arr.filter过滤数组中的元素
    return val.id !== id // 过滤掉前台传过来的id对应的相应数据，并重新返回
  })
  return Tasks
})
