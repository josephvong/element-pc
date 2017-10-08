<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="right" >
      <h3 class="title">系统登录</h3>

      <el-form-item prop="username">
       <em class='iconfont icon-user'></em>
       <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="邮箱" />
       <!--  -->
      </el-form-item>

      <el-form-item prop="password">
       <el-input name="password" type="text" v-model="loginForm.password" autoComplete="on" placeholder="密码" />
       <em class='iconfont icon-password'></em>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

// import { loginByUsername } from '@/api/login'
import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'login',
  data () {
    // 定义一个函数 定义有效用户名 （规则，值，回调）
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) { // 不合法用户名
        callback(new Error('请输入正确用户名')) // 执行 传入错误对象的回调
      } else {
        callback()
      }
    }
    // 定义一个函数，定义有效 密码
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        // el-form 的 校验规则 validator 传入 一个函数 进行校验
        username: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePassword}]
      }
    }
  },
  methods: {
    /* handleLogin () {
      loginByUsername(this.user, this.password).then((res) => {
        console.log(res)
      })
    } */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
@import '~stylus/mixin.styl'
$bg = #2d3a4b
$dark_gray = #889aa4

.login-container
  height 100vh
  background $bg
  input:-webkit-autofill
    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
    -webkit-text-fill-color: #fff !important;
  input
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: $light_gray;
    height: 60px;  
  .el-input
    display inline-block
    height 60px
    width 85%
  .iconfont
    padding 6px 5px 6px 15px
    color $dark_gray
    vertical-align middle
    width 30px
    display inline-block
    font-size 20px
  .title
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  .login-form
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
    border 1px solid red
  .el-form-item
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;

    
    /*.tips
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;*/

</style>
