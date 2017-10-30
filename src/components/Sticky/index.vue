<template>
<div :style="{height:height+'px',zInddex:zIndex}"><!--用props的传参定义 sticky容器的zIndex, height通过动态计算来定义-->
   <div :class="className" :style="{top:stickyTop+'px', zIndex:zIndex, position:position, width:width, height:height+'px'}">
     <slot>
       <div>sticky component</div>
     </slot>
   </div>
</div>
</template>

<script>
export default {
  name: 'Sticky',
  props: {
    stickyTop: {  // Sticky 组件的 top （动态传入）
      type: Number,
      default: 0
    },
    zIndex: {
      type: Number,
      default: 1
    },
    className: {
      type: String
    }

  },
  data () {
    return {
      active: false,
      position: '',
      currentTop: '',
      width: undefined,
      height: undefined,
      child: null,
      stickyHeight: 0
    }
  },
  methods: {
    sticky () { // 粘贴函数
      if (this.active) { // 若sticky 已经被激活
        return  // 不用执行以下函数
      }
      this.position = 'fixed' // 设置 position 为 fixed
      this.active = true   // 开启 sticky 状态
      this.width = this.width + 'px' // 设置 sticky 组件的 width
    },

    reset () { // 取消粘贴 函数
      if (!this.active) {
        return
      }
      this.position = ''
      this.width = 'auto'
      this.active = false
    },
    handleScroll () {  // 滚动过程中的处理函数
      this.width = this.$el.getBoundingClientRect().width // 获取根节点的 width
      const offsetTop = this.$el.getBoundingClientRect().top // 实时监测$el与屏幕之间的top值
      if (offsetTop < this.stickyTop) { // 当 sticky 组件（根节点）的 top 低于 属性stickyTop（设定的默认高度属性）
        this.sticky()
        return
      }
      this.reset()
    }
  },
  mounted () {
    this.height = this.$el.getBoundingClientRect().height
    window.addEventListener('scroll', () => { this.handleScroll() })
  },

  destroyed () {
    window.removeeEventListener('scroll', () => { this.handleScroll() })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'

</style>