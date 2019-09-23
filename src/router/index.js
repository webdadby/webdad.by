import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Header from '@/components/Header'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/Nav'
import ItService from '@/components/ItService'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ere',
      name: 'ItService',
      component: ItService
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test3',
      name: 'Header',
      component: Header
    },
    {
      path: '/test2',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/test1',
      name: 'HelloWorld',
      component: HelloWorld
    }
    
  ]
})
