import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import api from './api'
import request from './utils/request'


import router from './router'

import store from '@/store/index'

import 'virtual:svg-icons-register'
import SvgIcon from '@/assets/svg/SvgIcon.vue'
// router.beforeEach((to, from, next) => {
//   if (to.path == '/login') {
//     next()
//   } else {
//     if (!localStorage.getItem("user")) {
//       next('/login')
//     } else {
//       next()
//     }
//   }
// })
const app = createApp(App)
app.config.globalProperties.$api = api
app.config.globalProperties.$request = request
app.component('svg-icon', SvgIcon)
app.use(store)
app.use(ElementPlus)
app.use(router).mount('#app')
