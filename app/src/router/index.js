import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from 'components/Hello'
import Memes from 'components/Memes'
import Lul from 'components/Lul'

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
      path: '/lul',
      name: 'lul',
      component: Lul
    }
  ]
})
