<template>
  <div class="main-container">
    <h2>网格布局</h2>
    <div class="case_a">
      <h4>常规案例</h4>
      <p>容器设置为 grid，并且定义 <strong> grid-template-columns</strong> 和 <strong> grid-template-rows</strong>, 子元素无需设置布局样式</p>
      <div class="grid1">
        <div style="background:blue;color:white">a：<br/>column(1) 150px(w)<br/>rows(1): 100px(h)</div>
        <div style="background:red;color:white">b: <br/>column(2) auto(w)<br/>rows(1): 100px(h)</div>
        <div style="background:yellow">c: <br/>column(3) 140px(w)<br/>rows(1): 100px(h)</div>
        <div style="background:green;color:white">d：<br/>column(1) 150px(w)<br/>rows(2): auto(h)</div>
        <div style="background:pink">e：<br/>column(2) auto(w)<br/>rows(2): auto(h)</div>
        <div style="background:deeppink">f：<br/>column(3) 140(w)<br/>rows(2): auto(h)</div>
        <div style="background:gray">g:<br/>column(1) 150(w)<br/>rows(3): 50(h)</div>
        <div style="background:white">h:<br/>column(2) auto(w)<br/>rows(3): 50(h)</div>
        <div style="background:orange">i:<br/>column(3) 50(w)<br/>rows(3): 50(h)</div>
      </div> 
      <div class="code-wrap clearfix">
        <div class="code css" v-highlight> 
          <pre>
            <code>
            .grid1
              display grid
              height 300px
              grid-template-columns 150px auto 140px /*g-t-columns传三个值， 表示容器分3列*/
              grid-template-rows 100px auto 50px /*gt-rows传三个值，表示容器分3行*/
              border 1px solid black
            </code>
          </pre>
        </div>
        <!-- <div class="code html" v-highlight> 
          <pre> <code> </code> </pre>
        </div> -->
      </div> 
    </div>
    <div class="case_b">
      <h4> repeat </h4>
      <p>
      <strong>grid-template-columns</strong> 和 <strong>grid-template-rows</strong> 的值可以使用repeat，如下： 
      </p>
      <p> <strong>grid-template-columns</strong>: repeat(3, 80px) auto  表示：  </p>
      <div class="grid2">
        <div style="background:blue;color:white">80px (w)</div>
        <div style="background:red;color:white">80px (w)</div>
        <div style="background:yellow">80px (w)</div>
        <div style="background:green;color:white"> auto</div>
        <!-- <div style="background:pink"></div>
        <div style="background:deeppink"></div>
        <div style="background:gray"></div>
        <div style="background:white"></div>
        <div style="background:orange"></div> -->
      </div> 
      <div class="code-wrap clearfix">
        <div class="code css" v-highlight> 
          <pre>
            <code>
             .grid2
              display grid
              height 100px
              width 800px
              border 1px solid black
              grid-template-columns: repeat(3, 80px) auto 
            </code>
          </pre>
        </div>
        <!-- <div class="code html" v-highlight> 
          <pre> <code> </code> </pre>
        </div> -->
      </div> 
    </div> 
    <div class="case_c">
      <h4>特殊单位： fr (等值平分)  </h4>
      <p>
      <strong>grid-template-columns</strong> 和 <strong>grid-template-rows</strong> 都可以传一个 fr 的单位
      </p>
      <div class="clearfix">
        <div class="grid3">
          <div style="background:blue;color:white"> </div>
          <div style="background:red;color:white"> </div>
          <div style="background:yellow"> </div>
          <div style="background:green;color:white"></div>
          <div style="background:pink"></div>
          <div style="background:deeppink"></div>
          <div style="background:gray"></div>
          <div style="background:white"></div>
          <div style="background:orange"></div>
        </div>
        <div class="grid3b">
          <div style="background:blue;color:white">(500-250)/3</div>
          <div style="background:red;color:white">(500-250)/3</div>
          <div style="background:yellow">(500-250)/3</div>
          <div style="background:green;color:white">250px</div>
          <!-- <div style="background:pink"></div>
          <div style="background:deeppink"></div>
          <div style="background:gray"></div>
          <div style="background:white"></div>
          <div style="background:orange"></div> -->
        </div>  
      </div>
      <div class="code-wrap clearfix">
        <div class="code css" style="width:40%" v-highlight> 
          <pre>
            <code>
            .grid2
              display grid
              height 300px
              width 300px
              border 1px solid black  
              grid-template-columns: 1fr 1fr 1fr /*三等分列*/
              grid-template-rows 1fr 1fr 1fr /*三等分行*/
            </code>
          </pre>
        </div>
        <div class="code html" style="width:40%" v-highlight> 
          <pre> <code>
          .grid3b
          float left
          display grid
          height 300px
          width 500px
          grid-template-columns: 1fr 1fr 1fr 250px 
          </code> </pre>
        </div>
      </div> 
    </div> 
  </div>
</template>

<script>
export default {
  name: 'gridlayout',
  data () {
    return {
    }
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
    .grid1
      display grid
      height 300px
      grid-template-columns 150px auto 140px /*g-t-columns传三个值， 表示容器分3列*/
      grid-template-rows 100px auto 50px /*gt-rows传三个值，表示容器分3行*/
      border 1px solid black        
  .case_b
    width 90%
    margin 0 auto
    .grid2
      display grid
      height 100px
      width 800px
      border 1px solid black
      grid-template-columns: repeat(3, 80px) auto 
  .case_c
    width 90%
    margin 0 auto
    .grid3
      float left
      display grid
      height 300px
      width 300px
      margin-right 20px
      border 1px solid black  
      grid-template-columns: 1fr 1fr 1fr
      grid-template-rows 1fr 1fr 1fr
    .grid3b
      float left
      display grid
      height 300px
      width 500px
      grid-template-columns: 1fr 1fr 1fr 250px
</style>