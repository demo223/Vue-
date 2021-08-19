<template>
  <div id="app">
    <h1>根组件</h1>
    <h2>子组件Right传递过来的信息count：{{count}}</h2>
    <h3>当前的count值为：{{count}}</h3>
    <button @click="count++">+1</button>
    <br />
    <button @click="resetLeftCount">重置Left组件中的count为0</button>
    <div class="box">
      <left ref="comLeft" :name="name"></left>
      <!-- 父传子 -->
      <right @countChange="getCount"></right>
      <!-- 子传父 -->
    </div>
  </div>
</template>

<script>
import Left from './components/Left.vue'
import Right from './components/Right.vue'

export default {
  name: 'App',
  data() {
    return {
      name: '父组件信息',
      count: 0,
    }
  },
  components: {
    Left,
    Right,
  },
  methods: {
    getCount(val) {
      /* 这里的val就是子组件传递过来的数据 */
      this.count = val
    },
    resetLeftCount() {
      this.$refs.comLeft.resetCount() /* 调用子组件Left中的resetCount方法 */
    },
  },
}
</script>

<style lang="less" scoped>
#app {
  text-align: center;
  .box {
    display: flex;
  }
}
</style>
