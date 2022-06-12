/* 
专门请求mock接口的axios封装
*/
import axios from 'axios'

const mockAjax = axios.create({
  baseURL: "/mock", // 路径前缀
  timeout: 5000 // 请求超时时间
})

mockAjax.interceptors.request.use((config) => {
  return config
})

mockAjax.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default mockAjax

