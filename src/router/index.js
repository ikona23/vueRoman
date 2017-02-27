import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Logo from '@/components/Logo'
import Contact from '@/components/Contact'
import Products from '@/components/Products'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/contact',
      name: 'Contact',
      component:Contact
    },
    {
      path: '/products',
      name: 'Products',
      component:Products
    },
    {
      path: '/header',
      name: 'Header',
      component:Header
    },
    {
      path: '/logo',
      name: 'Logo',
      component:Logo
    }
  ],
  mode: 'history'
})
