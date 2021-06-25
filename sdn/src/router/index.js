import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决重复点击导致路由重复报错问题
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

// 路由懒加载
const Login = () => import('../components/Login.vue')
const Home = () => import('../components/Home.vue')
const Welcome = () => import('../components/Welcome.vue')


const One = () => import('../components/One.vue')
const Two = () => import('../components/Two.vue')

const User = () => import('../components/User.vue')
const Port = () => import('../components/Port.vue')
// const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Rights.vue')

// const Cate = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Cate.vue')

// const GoodsList = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/List.vue')
// const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/Add.vue')

// const Order = () => import(/* webpackChunkName: "Order_Report" */ '../components/order/Order.vue')
// const Report = () => import(/* webpackChunkName: "Order_Report" */ '../components/report/Report.vue')


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home',
    component: Home,
    redirect: '/Welcome',
    children: [
      { path: '/home', component: Welcome },
      { path: '/one', component: One },
      { path: '/two', component: Two },
      { path: '/user', component: User },
      { path: '/port', component: Port },
      // { path: '/rights', component: Rights },
      // { path: '/categories', component: Cate },
      // { path: '/goods', component: GoodsList },
      // { path: '/goods/add', component: Add },
      // { path: '/orders', component: Order },
      // { path: '/reports', component: Report }
    ] 
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
