// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store'
import './common/stylus/index.styl'

fastclick.attach(document.body)

/* eslint-disable no-new */
let app = new Vue({
  router,
  store,
  render: h => h(App)
})
if (process.env.NODE_ENV === 'development') {
  app.$mount('#app')
} else {
  window.mountApp = () => {
    app.$mount('#app')
  }
  if (window.STYLE_READY) {
    window.mountApp()
  }
}
