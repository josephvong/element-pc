<template>
  <li class="">
    <!--首层的显示div：若为 folder形式，使用 folder的样式(bold) -->
    <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">{{model.name}}<span>+</span></div>
    <!--子级 以递归组件形式 来生成，isFolder(传入的子model数据有children) 时，递归渲染子级Item -->
    <ul v-show="open" v-if="isFolder"> 
      <treeList class="item" v-for='m in model.children' :model = 'm'></treeList> 
      <li class="add" @click="addChild">+</li> <!--文件夹Item 子级中 最后一项为 ‘+’ 添加按钮列（点击给 当前model的children内添加一项数据）-->
    </ul>
  </li>
</template>

<script>
export default {
  name: 'treeList',
  props: {
    model: {
      type: Object
    }  // 传入的数据
  },
  data () {
    return {
      open: false // 是否展开
    }
  },
  computed: {
    isFolder () { // 判断 当前项 是否文件夹（可展开）
      // return this.model.children && this.model.children.length
      if (this.model.children && this.model.children.length) { // model对象 有children键，且children数组为非空数组
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    toggle () { // 切换Item的为 可扩展 的 函数 （从不可展开(单向)设置为可展开）
      if (this.isFolder) { // 如果当前 Item 不为 folder(可拓展)
        this.open = !this.open  // 切换 当前Item的open 属性
      }
    },
    changeType () { // 将正常Item(单向)转换为
      if (!this.isFolder) {
        this.$set(this.model, 'children', []) // 相当于 使用 Vue.set() 可以直接对 组件data中的数据(model)直接进行修改
        this.addChild() // 调用 addChild() 方法，将转为文件夹类型(可拓展有子集)的Item 添加一个子集
        this.open = true // 设置 此 Item 为 展开状态
      }
    },
    addChild () {
      this.model.children.push({name: 'new stuff'})
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'
.bold
  font-weight bold
.item
  cursor pointer
</style>