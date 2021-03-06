// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import './style/common.css'
import './icon/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//挂载swiper
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


Vue.use(VueAxios,axios);
/* eslint-disable no-new */
new Vue({
   el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
