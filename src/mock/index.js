import Mock from 'mockjs'
import loginAPI from './login'

Mock.setup({
  timeout: '350-600'
})

// 登录模拟接口 ‘../login/login’ , 'post' 调用 loginAPI的 ‘loginByUsername’方法
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)

// 输出Mock
export default Mock
