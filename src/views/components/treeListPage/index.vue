<template>
  <div class="main-container">
    <h1>树状列表</h1> 
    <hr />
    <ul>
      <treeItem ref="treeItem" :model="newModel" @openPop="popOpen"></treeItem>
    </ul>
     
  </div>
</template>

<script>
const tree = {
  group_a: {
    name: 'group_a',
    children: {}
  }
}

import treeItem from 'components/treeItem'
export default {
  name: 'treeListPage',
  data () {
    return {
      newModel: tree,
      showPop: false,
      tempObj: null
    }
  },
  components: {
    treeItem
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'
ul
  padding 0
.main-container
  padding 15px
</style>