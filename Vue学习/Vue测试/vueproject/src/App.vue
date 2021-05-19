<template>
  <div id="nav">
    <about @emitEvent="result">

    </about>
    <h1>当前信息：{{parentMessage}}</h1>
  </div>
</template>

<script>
  // 导入外部Vue文件
  import About from "./views/About";

  export default {
    data() {
      return {
        parentMessage: '父组件中保存子组件的位置',
      };
    },
    components: {
      About,
    },
    methods: {
      result(childMessage) {
        this.parentMessage = childMessage;
      },
    },
  };
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    background-color: skyblue;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>