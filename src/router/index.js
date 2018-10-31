import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overview',
      component: () => import('@/views/app/index')
    }
  ]
  // routes: [
  //   {
  //     path: '/',
  //     name: 'tasklist',
  //     component: () => import('@/components/TaskList'),
  //     children: [
  //       {
  //         path: '/',
  //         name: '/allTask',
  //         component: () => import('@/components/AllTask')
  //       },
  //       {
  //         path: '/allTask',
  //         name: 'allTask',
  //         component: () => import('@/components/AllTask')
  //       },
  //       {
  //         path: '/isFinishedTask',
  //         name: 'isFinishedTask',
  //         component: () => import('@/components/IsFinishedTask')
  //       },
  //       {
  //         path: '/notFinishedTask',
  //         name: 'notFinishedTask',
  //         component: () => import('@/components/NotFinishedTask')
  //       },
  //       {
  //         path: '/testTask',
  //         name: 'testTask',
  //         component: () => import('@/components/testTask')
  //       }
  //     ]
  //   }
  // ]
})
