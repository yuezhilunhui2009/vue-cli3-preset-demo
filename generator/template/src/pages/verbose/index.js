import Vue from 'vue'
import App from './App'
import commonFilters from '@/scripts/filters/'
import router from './router'
import store from './store'

// 添加全局 filters
Object.keys(commonFilters).forEach(key => Vue.filter(key, commonFilters[key]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  router,
  store
})
