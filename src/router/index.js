import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter) // Vue通过Vue.use()方法来使用插件

// 定义路由，每个路由映射一个组件
const routes = [
  {
    path: '/',
    name: 'home',
    // 不做代码分割
    // HomeView对应的js和css内容将被打包至app.[hash].js和app.[hash].css中，并在应用初次加载时被加载，即使该路由并没有被访问
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // 路由层面的代码分割
    // AboutView对应的js和css内容将被打包成独立的js（about.[hash].js）和css（about.[hash].css），且在该路由被访问时才加载（懒加载）
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes // 构建VueRouter实例，该写法是'routes': routes的简写
})

export default router
