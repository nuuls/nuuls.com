// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'hack/dist/dark-grey.css'
import 'hack'
import http from 'vue-resource'
import Websocket from './plugins/websocket'

Vue.use(http)
Vue.use(new Websocket(), {
  url: 'ws://localhost:7333'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  http: {
    root: 'http://localhost:7333'
  },
  template: '<App/>',
  components: { App }
})
