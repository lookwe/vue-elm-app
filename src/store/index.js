import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app
  },

  //对外开发 可直接获取Vuex数据
  getters
})
