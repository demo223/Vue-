<template>
  <div id="main">
    <el-form id="balance_form" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="交换机id" prop="id">
    <el-input type="password" v-model="ruleForm.id" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="端口号" prop="port">
    <el-input v-model.number="ruleForm.port"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('端口号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入端口号'));
          } else {
            if (value >= 1 &&value <= 65535) {
              callback(new Error('不是一个合法的端口号'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          id: '',
          port: ''
        },
        rules: {
          id: [
            { validator: validatePass, trigger: 'blur' }
          ],
          port: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
#main{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

#balance_form{
  width:500px;
  height: 250px;
  padding: 50px 20px;
  margin-top: 100px;
  background-color: rgba(275, 275, 275, 0.5);
}
</style>