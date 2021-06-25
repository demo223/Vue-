<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/img/企鹅.jpg" />
      </div>
      <!-- 登录表单区域 -->
      <!-- 使用:model="表单名"进行数据绑定 使用:rules="规则名"自定义规则-->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <!-- prop="username" 添加用户名username的规则 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <!-- prop="username" 添加密码password规则  show-password相当于“眼睛按钮” -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            placeholder="密码"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button class="login_signin" type="primary" @click="login">登录</el-button>
          <!-- <el-button type="info">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'zhouqi',
        password: '123456',
      },
      loginFormRules: {
        // 验证用户名是否合法,自定义用户名规则
        username: [
          // required: true表示必填项   trigger表示触发方式(blur为失去焦点的时候)
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          {
            min: 8,
            max: 18,
            message: '长度在 8 到 18 个字符',
            trigger: 'blur',
          },
        ],
        // 验证密码是否合法,自定义用户密码规则
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          {
            min: 8,
            max: 18,
            message: '长度在 8 到 18 个字符',
            trigger: 'blur',
          },
        ],
        //验证登录
        
      },
    }
  },
  methods: {
    // 点击登录按钮时执行函数
    login() {
      // this.$refs.loginFormRef.validate((valid) => {
      //   if (valid) {
      //     console.log('登录成功！')
      //   } else {
      //     console.log('用户名不存在或密码错误！')
      //     return false
      //   }
      // })
      // 清空token
      // window.sessionStorage.clear()
      // 点击登录按钮跳转到主页
      this.$router.push('/home')
      this.$message({
        message: '登录成功！',
        type: 'success'
      });
    },
  },
}
</script>

<style lang="less" scoped>
// 下面需要安装less-loader插件
// npm install less-loader@7.3.0 --save-dev
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
//登录框
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
//头像设置
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
//表单设置
.login_form {
  position: absolute;
  top: 100px;
  bottom: 0;
  width: 100%;
  padding: 0 100px;
  box-sizing: border-box;
}
// 按钮区域
.btns {
  display: flex;
  justify-content: center; /* 居中排列 */
}
// 设置登录按钮
.login_signin {
  width: 250px;
}
</style>
