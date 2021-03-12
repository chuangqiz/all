import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { services } from './api/index'
import './mock/index'

import './assets/css/base.less'
import './assets/css/reset.less'

Vue.use(ElementUI)
Vue.prototype.$api = services
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
