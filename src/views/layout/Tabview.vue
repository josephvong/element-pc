<template>
  <div class="tabs-view-container">
  <!--   <router-link class="tabs-view"> -->
      <el-tag :closeable="true" >ABC</el-tag>
    <!-- </router-link> -->
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
  },
  methods: {
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
  .tab-view
    margin-left 10px

</style>
