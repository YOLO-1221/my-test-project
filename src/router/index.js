import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// 表单
import FormView from '../views/Form/Verification/index'
// 样式
import SomeStyle from '../views/Style/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/style',
    name: 'style',
    component: SomeStyle
  }
]

const router = new VueRouter({
  routes
})

export default router
