<template>
<div class="twoDndList"> 
  <div class="twoDnddList-list" :style="{width:width1}">
    <h3>{{list1Title}}</h3>
    
    <draggable :list="list1" class="drag-area" :options="{group:'article'}">
      <div class="list-complete-item" v-for="item in list1" :key="item.id">
        <div class="list-complete-item-handle">{{item.content}}</div>
        <div class="list-complete-item-delete">
          <span style="float: right ;margin-top: -20px;margin-right:5px;"  @click="deleteEle(item)">
            <i class="el-icon-delete"></i>
          </span>
        </div>
      </div>
    </draggable>
  </div>

  <div class="twoDnddList-list" :style="{width:width2}">
    <h3>{{list2Title}}</h3>
    <draggable :list="filterList2" class="drag-area" :options="{group:'article'}">
      <div class="list-complete-item"  v-for="item in filterList2" :key="item.id">
        <div class="list-complete-item-handle2" @click="pushEle(item)">{{item.content}}</div>
      </div>
    </draggable>
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
    },
    width2: {
      type: String,
      default: '48%'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    filterList2 () {
      return this.list2.filter((v) => {
        if (this.isNotInList1(v)) {
          return v
        }
        return false
      })
    }
  },
  components: {
    draggable
  },
  created () {
  },
  methods: {
    // 判断 列表 不在 List1 中
    isNotInList1 (v) {
      return this.list1.every((k) => { v.id !== k.id })
    },

    isNotInList2 (v) {
      return this.list2.every((k) => { v.id !== k.id })
    },

    deleteEle (ele) {
      for (const item of this.list1) {  // 遍历list1 将选中的 item 删除
        if (item.id === ele.id) {
          const index = this.list1.indexOf(item)
          this.list1.splice(index, 1)  // 切割对应的item
          break
        }
      }
      // 将list1 删除的 插入到 list2
      if (this.isNotInList2(ele)) {
        this.list2.unshift(ele)
      }
    },

    pushEle (ele) { // 将list2 的 item 放入到 list1
      this.list1.push(ele)
    }
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
        position relative
        cursor: pointer;
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
        .list-complete-item-handle2
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-right: 20px;
        .list-complete-item-delete
          position absolute
          right 0%   
        .sortable-chosen 
          background: #4AB7BD;
        .sortable-ghost
          background: #30B08F;
        
.list-complete-enter, .list-complete-leave-active
  opacity: 0;
      
        


           
</style>