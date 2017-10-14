<template>
  <!-- <el-breadcrumb separator="/">
    <el-breadcrumb-item></el-breadcrumb-item>
  </el-breadcrumb> -->
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'Levelbar',
  data () {
    return {
      // LevelList: null
    }
  },
  methods: {
    getBreadcrumb (route) {
      let matched = route.matched
      console.log(matched)
    }
  },
  computed: {
    route () {
      return this.$route
    }
  },
  watch: {
    route (newRoute) {
      console.log('C')
      this.getBreadcrumb()
    }
  },
  created () {
    console.log(this.$router)
    // this.getBreadcrumb(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'

 
</style>