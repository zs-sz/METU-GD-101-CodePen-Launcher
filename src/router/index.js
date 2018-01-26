import Vue from 'vue'
import Router from 'vue-router'
import Launcher from '@/components/Launcher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Launcher',
      component: Launcher
    }
  ]
})
