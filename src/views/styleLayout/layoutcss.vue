<template>
  <div class="main-container">
    <h2>布局样式</h2>
    <div class="case_a">
      <h4>两栏布局 (浮动)</h4>
      <div class="box1 clearfix">
        <div class="left">
          <ul>
            <li v-for="i in 5">{{i}}</li>
          </ul>
        </div>
        <div class="right"> 
          <ul>
            <li v-for="i in 5">{{i}}</li>
          </ul>
        </div>
      </div>
      <div class="code-wrap clearfix">
        <div class="code css" v-highlight> 
          <pre>
            <code>
              .box1 .left
                float left
                width 200px
                background red
              .box1 .right
                margin-left 200px
                background green
            </code>
          </pre>
        </div>
        <div class="code html" v-highlight> 
          <pre>
            <code>
              {{bothSideFloat}}
            </code>
          </pre>
        </div>
      </div> 
    </div>
    <div class="case_b">
      <h4>两栏布局 (定位)</h4>
      <div class="box2 ">
        <div class="left"></div>
        <div class="right"></div>
      </div> 
      <div class="code" v-highlight> 
        代码：
        <pre>
          <code> 
           .box2
              position relative
              width 100%
              height 100px
              .left
                position absolute
                width 200px
                height 100%
                background red
              .right
                margin-left 200px
                height 100% 
                background green
          </code>
        </pre>
      </div> 
    </div>
    <div class="case_c">
      <h4>两栏布局 (flex)</h4>
      <div class="box3 ">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="code" v-highlight> 
        代码：
        <pre>
          <code>
            .box3
              display flex
              height 100px
              .left
                width 200px
                height 100%
                background red
              .right
                flex 1 1 auto
                height 100%
                background green
          </code>
        </pre>
      </div> 
    </div>

    <div class="case_d">
      <h4>圣杯布局</h4>
      <div class="box4 ">
        <div class="middle">middle (1)</div>
        <div class="left">left (2)</div>
        <div class="right">right (3)</div>
      </div>
      <div class="code" v-highlight > 
        代码：
        <pre>
          <code>
             .box4
              height 100px
              padding 0 200px/*左右预留200px空间*/
              .middle /*第一个div*/
                float left /*左浮动*/
                width 100%
                height 100%
                background yellow
              .left /*第二个div*/
                float left /*左浮动*/
                width 200px
                height 100%
                position relative 
                margin-left -100% /*margin-left-100% 使浮动的红色div与黄div重合,此100%为黄div的长度100%*/
                left -200px /*让左侧div 向左拉，填充左边空间*/
                background red
              .right
                float left
                width 200px
                height 100px
                position relative
                margin-left -200px
                right -200px
                background green
          </code>
        </pre>
      </div> 
    </div>

    <div class="case_e">
      <h4>两翼布局</h4>
      <div class="box5 ">
        <div class="middle-wrap">
          <div class="middle">
            middle-wrap > middle
          </div>
        </div>
        <div class="left"> left </div>
        <div class="right"> right </div>
      </div>
      <div class="code" v-highlight > 
        代码：
        <pre>
          <code>
          .box5
            position relative
            height 100px
            .middle-wrap /*中间容器*/
              float left 
              position relative
              width 100%
              height 100%
              .middle
                height 100%
                margin 0 200px /*middle居中， 并且两边预留 200px 空间*/
                background yellow
            .left
              float left
              width 200px
              height 100%
              margin-left -100% /*margin-left 为middle-wrap的总长度*/
              background red
            .right
              float left
              width 200px
              height 100%
              margin-left -200px  /*margin-left 绿div自身长度（拉回黄色右边）*/
              background green    
          </code>
        </pre>
      </div>
      <div  class="code" v-highlight > 
        代码：
        <pre>
          <code class="html">
            {{code}} 
          </code>
        </pre>
      </div> 
    </div>
  </div>
</template>

<script>
const bothSideFloat = `<div class="box1 clearfix">
                  <div class="left"></div>
                  <div class="right"></div>
            </div>`
export default {
  data () {
    return {
      bothSideFloat: bothSideFloat,
      code: `<div class="box5 ">
            <div class="middle-wrap">
              <div class="middle">
                middle-wrap > middle
              </div>
            </div>
            <div class="left"> left </div>
            <div class="right"> right </div>
          </div> `
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'
.code-wrap
  width 100%
  .code
    float left
    margin-top 10px
    &.css
      width 70%
      margin-right 1%
    &.html
      width 28%
  .code code
    padding 0px !important
    margin 0px !important
    line-height 24px
  .code pre
    line-height 1
    padding 0 !important
    margin 0 !important
.main-container
  padding 15px
  .case_a
    width 90%
    margin 0 auto
    .box1 .left
      float left
      width 200px
      background red
    .box1 .right
      margin-left 200px
      background green
  .case_b
    width 90%
    margin 0 auto
    .box2
      position relative
      width 100%
      height 100px
      .left
        position absolute
        width 200px
        height 100%
        background red
      .right
        margin-left 200px
        height 100% 
        background green
  .case_c
    width 90%
    margin 0 auto
    .box3
      display flex
      height 100px
      .left
        width 200px
        height 100%
        background red
      .right
        flex 1 1 auto
        height 100%
        background green
  .case_d
    width 90%
    margin 0 auto
    .box4
      height 100px
      padding 0 200px/*左右预留200px空间*/
      .middle /*第一个div*/
        float left /*左浮动*/
        width 100%
        height 100%
        background yellow
      .left /*第二个div*/
        float left /*左浮动*/
        width 200px
        height 100%
        position relative 
        margin-left -100% /*margin-left-100% 使浮动的红色div与黄div重合,此100%为黄div的长度100%*/
        left -200px /*让左侧div 向左拉，填充左边空间*/
        background red
      .right
        float left
        width 200px
        height 100px
        position relative
        margin-left -200px
        right -200px
        background green
  .case_e
    width 90%
    margin 0 auto
    .box5
      position relative
      height 100px
      .middle-wrap /*中间容器*/
        float left 
        position relative
        width 100%
        height 100%
        .middle
          height 100%
          margin 0 200px /*middle居中， 并且两边预留 200px 空间*/
          background yellow
      .left
        float left
        width 200px
        height 100%
        margin-left -100% /*margin-left 为middle-wrap的总长度*/
        background red
      .right
        float left
        width 200px
        height 100%
        margin-left -200px  /*margin-left 绿div自身长度（拉回黄色右边）*/
        background green                
    
    
    
</style>