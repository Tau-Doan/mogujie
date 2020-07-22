import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

  //常用路由
export const frequentlyRoutes = [
  {
    path : '*',
    redirect:()=>import('@/views/home/home')
  },
  {
    path : '/home',
    component:()=>import('@/views/home/home'), //路由直接引入和懒加载
    hidden: true
  },
  {
    path : '/profile',
    component:()=>import('@/views/profile/profile'),
    hidden: true
  },
  {
    path : '/classi',
    component:()=>import('@/views/classi/classi'),
    hidden: true
  },
  {
    path : '/cart',
    component:()=>import('@/views/cart/cart'),
    hidden: true
  },
]

export default new Router({
  mode: 'history', // 去掉url中的#
  linkActiveClass: 'active',
  routes:frequentlyRoutes,
})
