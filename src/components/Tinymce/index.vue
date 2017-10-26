<template>
  <div class="tinymce-container editor-container">
    <textarea class="tinymce-textarea" name="" :id="tinymceId" ></textarea>
  </div>
</template>

<script>
export default {
  name: 'Tinymce',
  props: {
    id: {
      type: String
    },
    value: {
      type: String,
      default: ''
    },
    toolbar: { // 富文本的工具栏 数组
      type: Array,
      required: false,
      default () {
        return ['newdocument | bold italic underline | strikethrough alignleft aligncenter', 'alignright alignjustify | styleselect formatselect | fontselect fontsizeselect', 'cut copy paste | bullist numlist outdent indent | blockquote undo redo removeformat | subscript superscript']
      }
    },
    menubar: {
      default: ''
    },
    height: { // 传入设置的高度
      type: Number,
      required: false,
      default: 360
    }
  },
  data () {
    return {
      hasChange: false,
      hasInit: false, // 是否已经 创建
      tinymceId: this.id || 'vue-tinymce-' + +new Date()
    }
  },
  methods: {
  },
  watch: {
    value (val) {
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(() => {
          window.tinymce.get(this.tinymceId).setContent(val)
        })
      }
    }
  },
  mounted () {
    const This = this
    window.tinymce.init({
      selector: `#${this.tinymceId}`,
      height: this.height,
      body_class: 'panel-body',
      object_resize: false,
      toolbar: this.toolbar,
      menubar: this.menubar,
      plugins: 'advlist,autolink,code,paste,textcolor, colorpicker,fullscreen,link,lists,media,wordcount, imagetools',
      default_link_target: '_blank',
      link_title: false,
      init_instance_callback: (editor) => { // 创建实例(完成)的 回调函数
        if (This.value) {
          editor.setContent(This.value)
        }

        This.hasInit = true

        editor.on('NodeChange Change KeyUp', () => {
          this.hasChange = true
          this.$emit('input', editor.getContent({format: 'raw'}))
        })
      }

    })
  },
  destoryed () {
    window.tinymce.get(this.tinymceId).destroy()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'
.tinymce-container
  position relative
  .tinumce-textarea
    visibility hidden
    z-index -1
</style>