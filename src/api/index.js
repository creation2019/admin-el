/**
 * api管理
 */
import request from '../utils/request'
export default {
  login (params) {
    return request({
      url: '/auth/login',
      method: 'post',
      data: params,
    })
  },
  signOut () {
    return request({
      url: '/auth/logout',
      method: 'post',
      data: {},
    })
  },
  getUserinfo () {
    return request({
      url: '/admin/index',
      method: 'get',
      data: {},
    })
  },
  userSubmit (params) {
    return request({
      url: '/users/operate',
      method: 'post',
      data: params,
      mock: false
    })
  },
  menuSubmit (params) {
    return request({
      url: '/menu/operate',
      method: 'post',
      data: params,
      mock: false
    })
  }
  ,
  // 系统管理
  getUserList (params) {
    return request({
      url: '/section/section_user_list',
      method: 'get',
      data: params,
    })
  },
}