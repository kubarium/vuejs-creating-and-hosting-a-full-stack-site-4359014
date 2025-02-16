<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import NotFound from './NotFound.vue'
import { onBeforeMount, ref } from "vue";

const route = useRoute();
let product = ref()
onBeforeMount(async () => {
  product.value = (await axios.get(`/api/products/${route.params.productID}`)).data
})

const addToCart = async() => {
  await axios.post('/api/users/12345/cart', {
    id: route.params.productID,
    quantity:1234
  })
}
</script>
<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="`/images/${product.name.toLowerCase()}-bottle.webp`" :alt="product.name" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <button class="add-to-cart" @click="addToCart">Add To Cart</button>
    </div>
  </div>
  <div v-else>
    <NotFound />
  </div>
</template>
