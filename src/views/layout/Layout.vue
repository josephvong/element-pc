<template>
  <div class="app-wrapper">
    <Sidebar v-if="permission_routers" class="sidebar-container"></Sidebar>
    <div class="main-container">
      <Navbar></Navbar>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from './Sidebar'
import AppMain from './AppMain'
import Navbar from './Navbar'
export default {
  name: 'layout',
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters(['permission_routers'])
  },
  components: {
    Sidebar, AppMain, Navbar
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
@import '~stylus/mixin.styl'

.app-wrapper
  clearfix()
  position relative
  width 100%
  height 100%
  .sidebar-container
    position fixed;
    top 0
    left 0
    bottom 0
    width 200px
    height 100%
    overflow-y auto
    background #324157
    z-index 1001
    &:-webkit-scrollbar // -webkit-scrollbar 可以更改滚动条的样式
      display none
  .main-container
    min-height 100%
    margin-left 200px

</style>
