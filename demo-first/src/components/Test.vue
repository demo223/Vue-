// 生命周期测试
<template>
  <div class="test">
    <h2 id="test-h3">test组件</h2>
    <h3>总共有{{books.length}}本图书</h3>
    <h4 id="test-h4">此时message中的数据：{{message}}</h4>
    <button @click="message+='+新数据 '">改变message</button>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      default: 'props中的数据',
      type: String,
    },
  },
  data() {
    return {
      message: 'data中的数据',
      books: [] /* 用来保存服务器请求的信息 */,
    }
  },
  methods: {
    show() {
      console.log('Test组件中的show方法')
    },
    /* 使用ajax请求服务器的数据 */
    initBookList() {
      let xhr = new XMLHttpRequest()
      xhr.addEventListener('load', () => {
        const result = JSON.parse(xhr.responseText)
        console.log(result)
        this.books = result.data
      })
      xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
      xhr.send()
    },
  },
  /* 创建阶段的第1个生命周期函数 */
  // beforeCreate() {
  //   console.log(this.info);
  //   console.log(this.message);
  //   this.show();
  // },
  /* created 生命周期函数，非常常用。
  经常在它里面，调用 methods 中的方法，请求服务器的数据。
  并且，把请求到的数据，转存到 data 中，供 template 模板渲染的时候使用！ */
  created() {
    console.log(this.info) /* props中的数据 */
    console.log(this.message) /* data中的数据 */
    this.show() /* Test组件中的show方法 */
    this.initBookList() /* 服务端请求的数据 */
  },
  beforeMount() {
    /* 相关的render函数首次被调用，但是render正在执行中，此时DOM还是无法操作的。 */
    let dom = document.querySelector('#test-h3')
    console.log('beforeMount阶段的dom信息：' + dom) /* null */
  },
  mounted() {
    /* 已经把内存中的HTML结构，成功的渲染到了浏览器之中。此时浏览器中已然包含了当前组件的DOM结构. */
    let dom = document.querySelector('#test-h3')
    console.log(
      'mounted阶段的dom信息：' + dom
    ) /* [object HTMLHeadingElement] */
  },
  beforeUpdate() {
    /* 当数据发生变化时执行此函数 */
    let dom = document.querySelector('#test-h4')
    console.log('beforeUpdate：' + dom.innerHTML)
    /* 此时得到的是仍是原来的旧数据 */
  },
  updated() {
    /* 已经得到了数据，并且重新渲染了dom结构 */
    let dom = document.querySelector('#test-h4')
    console.log('updated：' + dom.innerHTML)
    /* 此时得到的已经是最新的数据 */
  },
  beforeDestroy() {
    console.log('beforeDestroy：' + this.message)
    /* 此时还可以获取数据,组件还未销毁 */
  },
  destroyed() {
    /* 组件已被销毁 */
    console.log('destroyed：' + this.message) /* 数据还可以正常访问 */
    let dom = document.querySelector('.test')
    console.log(dom) /* null，dom结构已被完全移除 */
  },
}
</script>

<style <style lang="less" scoped>
.test {
  height: 200px;
  background-color: aqua;
}
</style>>
</style>