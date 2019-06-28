<template>
  <div>
    <router-link to="/customers">Go back</router-link>
    <hr/>

    <div>
      <div>
        {{ customer.fullName }}
        {{ customer.email }}
      </div>
    </div>

    Products
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in customer.products" :key="product.id">
          <td>{{ product.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { customerService } from '@/services/utils/CustomerService'

  export default {
    props: ['id'],
    
    created() {
      this.customer = customerService.find(this.id)
    }
  }
</script>