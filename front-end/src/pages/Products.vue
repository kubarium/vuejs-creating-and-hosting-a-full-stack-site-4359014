<script setup>
import axios from "axios";
import ProductList from "../components/ProductList.vue";
import { onBeforeMount, ref } from "vue";

let products = ref([])
onBeforeMount(async() => {
  products.value = (await axios.get("/api/products")).data
})
</script>
<template>
  <h1>Products</h1>
  <ProductList :products="products" />

</template>
