<script setup lang="ts">
defineProps(["item"]);
</script>

<template>
  <img :src="`../../${item.image}1.jpeg`" alt="" />
  <div>
    <h5>{{ item.name }}</h5>
    <span
      >${{ item.price }} x {{ item.productAmount }}
      <strong>${{ item.totalPrice }}.00</strong></span
    >
  </div>
</template>

<style scoped>
img {
  width: 36px;
  border-radius: 4px;
  margin-right: 12px;
}
</style>
