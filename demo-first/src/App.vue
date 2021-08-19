<template>
  <div id="app">
    <h1>app组件</h1>
    <button @click="flag = !flag">创建/销毁Test组件</button>
    <test v-if="flag"></test>
    <div id="box">
      <left></left>
      <right></right>
    </div>
  </div>
</template>

<script>
import Left from './components/Left'
import Right from './components/Right'
import Test from './components/Test.vue'
export default {
  name: 'App',
  data() {
    return {
      flag: true,
    }
  },
  components: {
    Left,
    Right,
    Test,
  },
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
#app {
  text-align: center;
}
#box {
  display: flex;
}
</style>
