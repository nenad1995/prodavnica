<template>
  <div>
    <h1>Customers</h1>
    <hr/>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td>{{ customer.fullName }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <button @click="removeCustomer(customer)">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { customerService } from '@/services/utils/CustomerService'

  export default {
    data() {
      return {
        customers: customerService.list()
      }
    },

    methods: {
      removeCustomer(customer) {
        customerService.remove(customer);
      }
    }
  }
</script>