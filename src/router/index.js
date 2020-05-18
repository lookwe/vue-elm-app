import Vue from 'vue'
import Router from 'vue-router'

//不按需加载
import login from '@/views/Login.vue'

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
        //懒加载方式 vue官方推荐
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
        component: resolve => require(['@/views/mine/Me.vue'], resolve)
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
    component: login,
  },
];

const router = new Router({
  mode: 'history',
  routes: constRouterMap
});

export default router
