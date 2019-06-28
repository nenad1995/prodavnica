import Vue from 'vue'
import Router from 'vue-router'

import Customers from './components/views/AppCustomers.vue'
import Products from './components/views/AppProducts.vue'
import LatestPurchases from './components/views/AppLatestPurchases.vue'


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
      path: '/customers/:id',
      name: 'latest-purchases',
      component: LatestPurchases,
      props: true
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    }
  ]
})