// 1.安装router插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: "",
    redirect: "/home",// 重定向
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
  linkActiveClass: "active",
})

// 导出router
export default router
