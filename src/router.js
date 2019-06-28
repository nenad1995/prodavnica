import Vue from 'vue'
import Router from 'vue-router'

import Customers from './components/views/AppCustomers.vue'
import Products from './components/views/AppProducts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'customers'
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    }
  ]
})