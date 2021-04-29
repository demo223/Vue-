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
import NavBar from 'components/common/navbar/NavBar'

export default {
    name:'Home',
    components:{
        NavBar
    }
}
</script>

<style>
    .home-nav{
        color: white;
    }
</style>