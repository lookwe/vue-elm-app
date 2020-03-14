import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

const noRedirects = ['/login']; //不重定向路由路由表
//https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局前置守卫
/*to: Route: 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由
next: Function: 一定要调用该方法来 resolve 这个钩子*/
router.beforeEach((to, form, next) => {
    NProgress.start();
    const isLogin = localStorage.pro_toKen;
    if (isLogin) {
        if (to.path === '/login') {
            //next({path: '/'});  //有token 跳到首页
            next();
        }else {
            next();
        }
    }else {
        if (noRedirects.includes(to.path)) {
            next();
        }else {
            //否则全部重定向到登录页
            next(`login?redirect=${to.path}`)
        }
    }
});

//路由完成后
router.afterEach(() => {
    NProgress.done()
});
