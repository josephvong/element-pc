<template>
  <el-menu mode="vertical" theme="dark">
    <Test></Test>
   <!--  <Test></Test> -->
    <!-- <sidebar-item v-if="permission_routers" :routesList="permission_routers">
    </sidebar-item> -->
  </el-menu>
</template>

<script>
// import { mapGetters } from 'vuex'
// import SidebarItem from './SidebarItem'
import Test from './Test'
export default {
  name: 'sidebar',
  components: {
    // SidebarItem,
    Test
  },
  data () {
    return {
      test: 'test2'
    }
  },
  computed: {

    // ...mapGetters(['permission_routers'])
  },
  methods: {
    showRouter () {
      console.log('aaa')
    }
  },

  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'

</style>
