<template>
  <div class="main-container">
    <h1>树状列表</h1> 
    <hr />
    <ul>
      <treeItem ref="treeItem" :model="newModel" @openPop="popOpen"></treeItem>
    </ul>
    <div v-show="showPop" class="pop">
      <div class="title">输入默认名</div>
      <div class="set">
        <input ref="popInput" type="text" placeholder="输入默认组名" />
      </div>
      <div class="btn">
        <a @click="confirmPop">确认</a>
        <a @click="clearPop">取消</a>
      </div>
    </div>
  </div>
</template>

<script>
const tree = {
  group_a: {
    name: 'group_a',
    children: {}
    /*
    children: {
      sub_group_a: {
        name: 'sub_group_a',
        children: {
          a: {
            name: 'a',
            children: null
          },
          b: {
            name: 'b',
            children: null
          }
        }
      },
      sub_group_b: {
        name: 'sub_group_b',
        children: null
      }
    }
    */
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
    popOpen (model) {
      this.tempObj = model || this.newModel
      this.showPop = true
    },
    clearPop () {
      this.$refs.popInput.value = ''
      this.showPop = false
    },
    confirmPop () {
      if (this.$refs.popInput.value) {
        this.$refs.treeItem.insertItem(this.tempObj, this.$refs.popInput.value)
        this.$refs.popInput.value = ''
        this.showPop = false
      }
    }
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
  .pop
    position fixed
    left 50%
    top 30%
    margin-left -100px
    width 200px
    height 90px
    text-align center
    border 1px solid black
    //background white
    .title
      line-height 30px
    .set
      height 30px
    .btn
      height 30px
      a
        display inline-block
        margin 0 10px
</style>