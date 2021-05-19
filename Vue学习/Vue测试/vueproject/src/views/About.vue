<template>
  <div class="about">
    <button @click="emitEvent">发送子组件信息给父组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        childMessage: '子组件要发送的内容',
      }
    },
    methods: {
      //自定义事件
      emitEvent(){
        this.$emit('emitEvent', this.childMessage)
      }
    }
  }
</script>

<style>
  
</style>