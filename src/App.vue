<template>
  <div id="container">
  <router-link to="/">购物车</router-link>
  <router-link to="/address">地址</router-link>
  <router-view></router-view>
  <slot></slot> 
 <!--  <v-address/> -->
  </div>
</template>

<script>
// import Cart from './components/cart/cart.vue'
// import Address from './components/address/address.vue'
export default {
 name: 'App',
 // components:{
 //  'v-address':Address
 // }
}
</script>

<style>
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
