<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../assets/img/登录头像.png" alt="当前用户" />
        <span id="theme">校园网的负载均衡管理系统</span>
      </div>
      <el-button type="info" @click="logout">登出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <!-- <el-aside :width="isCollapse ? '64px' : '200px'"> -->
      <el-aside width="200px">
        <!-- <div class="toggle-button" @click="togleCollapse">展开/收起</div> -->
        <el-col :span="12">
          <!-- <h5>自定义颜色</h5> -->
          <el-menu
            default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="skyblue"
          >
            <el-menu-item index="1" id="user" @click="userClick">
              <i class="el-icon-user-solid"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="2" id="chart" @click="chartClick">
              <i class="el-icon-view"></i>
              <span slot="title">流量监控</span>
            </el-menu-item>
            <el-menu-item index="3" id="tuopu" @click="tuopuClick">
              <i class="el-icon-tickets"></i>
              <span slot="title">拓扑信息</span>
            </el-menu-item>
            <el-menu-item index="4" @click="portClick">
              <i class="el-icon-s-operation"></i>
              <span slot="title">匹配端口</span>
            </el-menu-item>
            <el-menu-item index="5" id="ip" @click="ipClick">
              <i class="el-icon-s-platform"></i>
              <span slot="title">匹配ip地址</span>
            </el-menu-item>
            <el-menu-item index="6" id="balance" @click="balanceClick">
              <i class="el-icon-rank"></i>
              <span slot="title">负载均衡</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <!-- 内容主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  // created () {
  //   this.getMenuList()
  //   this.activePath = window.sessionStorage.getItem('activePath')
  // },
  methods: {
    logout() {
      // 清空token
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    userClick() {
      this.$router.push('/user')
    },
    chartClick() {
      this.$router.push('/chart')
    },
    tuopuClick() {
      this.$router.push('/tuopu')
    },
    portClick() {
      this.$router.push('/port')
    },
    ipClick() {
      this.$router.push('/ip')
    },
    balanceClick() {
      this.$router.push('/balance')
    },
  },
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373f41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
    span {
      margin-left: 15px;
    }
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
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  // 鼠标放上去变成小手
  cursor: pointer;
}
</style>

<style>
#theme {
  margin-left: 605px;
}
</style>