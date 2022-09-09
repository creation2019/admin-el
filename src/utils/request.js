/**
 * axios二次封装
 */
import axios from 'axios'
import router from '../router'
import { ElMessage } from 'element-plus'
// 创建axios实例对象，添加全局配置
const service = axios.create({
    baseURL: 'http://192.168.3.205',
    timeout: 8000
})

// 响应拦截
service.interceptors.response.use((res) => {

    const { status_code, data, message } = res.data
    if (status_code === 200) {
        return data
    } else if (status_code != 200) {
        console.log(res)
        // setTimeout(() => {
        //     router.push('/login')
        // }, 1000)
        ElMessage.error(message)
        return Promise.reject(message)
    }
})
/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function request (options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }

    return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request
