<template>
  <div id="app">
    <nav>
      <div>
        <a href="#">Store</a>
        <div>
          <ul>
            <router-link to="/customers">
              Customers
            </router-link>
            <router-link to="/products">
              Products
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>