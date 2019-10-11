import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "./assets/css/reset.css"
import 'lib-flexible'

import "../node_modules/vant/lib/index.css"
import vant from 'vant'

Vue.use(vant)

Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
