<template>
  <div>
    <div class="case-wrap">
      <h3>展开行</h3> 
      <el-table style="width:100%"  :data="tableData" >  
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-form label-position="left" inline class="table-expand">
              <el-form-item label="名称"><span>{{scope.row.name}}</span></el-form-item>
              <el-form-item label="店铺名称"><span>{{scope.row.shop}}</span></el-form-item>
              <el-form-item label="店铺ID"><span>{{scope.row.shopId}}</span></el-form-item>
              <el-form-item label="商品ID"><span>{{scope.row.id}}</span></el-form-item>
              <el-form-item label="分类"><span>{{scope.row.category}}</span></el-form-item>
              <el-form-item label="地址"><span>{{scope.row.address}}</span></el-form-item>
              <el-form-item label="描述"><span>{{scope.row.desc}}</span></el-form-item>
            </el-form>
          </template>
        </el-table-column> 
        <el-table-column label="商品 ID" prop="id"> </el-table-column>
        <el-table-column label="商品 名称" prop="name"> </el-table-column>
        <el-table-column label="描述" prop="desc"> </el-table-column>
      </el-table>
    </div>
     
    <div class="case-wrap">
      <h3>表结尾统计(自动)</h3> 
      <el-table style="width:100%"  :data="tableData2" border show-summary > 
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="amount1" label="数值1" sortable></el-table-column>
        <el-table-column prop="amount2" label="数值2" sortable></el-table-column>
        <el-table-column prop="amount3" label="数值3" sortable></el-table-column>
      </el-table>
    </div> 
    <div class="case-wrap">
      <h3>表结尾统计(自定义)</h3> 
      <el-table style="width:100%"  :data="tableData2" border show-summary :summary-method="getSummary"> 
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="amount1" label="数值1" sortable></el-table-column>
        <el-table-column prop="amount2" label="数值2" sortable></el-table-column>
        <el-table-column prop="amount3" label="数值3" sortable></el-table-column>
      </el-table>
    </div>  
  </div> 
</template>

<script>
export default {
  name: 'tableCase2',
  data () {
    return {
      tableData: [
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        },
        {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        },
        {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        },
        {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }
      ],
      tableData2: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        },
        {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    getSummary (param) {
      // console.log(param)
      const data = param.data
      const columns = param.columns
      let sums = [] // sums为 表格最底 的统计输出

      columns.forEach((column, index) => { // 遍历 列数据
        if (index === 0) {
          sums[index] = '总价'
          return
        }

        const values = data.map((item) => {
          return Number(item[column.property]) // column.property 是指 每一个列中的显示内容 的 key
        })
        // 此处的 values 为 遍历到当前的 列时，此列下面的 所有 数据

        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += '元'
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
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
<style>
.table-expand{
   color: black;
}
 
.table-expand label{
  width:90px;
}
    
.table-expand .el-form-item{
  width:40%; 
}
     
</style>
 