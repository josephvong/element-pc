<template>
  <el-menu class='navbar'>
   <Hamburger class="hamburger-container" @hamburgerToggle="toggleSideBar"  :isActive="sidebar.opened"></Hamburger>
   <Levelbar></Levelbar>
   <Tabview></Tabview> 
  </el-menu> 
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from 'components/Hamburger'
import Levelbar from './Levelbar'
import Tabview from './Tabview'
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('ToggleSideBar')
    }
  },
  components: {
    Hamburger, Levelbar, Tabview
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
@import '~stylus/mixin.styl'
.navbar
  height 50px
  line-height 50px
  border-radius 0px !important
  .hamburger-container
    line-height 58px
    height 50px
    float left
    padding 0 10px
 
</style>
