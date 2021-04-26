<!-- view -->
<template>
  <div id="app">
    <h2>--------------App中的state的使用------------</h2>
    <h2>{{message}}</h2>
    <h2>{{count}}</h2>

    <h2>--------------App中的getters的使用------------</h2>
    <h2>平方：{{$store.getters.square}}</h2>
    <h2>年龄大于age=10的人：{{$store.getters.dayuAge(10)}}</h2>
    <h2>年龄大于25的人：{{$store.getters.dayu25}}</h2>
    <h2>年龄大于25的人数为：{{$store.getters.dayu25length}}</h2>
    <h2>id=111的人：{{$store.getters.getId(111)}}</h2>

    <h2>--------------App中的mutations的使用------------</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addSize(5)">+5</button>
    <button @click="subSize(5)">-5</button>
    <button @click="addStudents">添加一个白龙马对象</button>

    <h2>--------------App中的modules的使用------------</h2>
    <h2>moduleA: {{$store.state.a.name}}</h2>
    <h2>moduleB: {{$store.state.b.name}}</h2>
    <button @click="changeName">{{$store.state.a.name}}的名字改为李四</button>
    <h2>{{$store.state.a.name}}的全称：{{$store.getters.fullName}}</h2>
    <h2>{{$store.state.a.name}}的所有信息：{{$store.getters.fullName2}}</h2>

    <h2>--------------App中的actions的使用------------</h2>
    <button @click="asyncAddPerson">添加一个新的对象</button>
    <button @click="asyncUpdateName">{{$store.state.a.name}}的名字改为周岐</button>

    <h2>--------------helloVuex的使用------------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  // 导入外部Vue文件
  import helloVuex from "./components/helloVuex.vue"

  export default {
    name: 'App',
    components: {
      helloVuex
    },
    // state
    data() {
      return {
        message: "App组件",
      }
    },
    // actions
    computed: {
      count() {
        return this.$store.state.counter
      },
    },
    methods: {
      add() {
        this.$store.commit("increase")
      },
      sub() {
        this.$store.commit("decrease")
      },
      // 单个参数
      addSize(size){
        this.$store.commit("addSize",size)
      },
      subSize(size){
        this.$store.commit("subSize",size)
      },
      // 多个参数（使用对象进行存储）
      addStudents(){
        let s = {id:114,name:"白龙马",age:28}
        this.$store.commit("addStudents", s)
      },
      changeName(){
        this.$store.commit("changeName","李四")
      },
      asyncAddPerson(){
        this.$store.dispatch("addPerson")
      },
      asyncUpdateName(){
        this.$store.dispatch("updateName")
      }
    },
  }
</script>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>