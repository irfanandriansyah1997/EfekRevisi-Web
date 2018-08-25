import Vue from 'vue'
import router from './router'
import App from './App'
import Component from './components'

import './style/main.scss'

Component.map(x => {
  Vue.component(x.name, x.component)
  return x
})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
