// 首页界面
<template>
    <div id="home">
        <!-- <h2>首页</h2> -->
    <nav-bar class="home-nav">
        <div slot="middle">蘑菇街</div>
    </nav-bar>
    </div>
</template>

<script>
// 1.导入NavBar组件（封装的网络请求模块）
import NavBar from 'components/common/navbar/NavBar'
// 导入axios网络请求封装模块
import {getHomeMultidata} from 'network/home'

export default {
    name:'Home',
    components:{
        // 2.注册NavBar组件
        NavBar
    },
    data() {
        return {
            banners:[]
            // 服务器返回的数据
        }
    },
    // 调用Vue生命周期created函数，
    // 在Home组件创建完成后，立调用网络请求
    created() {
        // 请求多个数据
        getHomeMultidata(res =>{
            this.banners = res.data.banners
        })
    },
}
</script>

<style>
    .home-nav{
        color: white;
    }
</style>