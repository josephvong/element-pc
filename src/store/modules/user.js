/*
  登录用户全局数据模块
*/
import { loginByUsername, getUserInfo } from '@/api/login'
import { setToken } from '@/utils/auth'

const user = {
  state: {
    user: '', // 用户名（固定）
    status: '', // 状态（可变）
    roles: [],
    token: '', // 登录token（可变，记录在cookie内）
    name: '', // 用户显示名 （可变）
    avatar: '', // 头像
    introduction: '', // 简介
    code: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_NAME: (state, name) => {
      state.name = name
    }

  },

  actions: {
    // aciton 定义一个(可在外部调用的)函数（LoginByUsername）用于更改user模块里的数据实现登陆
    LoginByUsername ({commit, state}, userInfo) { // 参数为{commit} 和 userInfo(用户信息)
      const username = userInfo.username.trim() // 用户名字符串清除前后空格
      return new Promise((resolve, reject) => {
        // 通过 模拟API 异步获取 用户信息
        loginByUsername(username, userInfo.password).then((res) => {
          if (res.data) {   // res.data 存在 表示为有效用户
            const data = res.data
            setToken(data.token) // 登录后把用户token记录为 cookie
            commit('SET_TOKEN', data.token) // 设置 全局数据 token
            resolve(res.data)
          } else {
            reject('用户不存在')
          }
        }).catch((err) => {
          reject(err)
        })
      })
    },

    GetUserInfo ({commit, state}) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then((res) => { // 将state的token数据作为参数 调用getUserInfo()异步获取用户信息
          const data = res.data
          // 根据 res.data 设置 全局store的 userInfo数据
          commit('SET_NAME', data.name)
          commit('SET_INTRODUCTION', data.introduction)
          commit('SET_AVATAR', data.avatar)
          commit('SET_ROLES', data.roles)
          resolve(data)  // 并将res通过resolve(res)函数进行输出（可以在组建中调用GetUserInfo()直接使用用户信息）
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
