<template>
  <div class="login-container">
    <el-form>
      <h3 class="title">系统登录</h3>
      el-form
      <el-form-item>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { loginByUsername } from '@/api/login'
export default {
  name: 'login',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      loginByUsername(this.user, this.password).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
@import 'src/styles/mixin'
$bg = #2d3a4b
.login-container
  height 100vh
  background $bg

</style>
