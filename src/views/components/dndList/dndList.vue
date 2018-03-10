<template>
<div> 
  <div class="main-container"> 
    <dndList></dndList>
  </div>
</div>
</template>

<script>
import { fetchList } from '@/api/article'
import dndList from 'components/twoDndList'
export default {
  data () {
    return {
    }
  },
  components: {
    dndList
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      fetchList().then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'
.main-container
  padding 15px
</style>