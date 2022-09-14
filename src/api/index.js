/**
 * api管理
 */
import request from '../utils/request'
export default {
  loginn (params) {
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
  // 系统管理
  getUserList (params) {
    return request({
      url: '/section/section_user_list',
      method: 'get',
      data: params,
    })
  },
  addDepartment (params) {
    return request({
      url: '/section/create_section',
      method: 'post',
      data: params,
    })
  },
  EditingeDpartment (params, section_id) {
    return request({
      url: `/section/update_section/${section_id}`,
      method: 'post',
      data: params,
    })
  },
  DeleteSectionend (section_id) {
    return request({
      url: `/section/delete_section/${section_id}`,
      method: 'post',
      data: {}
    })
  },
  CreatePosition (params) {
    return request({
      url: `/office/create_office`,
      method: 'post',
      data: params
    })
  },
  // 权限
  Addmenu (params) {
    return request({
      url: `/menu/create_menu`,
      method: 'post',
      data: params
    })
  },
  Getmeunlist () {
    return request({
      url: `/menu/menu_list`,
      method: 'get',
      data: {}
    })
  },
  //角色
  GetRolelist () {
    return request({
      url: `/role/role_list`,
      method: 'get',
      data: {}
    })
  },
  CreateRole (params) {
    return request({
      url: `/role/create_role`,
      method: 'post',
      data: params
    })
  }

}