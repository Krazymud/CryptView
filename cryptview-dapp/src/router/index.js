import Vue from 'vue'
import Router from 'vue-router'
import cryptview from '@/components/cryptview-dapp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cryptview',
      component: cryptview
    }
  ]
})
