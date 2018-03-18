<template>
  <div>
    <div class="case-wrap">
      <h3>基础表格</h3> 
      <el-table style="width:100%" :height="150" :data="tableData1" :stripe="true" :border="false"> <!--el-table data属性 传入 arr-->
        <!--el-table-column 表示每一列 prop 是数组单个object 中的 key-->
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="case-wrap">
      <h3>带状态表格</h3>
      <el-table style="width:100%" :data="tableData1" :row-class-name="tableRowStatus">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table> 
    </div>
    <div class="case-wrap">
      <h3>固定列表格</h3>
      <el-table style="width:100%" :data="tableData1">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column fixed="right" lable="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="checkHandle(scope.row)">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>  
        </el-table-column>
      </el-table> 
    </div>
    <div class="case-wrap">
      <h3>多层表头表格</h3>
      <el-table style="width:100%" :data="tableData1" border="true">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column label="配送信息">
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column label="地址"> 
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
          </el-table-column> 
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tableCase',
  data () {
    return {
      tableData1: [
        {
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄',
          status: 'success'
        },
        {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄',
          status: 'info'
        },
        {
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1518 弄',
          status: 'warning'
        },
        {
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄',
          status: 'error'
        }
      ]
    }
  },
  methods: {
    tableRowStatus (row, rowIndex) {
      return `row-${row.status}`
    },
    checkHandle (row) {
      console.log(row)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'
.case-wrap
  padding 10px
  

</style>
<style scpoed> 
.el-table .row-success{
  background:blue;
}
.el-table .row-info{
  background:green;
}
.el-table .row-warning{
  background:yellow;
}
.el-table .row-error{
  background:red;
}
    
  
</style>