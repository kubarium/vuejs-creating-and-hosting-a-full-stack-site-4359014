<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { products } from "@/data";

let cart = ref([])

// const removeFromCart = (ID) => {
//   console.log(ID);
//   // cart.value.push({ id: '345', quantity: 4 })
//   const index = cart.value.findIndex(item => item.id == ID)
//   cart.value = [...cart.value.slice(0, index), ...cart.value.slice(index+1, cart.length)]
// }

const getProduct = (id) => products.find(product => product.id == id)

onBeforeMount(async () => {
  cart.value = (await axios.get(`/api/users/12345/cart`)).data
  console.log(cart);
})
</script>
<template>
  <h1>Shopping Cart</h1>
  <div v-if="cart.length">
    <div class="product-container" v-for="item in cart" :key="item.id">
      <img class="product-image" :src="`/images/${getProduct(item.id).name.toLowerCase()}-bottle.webp`">
      <div class="details-wrap">
        <h3>{{ getProduct(item.id).name }}</h3>
        <p>{{ getProduct(item.id).price }}</p>
        <input type="number" :value="item.quantity">
      </div>
      <button class="remove-button" @click="removeFromCart(item.id)">Remove From Cart</button>
    </div>
    <button class="checkout-button">Checkout</button>
  </div>

  <div v-else>
    Your cart is empty.
  </div>
</template>
