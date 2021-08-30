/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-08-30 09:30:55
 * @LastEditTime: 2021-08-30 10:42:08
 */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  // 异步
  actions: {
    increment({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 3000)
    },
  },
  // 缓存
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
  },
})

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
