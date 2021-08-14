// 主页界面
<template>
  <el-container>
    <el-header>
      <div class="header-left">
        <el-button type="primary" icon="el-icon-setting">设置</el-button>
      </div>
      <h2>校园网管理系统</h2>
      <div class="header-right">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img id="header-user" src="../assets/img/登录头像.png" alt="logo" />
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <!-- 流量监控 -->
          <el-menu-item index="1" @click="userClick">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="2" @click="chartClick">
            <i class="el-icon-odometer"></i>
            <span slot="title">流量监控</span>
          </el-menu-item>
          <el-menu-item index="3" @click="balanceClick">
            <i class="el-icon-rank"></i>
            <span slot="title">负载均衡</span>
          </el-menu-item>
          <el-menu-item index="4" @click="cardClick">
            <i class="el-icon-setting"></i>
            <span slot="title">card</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 主界面展示区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {}
  },
  // created () {
  //   this.getMenuList()
  //   this.activePath = window.sessionStorage.getItem('activePath')
  // },
  methods: {
    logout() {
      this.$router.push('/login')
    },
    userClick() {
      this.$router.push('/user')
    },
    chartClick() {
      this.$router.push('/chart')
    },
    balanceClick() {
      this.$router.push('/balance')
    },
    cardClick() {
      this.$router.push('/card')
    },
  },
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #373f41;
  padding-left: 10px;
  color: #fff;
  font-size: 20px;
  > div img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
  }
}

.el-aside {
  background-color: #333744;
  .el-menu {
    border: none;
    min-width: 200px;
  }
}

.el-main {
  background-color: #eaedf1;
}
</style>


// 卡片设置
<style>
.box-card {
  width: 300px;
  height: 160px;
}

/* .clearfix:before,
.clearfix:after {
  display: table;
  content: '';
} */
/* .clearfix:after {
  clear: both;
} */

img {
  width: 100px;
  height: 100px;
}

.box-card-content {
  float: right;
  height: 100px;
  /* background-color: skyblue; */
  text-align: center;
  font-weight: bold;
  color: #666;
  padding: 20px 0;
}
.box-card-content-name {
  color: rgba(0, 0, 0, 0.45);
}
.box-card-content-number{
  margin-top: 10px;
      color: #666;
}
</style>