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

//https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局前置守卫
/*to: Route: 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由
next: Function: 一定要调用该方法来 resolve 这个钩子*/
router.beforeEach((to,form,next) => {
  const isLogin = localStorage.pro_toKen;
  if (to.path == '/login') {
    next();
  }else {
    isLogin ? next() : next('/login');
  }
});

export default router
