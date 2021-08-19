<template>
  <div class="right">
    <h2>App组件中的子组件Right</h2>
    <button @click="add">+1</button>
    <h3>子组件中count的值为： {{count}}</h3>
    <h4>接收到的信息：{{info}}</h4>
  </div>
</template>

<script>
import bus from './eventBus'
export default {
  data() {
    return {
      count: 0,
      info: '' /* 用来接收兄弟组件Left的数据 */,
    }
  },
  created() {
    bus.$on('share', (val) => {
      this.info = val
    })
  },
  methods: {
    add() {
      this.count++
      // 通过$emit()触发自定义事件
      this.$emit('countChange', this.count)
      /* this.$emit('自定义事件的名称',传递的数据) */
    },
  },
}
</script>

<style>
.right {
  min-width: 300px;
  height: 300px;
  background-color: skyblue;
  flex: 1;
}
</style>