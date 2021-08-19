<template>
  <div>
    <h3>count全局子组件</h3>
    <p>count的值是：{{count}}</p>
    <button @click="count++">+1</button>
  </div>
</template>

<script>
export default {
  /* props中的属性是只读的，不能修改 */
  // props:["init"],  /* 数组形式的props */
  props: {
    /* 对象形式的props */
    /* 自定义的初始属性 */
    init: {
      default: 0 /* default定义属性的默认值 */,
      type: Number /* type定义属性的类型 */,
    },
  },
  data() {
    return {
      count: this.init /* 把props里面的init转存到data中 */,
    }
  },
}
</script>

<style>
</style>