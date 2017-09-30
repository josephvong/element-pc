<template>
  <div class="login-container">
    <el-form>
      <h3 class="title">系统登录</h3> 
      <el-form-item>
       <!--  <el-input name="username" type="text" v-model="user" autoComplete="on" placeholder="邮箱" /> -->
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
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
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
.login-container
  height 100vh
  background $bg

</style>
