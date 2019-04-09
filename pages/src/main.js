// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import axios from 'axios'
import qs from 'qs'
// import Scrollload from 'Scrollload'
// import Vconsole from '@/assets/vConsole'

Vue.prototype.qs = qs
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//axios.defaults.baseURL = 'http://192.168.31.6:8890/js/a/'
axios.defaults.baseURL = 'http://47.107.133.180/js/a/'
Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false
// FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
