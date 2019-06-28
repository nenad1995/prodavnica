<template>
  <div>
    <hr/>

    <div>
      <div>
        {{ product.name }}
        Quantity: {{ product.quantity }}
        <template v-if="product.quantity">
          <div>
            <label for="customer">Customer</label>
            <select class="form-control" id="customer" v-model="selectedCustomer">
              <option disabled value="">Please select one</option>
              <option v-for="customer in customers" :key="customer.id" :value="customer">
                {{ customer.fullName }}
              </option>
            </select>
          </div>
          <button @click="purchase">Confirm</button>
          <router-link to="/products">Cancel</router-link>
        </template>
        <template v-else>
          <router-link to="/products">Go Back to Products</router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { customerService } from '@/services//utils/CustomerService'
import { productService } from '@/services/utils/ProductService'

export default {
  props: ['id'],

  data() {
    return {
      selectedCustomer: null,
      product: productService.find(this.id)
    }
  },

  created() {
    this.customers = customerService.list()
  },

  methods: {
    purchase() {
      if (!this.selectedCustomer) alert('Please select a customer.')
      
      customerService.addProductToCustomer(this.selectedCustomer, this.product)
      productService.decrement(this.product)
    }
  }
}
</script>