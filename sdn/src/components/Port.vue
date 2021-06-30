<template>
  <div id="main">
    <el-form id="port_form" ref="form" :model="form" label-width="100px">
      <el-form-item label="交换机名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="输入端口">
        <el-input v-model="form.in"></el-input>
      </el-form-item>
      <el-form-item label="输出端口">
        <el-input v-model="form.out"></el-input>
      </el-form-item>
      <el-form-item label="优先级">
        <el-input v-model="form.priority"></el-input>
      </el-form-item>
      <el-form-item label="执行动作">
        <el-select v-model="form.region" placeholder="丢包/转发">
          <el-option label="丢弃" value="shanghai"></el-option>
          <el-option label="转发" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发送</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        in: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        priority:''
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields()
    // },
  },
}
</script>

<style>
#main {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* background-image: url('../assets/img/登陆背景.jpg'); */
}

#port_form {
  width: 600px;
  height: 420px;
  margin-top: 100px;
  padding: 50px 20px;
  background-color: rgba(275,275,275,0.5);
}

</style>