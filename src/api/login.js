import fetch from '@/utils/fetch'

export function loginByUsername (username, password) {
  const data = {  // 将参数 封装到一个 data对象里面
    username,
    password
  }
  return fetch({
    url: '/login/login', // 调用 mock 模拟的 ‘/login/login’ URL
    method: 'post', // 使用post 方法
    data // 把 user pw 发给 mock
  })
}

export function getUserInfo (token) {
  const params = {
    token
  }

  return fetch({
    url: '/user/info',
    method: 'get',
    params
  })
}
