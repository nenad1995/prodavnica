<template>
  <div>
    <h1>Products</h1>
    <hr/>

    <input type="text" placeholder="Search" v-model="searchTerm">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filterProducts" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { productService } from '@/services/utils/ProductService'

  export default {
    data() {
      return {
        products: productService.list(),
        searchTerm: ''
      }
    },

    computed: {
      filterProducts () {
        return this.products.filter(product => {
          return product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        })
      }
    }
  }
</script>