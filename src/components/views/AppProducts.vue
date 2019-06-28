<template>
  <div>
    <h1>Products</h1>
    <hr/>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
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
        products: productService.list()
      }
    }
  }
</script>