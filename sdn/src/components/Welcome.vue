<template>
  <div>
    <!-- 2.为Echarts准备一个Dom -->
    <el-row>
      <el-col :span="16">
         <div id="main" >
           <div id="content">
             <h1>欢迎来到校园网的负载均衡系统界面！</h1>
             </div>
         </div>
      </el-col>
      <el-col :span="6">
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  // 此时,页面上的元素,已经被渲染完毕了
  
}
</script>

<style>
div{
   margin: 0;
   padding: 0;
}
#content{
  text-align: center;
}
</style>
