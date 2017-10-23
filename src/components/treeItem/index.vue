<template>
  <li class="tree-item">
    <div class="main">
      <i class="express" @click="toggleSub">+</i>
      <strong v-show="!titleEdit" @click="toggleEdit">{{model.name}}</strong>
      <input v-show="titleEdit"  @blur="saveEdit($event)" type="text" v-model="model.name" />
      <span @click="addItem">+</span>
    </div>
    <ul class="sub" v-show="subShow">
      <li>AAA</li>
      <li>AAA</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'treeItem',
  props: {
    model: {
      type: Object
    }  // 传入的数据
  },
  data () {
    return {
      titleEdit: false,
      subShow: false
    }
  },
  computed: {
  },
  methods: {
    toggleEdit () {
      this.titleEdit = !this.titleEdit
    },
    saveEdit (event) {
      if (this.model.name) {
        this.titleEdit = false
      }
    },
    addItem () {
      console.log(this.model)
    },
    toggleSub () {
      this.subShow = !this.subShow
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'
ul
  padding 0
li
  padding 0
  list-style none
i
  font-style normal
.tree-item
  color black
  .main
    background yellow
  
    
</style>