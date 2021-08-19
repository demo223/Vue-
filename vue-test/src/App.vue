<template>
  <div id="app">
    <el-table :data="books" border style="width: 100%">
      <el-table-column align="center" prop="index" label="" width="180"></el-table-column>
      <el-table-column align="center" prop="name" label="书籍名称" width="180"></el-table-column>
      <el-table-column align="center" prop="date" label="出版日期" width="180"></el-table-column>
      <el-table-column align="center" prop="price" label="价格" width="180"></el-table-column>
      <el-table-column align="center" prop="del" label="删除" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      books: [
        { name: 'C语言程序设计', date: '2005-3', price: 34, count: 1 },
        { name: 'Java从入门到精通', date: '2015-5', price: 51, count: 1 },
        { name: '深入理解java虚拟机', date: '2013-9', price: 63, count: 1 },
        { name: 'C语言程序设计', date: '2012-7', price: 94, count: 1 },
      ],
      index:0
    }
  },
  components: {},
}
</script>

<style lang="less" scoped>
/deep/ el-table {
  text-align: center;
}
</style>
