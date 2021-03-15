import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    userInfo: JSON.parse(localStorage.getItem('cloud_user_info')) || {},
    userRole: JSON.parse(localStorage.getItem('cloud_user_role')) || {}
  },
  mutations: {
    SET_USER_INFO (state, payload) {
      state.userInfo = payload
      localStorage.setItem('cloud_user_info', JSON.stringify(payload))
    },
    SET_USER_ROLE (state, payload) {
      state.userRole = payload
      localStorage.setItem('cloud_user_role', JSON.stringify(payload))
    },
    LOGOUT (state) {
      state.userInfo = {}
      localStorage.clear()
      router.push({
        name: 'Login'
      })
    }
  },
  actions: {
    // 保存用户信息
    setUserInfo (context, data) {
      context.commit('SET_USER_INFO', data)
    },
    setUserRole (context, data) {
      context.commit('SET_USER_ROLE', data)
    },
    // 退出登录
    logout (context) {
      context.commit('LOGOUT')
    }
  },
  modules: {
  }
})
