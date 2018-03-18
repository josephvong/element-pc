<template>
  <div>
    <div class="filter-container">
      <el-checkbox-group v-model="checkboxVal">
        <el-checkbox label="apple">apple</el-checkbox>
        <el-checkbox label="banana">banana</el-checkbox>
        <el-checkbox label="orange">orange</el-checkbox>
      </el-checkbox-group>
    </div> 

    <el-table :data="tableData" :key="key" style="width:100%">
      <el-table-column prop="name" label="fruitName" width="180"></el-table-column>
      <el-table-column :key="fruit" v-for="(fruit,index) in formThead" :label="fruit">
        <template slot-scope="scope">
          {{scope.row[fruit]}}
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
const defaultFormThead = ['apple', 'banana']
export default {
  name: 'fixedThead',
  data () {
    return {
      tableData: [
        {
          name: 'fruit-1',
          apple: 'apple-10',
          banana: 'banana-10',
          orange: 'orange-10'
        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20'
        }
      ],
      key: 1,
      checkboxVal: defaultFormThead, // checkbox的数据
      formThead: defaultFormThead,  // 表格的控制数据
      formTheadOptions: ['apple', 'banana', 'orange']
    }
  },
  methods: {
  },
  watch: {
    checkboxVal (valArr) {
      this.formThead = this.formTheadOptions.filter((i) => { return valArr.indexOf(i) >= 0 })
      this.key = this.key + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus" scoped>
// @import '~stylus/mixin.styl'

</style>