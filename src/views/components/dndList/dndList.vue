<template>
<div> 
  <div class="main-container"> 
    <dndList :list1="list1" :list2="list2"></dndList>
  </div>
</div>
</template>

<script>
import { fetchList } from '@/api/article'
import dndList from 'components/twoDndList'
export default {
  data () {
    return {
      list1: [{content: 'a1', id: 'a1'}, {content: 'b1', id: 'b1'}, {content: 'c1', id: 'c1'}, {content: 'd1', id: 'd1'}, {content: 'e1', id: 'e1'}, {content: 'f1', id: 'f1'}],
      list2: [{content: 'a1', id: 'a1'}, {content: 'b1', id: 'b1'}, {content: 'c1', id: 'c1'}]
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