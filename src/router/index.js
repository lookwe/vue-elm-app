import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const constRouterMap = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    //异步加载  一个组件生成一个js
    component: resolve => require(['@/views/index/index.vue'], resolve),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/index/Home.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/views/order/Order.vue')
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('@/views/mine/Me.vue')
      },{
        path: '/discover',
        name: 'discover',
        component: () => import('@/views/discover/index.vue')
      },{
        path: '/address',
        name: 'address',
        component: () => import('@/views/address/index.vue')
      },
    ]
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
