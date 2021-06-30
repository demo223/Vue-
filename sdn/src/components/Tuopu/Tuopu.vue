<template>
  <div>
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column id="t_id" @click="idClick" prop="id" align="center" label="Node Id" width="400"></el-table-column>

      <el-table-column id="t_name" @click="nameClick" prop="name" align="center" label="Node Name" width="400"></el-table-column>

      <el-table-column id="t_con" @click="conClick" prop="connectors" align="center" label="Node Connectors">
        <template slot-scope="scope">
          <button @click="{{scope.row.id}}">{{scope.row.connectors}}</button>
        </template>
      </el-table-column>
    </el-table>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 'openflow:1',
          name: 'None',
          connectors: '4',
        },
        {
          id: 'openflow:2',
          name: 'None',
          connectors: '5',
        },
        {
          id: 'openflow:3',
          name: 'None',
          connectors: '3',
        },
      ],
    }
  },
  methods: {
    
  },
}
</script>

<style>
  button{
    padding:0 10px;
  }
</style>