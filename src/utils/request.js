import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
// import { getToken } from '@/utils/auth'
import api from '../server'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    config.url = api(config.url)
    if (
      store.getters.accessToken &&
      config.url.indexOf('check_token') === -1 &&
      config.url.indexOf('/oauth/token') === -1
    ) {
      config.headers['Authorization'] = 'Bearer ' + store.getters.accessToken // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (response.status !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   MessageBox.confirm(
      //     '你已被登出，可以取消继续留在该页面，或者重新登录',
      //     '确定登出',
      //     {
      //       confirmButtonText: '重新登录',
      //       cancelButtonText: '取消',
      //       type: 'warning'
      //     }
      //   ).then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload() // 为了重新实例化vue-router对象 避免bug
      //     })
      //   })
      // }
      return Promise.reject(new Error('error'))
    } else {
      return response.data
    }
  },
  error => {
    Message({
      message: error.response.data.description
        ? error.response.data.description
        : error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
