import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/page/Home'
import Product from '@/components/page/Product'
import Partners from '@/components/page/Partners'
import Contact from '@/components/page/Contact'
import Software from '@/components/page/Software'
import Businesssolve from '@/components/page/service_page/Businesssolve'
import Continuesdev from '@/components/page/service_page/Continuesdev'
import CompetitorAnalysis from '@/components/page/service_page/competitorAnalysis'
import Marketingautsorsing from '@/components/page/service_page/Marketingautsorsing'
import Sitedev from '@/components/page/service_page/Sitedev'
import Appdev from '@/components/page/service_page/Appdev'
import Header from '@/components/HeaderHome'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/Nav'
import ItService from '@/components/ItService'


Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Software',
      name: 'Software',
      component: Software
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/partners',
      name: 'Partners',
      component: Partners
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/marketing-na-autsorsinge',
      name: 'Marketingautsorsing',
      component: Marketingautsorsing
    },
    {
      path: '/competitoranalysis',
      name: 'Competitoranalysis',
      component: CompetitorAnalysis
    },
    {
      path: '/continuesdev',
      name: 'Continuesdev',
      component: Continuesdev
    },
    {
      path: '/businesssolve',
      name: 'Businesssolve',
      component: Businesssolve
    },
    {
      path: '/appdev',
      name: 'Appdev',
      component: Appdev
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
