<template>
  <el-breadcrumb class="app-levelbar" separator="/">
    <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
      <!--路由元件 redirect为 noredirect 或者 路由元为 match的最末端 ， 不做跳转-->
      <span v-if='item.redirect==="noredirect" || index==levelList.length-1' class="no-redirect">{{item.name}}</span>
      <!--否则，作为跳转链接-->
      <router-link v-else :to="item.redirect || item.path" >{{item.name}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'Levelbar',
  created () {
    this.getBreadcrumb()
  },
  data () {
    return {
      levelList: null
    }
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter((item) => { return item.name })
      // console.log(matched)
      const first = matched[0]
      if (first && (first.name !== '首页' || first.path !== '')) {
        matched = [{name: '首页', path: '/'}].concat(matched)
      }
      this.levelList = matched
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'
.app-levelbar
  display inline-block
  font-sise 14px
  line-height 50px
  margin-left 10px
  .no-redirect
    color: #97a8be;
    cursor: text; 
</style>