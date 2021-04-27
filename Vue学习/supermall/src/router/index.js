import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Cart = () => import("../views/cart/Cart")
const Profile = () => import("../views/profile/Profile")

// 1.安装router插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: "",
    redirect: "/home", // 重定向
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/profile",
    component: Profile,
  },
]

const router = VueRouter({
  routes,
  mode: "history", //将hash模式改为history模式
})

// 导出router
export default router
