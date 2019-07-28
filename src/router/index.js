import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const constRouterMap = [
  {
    path: '/',
    name: 'home',
    //异步加载  一个组件生成一个js
    component: resolve => require(['@/views/Home.vue'],resolve)
  }, {
    path: '/login',
    name: 'login',
    //懒加载 vue官方推荐
    component:() => import('@/views/Login.vue')
  }
];

const router = new Router({
  mode: 'history',
  routes: constRouterMap
});

export default router
