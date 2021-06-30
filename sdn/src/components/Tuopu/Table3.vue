/<template>
  <div>
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="Node Connector Id"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="300">
    </el-table-column>
    <el-table-column
      prop="port"
      label="Port Number">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data() {
      return {
        tableData: [{
          id: 'openflow:1:1',
          name: 's1-eh1',
          port: '1'
        }, {
          id: 'openflow:1:2',
          name: 's1-eh2',
          port: '2'
        }, {
          id: 'openflow:1:LOCAL',
          name: 's1',
          port: '4294967294'
        }, {
          id: 'openflow:1:3',
          name: 's1-eh3',
          port: '3'
        }]
      }
    }
}
</script>

<style>

</style>