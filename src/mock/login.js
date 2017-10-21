import { param2Obj } from '@/utils'

// 用户信息
const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  developer: {
    role: ['develop'],
    token: 'develop',
    introduction: '我是开发',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '工程师小王'
  }
}

export default {
  // 虚拟API  /login/login post 方式调用的 函数
  loginByUsername: (config) => {  // config 参数是 虚拟API 的 模拟 请求 实例
    // console.log(config.body) // post 方式 传送的数据 放在模拟请求(config)的body上
    const { username } = JSON.parse(config.body) // 结构赋值方式 获取 username 键的value
    return userMap[username]
  },

  // 虚拟API /user/info get 方式 调用的 函数
  getUserInfo: (config) => {
    const { token } = param2Obj(config.url) // 利用 param2Obj 将url上的 param 转化为 json ，然后用结构赋值 来赋值 token键
    if (userMap[token]) { // token 指向的用户存在，则返回用户信息
      return userMap[token]
    } else {
      return Promise.reject('error') // 否则输出 Promise.reject(err)
    }
  },

  logout: () => 'success'
}
