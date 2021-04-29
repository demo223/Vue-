<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="itemClick">
    <!-- 未点击图标时 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <!-- 点击图标时 -->
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {  //父组件里面的属性
    path: String,
    activeColor: {
      //如果在父组件中没有设置activeColor，则默认为red
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true //  全部处于活跃状态
    };
  },
  computed: {
    isActive() {
      // 判断当前活跃路由是否和当前路径一致
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      // this.path为router里面index.js的routes里面的各个组件的path
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>