<template>
  <div class="right-box">
    <h2>right组件</h2>
    <hr />
    <my-count :init="22"></my-count>
  </div>
</template>

<script>
export default {}
</script>


<style lang="less" scoped>
.right-box {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>