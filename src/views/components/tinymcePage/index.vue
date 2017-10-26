<template>
  <div class="main-container">
    <h4>富文本编辑器</h4>
    <hr/>
    <div>
      <Tinymce v-model="content" ></Tinymce>
    </div>
    <div class="editor-content" v-html="content"></div>
  </div>
</template>

<script>
import Tinymce from 'components/Tinymce'
export default {
  data () {
    return {
      content: 'joseph'
    }
  },
  components: {
    Tinymce
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
  .editor-content
    margin-top 20px
</style>