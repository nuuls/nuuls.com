import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from 'components/Hello'
import Memes from 'components/Memes'
import Uploader from 'components/Uploader'

export default new Router({
  mode: 'history',
  root: '/',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/memes',
      name: 'memes',
      component: Memes
    },
    {
      path: '/i',
      name: 'i',
      component: Uploader
    }
  ]
})
