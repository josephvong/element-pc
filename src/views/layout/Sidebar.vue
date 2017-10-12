<template>
  <div>
    <el-menu theme="dark" >
       
        <SidebarItem v-if="allowPage" ></SidebarItem> 
      
     <!--  <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item index="1-1">{{allowPage.length}}</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>

        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
 -->
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
