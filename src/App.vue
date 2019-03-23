<template>
  <div id="app">
    
    <Home />
    <Product />
    <LogIn />
  </div>
</template>

<script>
import Home from './components/Home/Home.vue'
import Product from './components/Product/Product.vue'
import LogIn from './components/LogIn/LI.vue'

export default {
  name: 'app',
  components: {
    Home,
    Product,
    LogIn,
    SignUp

  }
}
</script>

<style>

</style>
