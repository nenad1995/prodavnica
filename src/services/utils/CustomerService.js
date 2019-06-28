const customers = [
  {
    id: 1,
    fullName: 'Mario Speedwagon',
    email: 'example@example.com',
    products: []
  },
  {
    id: 2,
    fullName: 'Petey Cruiser',
    email: 'example@example.com',
    products: []
  },
  {
    id: 3,
    fullName: 'Anna Sthesia',
    email: 'example@example.com',
    products: []
  }
  ]
  
  let nextId = 4
  
export default class CustomerService {
  list() {
    return customers;
  }

  remove(customer) {
    customers.splice(customers.indexOf(customer), 1)
  }
}

export const customerService = new CustomerService();