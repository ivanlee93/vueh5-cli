// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import IboxPlugin from '@/plugins/ibox'
import autoRouteStore from 'vue-chunk-routes-store'

const storeContext = require.context('./store/modules', true, /\.js$/)
const routerContext = require.context('./router/modules', true, /\.js$/)
Vue.use(autoRouteStore, {
  store,
  storeContext,
  router,
  routerContext
})
Vue.use(IboxPlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
