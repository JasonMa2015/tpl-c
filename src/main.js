import 'babel-polyfill'
import Vue from 'vue'
import iView from 'iview'
import App from './App'
import router from './router'
import store from './store'
import rootFont from './libs/rootFont.js'
import 'iview/dist/styles/iview.css'
import './themes/index.less'
rootFont()
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
window.hz = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
