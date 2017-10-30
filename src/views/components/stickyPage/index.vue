<template>
<div>
  <sticky className="sub-navbar"> <!--此处定义的 sub-navbar 是在index.styl中定义好的一个样式类-->
  </sticky>
  <div class="main-container"> 
    <ul>
       <li v-for="i in 100">{{i}}占位</li>
     </ul> 
  </div>
</div>
</template>

<script>
import Sticky from 'components/Sticky'
export default {
  data () {
    return {
    }
  },
  components: {
    Sticky
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'
.main-container
  padding 15px
</style>