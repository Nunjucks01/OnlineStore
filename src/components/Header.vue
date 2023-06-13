<script setup lang="ts">
import { useProductStore } from "@/stores/product";
import Nav from "./HeaderNav.vue";
import RightWrapper from "./HeaderRightWrapper.vue";
import { fetchLocalStorage } from "@/services/productsService";

const store = useProductStore();

if (localStorage.getItem("products")) {
  store.shoppingCart = fetchLocalStorage();
}
</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="../images/logo.svg" alt="" />
    </RouterLink>
    <Nav />
    <RightWrapper />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-light-grey);
  max-width: 1000px;
  margin: auto;
}

img {
  margin-right: 40px;
  width: auto;
}
</style>
