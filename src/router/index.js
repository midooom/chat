import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/landing.page'
import MessagingPage from '@/pages/messaging.page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/messaging',
      name: 'MessagingPage',
      component: MessagingPage
    }
  ]
})
