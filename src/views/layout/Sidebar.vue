<template>
  <div>
    <el-menu theme="dark" mode="vertical" >
      <!-- <Test test="abc"></Test> -->
      <SidebarItem :routesList="allowPage" ></SidebarItem>
    </el-menu>
  </div>
    <!-- <sidebar-item v-if="permission_routers" :routesList="permission_routers">
    </sidebar-item> -->
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import Test from './Test'
export default {
  name: 'sidebar',
  components: {
    SidebarItem,
    Test
  },
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
  },

  mounted () {
    console.log(this.allowPage)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'

</style>
