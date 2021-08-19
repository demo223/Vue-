<template>
  <div class="left">
    <h2>App组件的子组件Left</h2>
    <button @click="count++">Left组件中的count+1</button>
    <br />
    <button @click="resetCount">重置Left组件中的count为0</button>
    <h3>当前Left组件中的count值为：{{count}}</h3>
    <h3>父组件传递过来的值为：{{name}}</h3>
    <button @click="send">发送</button>
  </div>
</template>

<script>
import bus from './eventBus'
export default {
  props: ['name'],
  data() {
    return {
      message: '子组件要传递给父组件的信息',
      info: '兄弟组件Left——>兄弟组件Right',
      count: 123,
    }
  },
  methods: {
    send() {
      bus.$emit('share', this.info)
    },
    resetCount() {
      this.count = 0
    },
  },
}
</script>

<style lang="less" scoped>
.left {
  min-width: 300px;
  height: 300px;
  background-color: pink;
  flex: 1;
}
</style>