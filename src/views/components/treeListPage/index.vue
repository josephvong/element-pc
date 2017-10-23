<template>
  <div class="main-container">
    <h1>树状列表</h1>
    <ul>
      <treeList :model="model"></treeList>
    </ul>
    <hr />
    <ul>
      <treeItem :model="newModel"></treeItem>
    </ul>
  </div>
</template>

<script>
const treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}
const tree = {
  name: 'Tree',
  children: []
}
import treeList from 'components/treeList'
import treeItem from 'components/treeItem'
export default {
  name: 'treeListPage',
  data () {
    return {
      model: treeData,
      newModel: tree
    }
  },
  components: {
    treeList, treeItem
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