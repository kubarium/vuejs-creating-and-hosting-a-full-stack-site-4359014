<script setup>
import { defineProps } from "vue";

const props = defineProps({
  products: Array
})

</script>

<template>
  <div class="grid-wrap">

    <div v-for="product in props.products" class="product-item" :key="product.id">
      <img :src="`/images/${product.name.toLowerCase()}-bottle.webp`" :alt="product.name" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <RouterLink :to="`/products/${product.id}`">
        <button>View Details</button>
      </RouterLink>
    </div>
  </div>
</template>
