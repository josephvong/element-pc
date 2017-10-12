<template>
  <div class="menu-wrapper">
    <template v-for="route in routesList">
      <router-link v-if="!route.hidden && route.noDropdown && route.children.length>0"
                   :to="route.path+'/'+route.children[0].path"
      >
        <el-menu-item :index="route.path+'/'+route.children[0].path">
          <i :class="route.icon"></i>
          <span>{{route.children[0].name}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu :index="route.name" v-if="!route.hidden && !route.noDropdown && route.children.length>0">

        <template slot="title">
          <i :class="route.icon"></i>
          <span>{{route.name}}</span>
        </template>

        <template v-for="child in route.children" v-if="!child.hidden">
          <SidebarItem class="nest-menu" v-if="child.children && child.children.length>0" :routesList="[child]" >
          </SidebarItem>

          <router-link v-else :to="route.path+'/'+child.path">
            <el-menu-item :index="route.path+'/'+child.path">
              <i v-if="child.icon" :class="child.icon"></i>
              <span>{{child.name}}</span>
            </el-menu-item>
          </router-link>
        </template>

      </el-submenu>

    </template>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'SidebarItem',
  props: {
    routesList: {
      type: Array
    }
  },
  computed: {
    /*
    ...mapGetters({
      routes: 'permission_routers'
    })
    */
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'

</style>
