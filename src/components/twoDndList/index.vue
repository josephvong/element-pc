<template>
<div class="twoDndList"> 
  <div class="twoDnddList-list">
    <h3>list1Title</h3>

    <div class="list-complete-item">
      <div class="list-complete-item-handle">[黄吉平] 阿斯顿到底发生发生的地方</div>
      <div style="position:absolute;right:0px;">
        <span style="float: right ;margin-top: -20px;margin-right:5px;">
          <i class="el-icon-delete"></i>
        </span>
      </div>
    </div>

  </div>
  <div class="twoDnddList-list">
    <!-- <h3>{{list1Title}}</h3> -->
  </div>
</div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'twoDndList',
  props: {
    list1: {
      type: Array,
      default: []
    },
    list2: {
      type: Array,
      default: []
    },
    list1Title: {
      type: String,
      default: 'list1'
    },
    list2Title: {
      type: String,
      default: 'list2'
    },
    width1: {
      type: String,
      default: '48%'
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
    draggable
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'
.twoDndList
  background white
  padding-bottom 40px
  &:after
    content ''
    display table
    clear both
  .twoDnddList-list
    float left
    padding-bottom 30px
    &:first-of-type
      margin-right 2%
    .drag-area
      margin-top: 15px;
      min-height: 50px;
      padding-bottom: 30px;
      .list-complete-item
        cursor: pointer;
        position: relative;
        font-size: 14px;
        padding: 5px 12px;
        margin-top: 4px;
        border: 1px solid #bfcbd9;
        transition: all 1s;
        .list-complete-item-handle
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-right: 50px;
          
</style>