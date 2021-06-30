import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决重复点击导致路由重复报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

// 路由懒加载
const Login = () => import('../components/Login.vue')
const Home = () => import('../components/Home.vue')
const Welcome = () => import('../components/Welcome.vue')

const User = () => import('../components/User.vue')
const Chart = () => import('../components/Chart.vue')
const Tuopu = () => import('../components/Tuopu/Tuopu.vue')
const Table1 = () => import('../components/Tuopu/Table1.vue')
const Table2 = () => import('../components/Tuopu/Table2.vue')
const Table3 = () => import('../components/Tuopu/Table3.vue')
const Port = () => import('../components/Port.vue')
const Ip = () => import('../components/Ip.vue')
const Balance = () => import('../components/Balance.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/user', component: User },
      { path: '/chart', component: Chart },
      { path: '/tuopu', component: Tuopu },
      { path: '/table1', component: Table1 },
      { path: '/table2', component: Table2 },
      { path: '/table3', component: Table3 },
      { path: '/port', component: Port },
      { path: '/ip', component: Ip },
      { path: '/balance', component: Balance },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
