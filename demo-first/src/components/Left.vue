<template>
  <div class="left-box">
    <h2>left组件</h2>
    <hr />
    <my-count :init="11"></my-count>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
/* scoped可以防止组件组件页面样式冲突 */
.left-box {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
/* 加了scoped属性，子组件不生效 */
/* h2{
  color: pink;
} */

/* 加了scoped怎么让子组件生效 */
/deep/ h3 {
  color: red;
}
</style>