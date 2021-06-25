<template>
  <div id="main">
    <el-form id="form" ref="form" :model="form" label-width="80px">
      <el-form-item label="输入端口">
        <el-input v-model="form.in"></el-input>
      </el-form-item>
      <el-form-item label="输出端口">
        <el-input v-model="form.out"></el-input>
      </el-form-item>
      <el-form-item label="活动选择">
        <el-select v-model="form.region" placeholder="执行动作">
          <el-option label="丢包" value="shanghai"></el-option>
          <el-option label="转发" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class='btns'>
        <el-button id="start" type="primary" @click="onSubmit">开始</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
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

#form {
  width: 600px;
  height: 300px;
  margin-top: 100px;
  padding: 50px 20px;
  background-color: rgba(275,275,275,0.5);
}

// 按钮区域
.btns {
  display: flex;
  justify-content: center; /* 居中排列 */
}
</style>