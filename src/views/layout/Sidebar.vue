<template>
  <div>
    <el-menu  theme="dark" mode="vertical" default-active="$route.path" uniqque-opened   :collapse="!isCollapse">
      <SidebarItem :routesList="allowPage" ></SidebarItem>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  name: 'sidebar',
  components: {
    SidebarItem
  },
  data () {
    return {
      test: 'test2'
    }
  },
  computed: {
    isCollapse () {
      return this.sidebar.opened
    },
    ...mapGetters({
      allowPage: 'permission_routers',
      sidebar: 'sidebar'
    })
  },
  methods: {
  },

  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>


</style>
