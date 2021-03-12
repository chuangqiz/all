import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo: JSON.parse(localStorage.getItem('cloud_user_info')) || {}
  },
  mutations: {
    SET_USER_INFO (state, payload) {
      state.userInfo = payload
      localStorage.setItem('cloud_user_info', JSON.stringify(payload))
    }
  },
  actions: {
    setUserInfo (context, data) {
      context.commit('SET_USER_INFO', data)
    }
  },
  modules: {
  }
})
