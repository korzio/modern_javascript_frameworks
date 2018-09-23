import Vue from 'vue'
import Router from 'vue-router'
import HelloVue from '@/components/HelloVue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloVue',
      component: HelloVue
    },
    {
      path: '/world',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
