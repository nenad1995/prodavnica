<template>
  <div>
    <h1>Customers</h1>
    <hr/>
    <div>
      <div>
        <form @submit.prevent="addCustomer">
          <div>
            <label for="name">Name</label>
            <input v-model="newCustomer.fullName" type="text" class="form-control" id="name" placeholder="Enter name">
          </div>
          <div>
            <label for="email">Email address</label>
            <input v-model="newCustomer.email" type="email" class="form-control" id="email" placeholder="Enter email">
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
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
        newCustomer: {},
        customers: customerService.list()
      }
    },

    methods: {
      addCustomer() {
        customerService.add(this.newCustomer)
        this.newCustomer = {}
      },

      removeCustomer(customer) {
        customerService.remove(customer);
      }
    }
  }
</script>