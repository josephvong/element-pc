<template>
<ul class="tree">
  <li class="item" v-for = "(val, key) in model" :key="key">
    <input type="checkbox" :id="key" style="display:none">      
    <label class="default-name" :for="key">{{key}}</label>
    <span class="del-item" @click="deleteItem(key)">删</span>
    <div class="main"> 
      <div class="edit">显示名: 
        <span v-show="!nameEdit && val.name" @dblclick="switchEdit">{{val.name}}</span>
        <input v-show="nameEdit || !val.name" @blur="saveEdit(val)"  ref="editField" type="text" v-model="val.name" :placeholder="val.name" >
      </div>
    </div>
    <div class="sub" >
      <div class="title">附属:</div>
      <treeItem :model="val.children"></treeItem>
    </div>
  </li>
  <li v-show="isSet">
    <input type="text" ref="setKey" />
    <span @click="addConfirm">确认</span> 
    <span @click="addCancel">取消</span>
  </li>
  <li class="add">
    <span @click="toAddItem">添加+</span>
  </li>

</ul>  
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
      nameEdit: false,
      showPop: false,
      isSet: false
    }
  },
  computed: {
    isGroup () {
    }
  },
  methods: {
    switchEdit () {
      this.nameEdit = true
    },
    saveEdit (obj) {
      if (obj.name !== '') {
        this.nameEdit = false
      }
    },
    deleteItem (key) {
      this.$delete(this.model, key)
    },
    toAddItem (model) {
      this.isSet = true
    },
    addConfirm () {
      if (this.$refs.setKey.value) {
        this.$set(this.model, this.$refs.setKey.value, {name: '', children: {}})
        this.$refs.setKey.value = ''
        this.isSet = false
      }
    },
    addCancel () {
      this.$refs.setKey.value = ''
      this.isSet = false
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'
ul, p
  padding 0 
  margin 0
li
  padding 0
  list-style none
i
  font-style normal
input[type='checkbox']
  display none

.tree
  max-width 500px
  background white
  padding-left 10px
  .item
    padding-left 0px
    .default-name
      position relative
      line-height 28px
      color gray
      font-weight bold
      &:before
        content "+"
        position absolute
        left 0
        top -5px
        margin-left -10px
        line-height 28px
    .main
      display none
    .sub
      display none
      padding-left 0px
      .title
        font-size 16px
  .add
    font-size 12px  
  input[type="checkbox"]:checked~label:before
    content '-'
  input[type="checkbox"]:checked ~ .main
    display block
  input[type="checkbox"]:checked ~ .sub
    display block  


      
</style>