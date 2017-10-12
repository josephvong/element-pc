<template>
  <div class="menu-wrapper">
    <el-menu-item index="2">{{test}}</el-menu-item>
    <el-menu-item index="3">{{allowPage.length}}</el-menu-item>
    <!-- {{routesList.length}} -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SidebarItem',
  data () {
    return {
      test: 'test2'
    }
  },
  computed: {
    ...mapGetters({
      allowPage: 'permission_routers'
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'

</style>
