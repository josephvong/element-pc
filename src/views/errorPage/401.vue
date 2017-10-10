<template>
<div class="error-page">
  <h1>401 no permission</h1>
  <el-button @click="back" >返回</el-button>
</div>
</template>

<script>
export default {
  name: 'errorpage',
  data () {
    return {
    }
  },
  methods: {
    back () { // 没有权限 点击返回按钮
      // 判断 当前 路由页面的参数‘noGoBack’的真假
      if (this.$route.query.noGoBack) { // noGoBack为真，表示进入此页面后，不能返回进入前的页面
        this.$router.push({path: '/dashboard'}) // 跳转回默认dashboard主界面
      } else {
        this.$router.go(-1) // 路由后退一步
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'

</style>
