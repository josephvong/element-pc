import axios from 'axios'
import { Message } from 'element-ui'

// 创建axios 实例
const fetch = axios.create({
  baseURL: process.env.BASE_API, // api 的 baseURL
  timeout: 5000  // 请求超时时间
})

// request 拦截器 (对请求的数据进行预处理)
fetch.interceptors.request.use((config) => {
  // 对请求数据进行处理
  // coding...
  return config
}, (err) => {
  console.log(err)
  Promise.reject(err)  // 直接执行 promise 回调对象的 rej函数
})

fetch.interceptors.response.use(
  (response) => { return response },
  (err) => {
    console.log('err' + err)
    Message({
      message: err.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(err)
  }
)

export default fetch
