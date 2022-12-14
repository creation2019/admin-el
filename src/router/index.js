import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('views/Login/index.vue')
  },
  {

    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    redirect: '/workbench',
    component: () => import('views/Layout/index.vue'),
    children: [
      {
        name: 'workbench',
        path: '/workbench',
        meta: {
          title: '工作台'
        },
        component: () => import('components/Workbench/index.vue'),
      },
      {
        name: 'project',
        path: '/project',
        meta: {
          title: '项目'
        },
        component: () => import('components/Project/index.vue')
      },
      {
        name: 'system',
        path: '/system',
        meta: {
          title: '系统管理'
        },
        component: () => import('@/components/System/index.vue')
      },
      {
        name: 'test',
        path: '/test',
        meta: {
          title: '测试管理'
        },
        component: () => import('@/components/Test/index.vue')
      }
    ],
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router