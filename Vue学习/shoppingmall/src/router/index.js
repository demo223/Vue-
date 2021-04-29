import Vue from "vue"
import VueRouter from "vue-router"

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error)
}

//  路由懒加载
const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Cart = () => import("../views/cart/Cart")
const Profile = () => import("../views/profile/Profile")
// 1.安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home",  //  保证初始界面为home界面
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

// 2.创建VueRouter对象
const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
})

export default router
