/*
  此文件为通过cookie验证用户是否已经登录的函数集合

*/

import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token' // 定义 用户登录token 的 记录cookie 的 键

// 获取 用户登录token 的 cookie
export function getToken () {
  return Cookies.get(TokenKey)
}

// 传入生成的token值来设置 用户登录的token cookie
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

// 删除 token 的 cookies
export function removeToken () {
  return Cookies.remove(TokenKey)
}
