<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" >
      <h3 class="title">系统登录</h3>

      <el-form-item prop="username">
       <em class='iconfont icon-user'></em>
       <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="邮箱" />
      </el-form-item>

      <el-form-item prop="password">
       <em class='iconfont icon-password'></em>
       <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on" placeholder="密码" />
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>

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
        username: '',
        password: ''
      },
      loginRules: {
        // el-form 的 校验规则 validator 传入 一个函数 进行校验
        username: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePassword}]
      },
      loading: false
    }
  },
  methods: {
    // 登录按钮触发函数
    handleLogin () {
      this.loading = true
      // loginForm组件调用validate()方法进行验证后的回调（参考ELE_UI手册 ）
      this.$refs.loginForm.validate((valid) => { // 验证回调的参数为布尔值（是否成功）
        if (valid) {
          this.$store.dispatch('LoginByUsername', this.loginForm).then((res) => {
            this.loading = false
            console.log(res)
            this.$router.push({path: '/'})
          }).catch(() => {
            this.loading = false
          })
        } else {
          this.loading = false
          alert('失败')
          return false
        }
      })
    }
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
  .el-input
    display inline-block
    width 85%
  .iconfont
    padding 6px 10px 6px 10px
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
