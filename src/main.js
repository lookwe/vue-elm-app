import Vue from 'vue'
import App from './App.vue'
import router from '@/router/'
import store from '@/store/'

import MetaInfo from 'vue-meta-info'

import '@/permission' // permission control
import './custom'

Vue.config.productionTip = false;


//如果有el: '#app' 选项。则可以不加.$mount('#app')。 
//因为vue源码中有if判断 如果有el，那么自己只需mount()函数
new Vue({
  router,
  store,
  render: h => h(App),
  data: {}, //这里不用使用函数返回，因为他根数量，属于祖宗，其他组件中必须函数返回，避免数据污染
  // 添加mounted，不然不会执行预编译
  mounted () {
    document.dispatchEvent(new Event('render-event'));
    console.log('mainjs');
  }
}).$mount('#app');
