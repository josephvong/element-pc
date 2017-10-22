<template>
  <div class="main-container">
    <h1>树状列表</h1>
    <ul>
      <treeList></treeList>
    </ul>
  </div>
</template>

<script>
import treeList from 'components/treeList'
export default {
  name: 'treeListPage',
  data () {
    return {
    }
  },
  components: {
    treeList
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