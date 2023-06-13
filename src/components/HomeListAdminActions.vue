<script setup lang="ts">
import { deleteProduct } from "@/services/productsService";

const emit = defineEmits(["fetchAndSaveProducts"]);

defineProps(["product"]);

const onDelete = async (productId: number) => {
  await deleteProduct(productId);
  emit("fetchAndSaveProducts");
};
</script>

<template>
  <RouterLink :to="`/edit/${product.id}`">
    <button>
      <font-awesome-icon icon="fa-solid fa-pen-to-square" />
    </button>
  </RouterLink>
  <button @click="onDelete(Number(product.id))">
    <font-awesome-icon icon="fa-solid fa-trash-can" />
  </button>
</template>

<style scoped>
a {
  margin-right: 8px;
}
</style>
