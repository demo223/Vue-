<template>
  <div id="main">
    <el-form id="mac_form" ref="form" :model="form" label-width="120px">
      <el-form-item label="交换机名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="源Mac地址">
        <el-input v-model="form.origin"></el-input>
      </el-form-item>
      <el-form-item label="目的Mac地址">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="输出端口号">
        <el-input v-model="form.portNum"></el-input>
      </el-form-item>
      <el-form-item label="执行动作">
        <el-select v-model="form.region" placeholder="执行动作">
          <el-option label="丢包" value="diubao"></el-option>
          <el-option label="转发" value="zhuanfa"></el-option>
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
        name: '',
        origin: '',
        title: '',
        portNum: '',
        region: '',
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

#mac_form {
  width: 800px;
  height: 450px;
  margin-top: 100px;
  padding: 50px 20px;
  background-color: rgba(275,275,275,0.5);
}

/* 按钮区域 */
.btns {
  display: flex;
  justify-content: center; /* 居中排列 */
}
</style>
