import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('views/Login/index.vue')
  },
  {

    name: 'home',
    path: '/admin',
    meta: {
      title: '首页'
    },
    redirect: '/system',
    component: () => import('views/Layout/index.vue'),
    children: [
      {
        name: 'project',
        path: '/project',
        meta: {
          title: '项目'
        },
        component: () => import('components/Project/Project.vue')
      },
      {
        name: 'system',
        path: '/system',
        meta: {
          title: '系统管理'
        },
        component: () => import('components/System/index.vue')
      }
    ],
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router