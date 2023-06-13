<script setup lang="ts">
import { useRoute } from "vue-router";
import { createProduct, editProduct } from "@/services/productsService";

defineProps(["product"]);

const route = useRoute();
</script>

<template>
  <RouterLink to="/">
    <button v-if="route.path === '/create'" @click="createProduct(product)">
      Create
    </button>
  </RouterLink>
  <RouterLink to="/">
    <button
      v-if="route.path === `/edit/${route.params.id}`"
      @click="editProduct(Number(route.params.id), product)"
    >
      Save
    </button>
  </RouterLink>
</template>

<style scoped>
button {
  background-color: var(--color-orange);
  color: white;
  padding: 20px 40px;
  display: block;
  margin-top: 20px;
}
</style>
