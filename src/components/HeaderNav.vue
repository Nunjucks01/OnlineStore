<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useProductStore } from "@/stores/product";

const { admin } = useProductStore();
</script>
<template>
  <ul>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li v-if="admin === true">
      <RouterLink to="/create">Create</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
}

li {
  padding: 40px 0;
  color: var(--color-text);
  margin-right: 40px;
}
li:hover {
  box-shadow: inset 0px -4px 0px 0px var(--color-orange);
  color: black;
}

a {
  text-decoration: none;
  padding: 40px 0;
}
</style>
