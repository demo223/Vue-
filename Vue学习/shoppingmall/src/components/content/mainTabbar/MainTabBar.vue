<template>
  <tab-bar>
    <tab-bar-item path="/home"> 
    //这里面也可以添加例如activeColor='blue'来设置颜色为蓝色
      <img
        slot="item-icon"
        src="../../../assets/img/tabbar/home.png"
        alt="首页"
      />
      <img
        slot="item-icon-active"
        src="../../../assets/img/tabbar/home_active.png"
        alt="首页"
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img
        slot="item-icon"
        src="../../../assets/img/tabbar/category.png"
        alt="分类"
      />
      <img
        slot="item-icon-active"
        src="../../../assets/img/tabbar/category_active.png"
        alt="分类"
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img
        slot="item-icon"
        src="../../../assets/img/tabbar/shopcart.png"
        alt="购物车"
      />
      <img
        slot="item-icon-active"
        src="../../../assets/img/tabbar/shopcart_active.png"
        alt="购物车"
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img
        slot="item-icon"
        src="../../../assets/img/tabbar/profile.png"
        alt="我的"
      />
      <img
        slot="item-icon-active"
        src="../../../assets/img/tabbar/profile_active.png"
        alt="我的"
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// 导入TabBar组件和TabBarItem组件
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    // 注册组件
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>