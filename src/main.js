// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './stroe/index'
import Mint from 'mint-ui'

import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
import 'mint-ui/lib/style.css';

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render:h=>h(App)
})
