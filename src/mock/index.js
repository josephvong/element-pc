import Mock from 'mockjs'
import loginAPI from './login'

Mock.setup({
  timeout: '350-600'
})

// 登录模拟接口 ‘../login/login’ , 'post' 调用 loginAPI的 ‘loginByUsername’方法
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)

// 登录模拟接口 ‘../user/info’ , 'get' 调用 loginAPI的 ‘getUserInfo’方法
Mock.mock(/\/user\/info/, 'get', loginAPI.getUserInfo)

Mock.mock(/\/login\/logout/, loginAPI.loginout)

// 输出Mock
export default Mock
