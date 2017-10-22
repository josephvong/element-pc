<template>
  <div class="tabs-view-container">
  <router-link class="tabs-view" v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.path"> 
    <el-tag :closable="true" :type="isActive(tag.path)?'primary':''" @close="closeViewTabs(tag,$event)">{{tag.name}}</el-tag>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tabview',
  components: {

  },
  data () {
    return {
    }
  },
  computed: {
    visitedViews () {
      return this.$store.state.app.visitedViews.slice(-6)
    }
  },
  methods: {
    generateRoute () {
      if (this.$route.matched[this.$route.matched.length - 1].name) {
        return this.$route.matched[this.$route.matched.length - 1]
      }
      this.$route.matched[0] = '/'
      return this.$route.matched[0]
    },
    closeViewTabs (tag, $event) {
      // 调用 ‘delVisitedViews’ 删除路由节点，回调输出路由数组(views)
      this.$store.dispatch('delVisitedViews', tag).then((views) => {
        if (this.isActive(tag.path)) { // 如果 当前 删除的 tag 是 当前显示的路由
          const latesView = views.slice(-1)[0] // 获取 views 最后一项（历史路由数组）
          if (latesView) { // 如果 历史路由 最后一项 存在
            this.$router.push(latesView.path) // 跳去最后一项的路由页面
          } else {
            this.$router.push('/') // 否则，跳去首页
          }
        }
      })
      $event.preventDefault()
    },
    addViewTabs () {
      this.$store.dispatch('addVisitedViews', this.generateRoute())
    },
    isActive (path) {
      return path === this.$route.path
    }
  },
  watch: {
    $route () {
      this.addViewTabs()
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
.tabs-view-container
  display inline-block
  vertical-align top
  margin-left 10px
  .tabs-view
    margin-left 10px

</style>
