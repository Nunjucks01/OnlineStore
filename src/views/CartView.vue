<script setup lang="ts">
import { useProductStore } from "@/stores/product";
import List from "../components/CartList.vue";
import Checkout from "../components/CartCheckout.vue";

const store = useProductStore();
</script>

<template>
  <div class="cart">
    <div class="cart-header">
      <h2>Cart</h2>
    </div>
    <div class="cart-main">
      <p v-if="store.shoppingCart.length === 0">
        <strong>Your cart is empty.</strong>
      </p>
      <List />
      <Checkout v-if="store.shoppingCart.length !== 0" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  max-width: 600px;
  margin: auto;
  margin-top: 80px;
  &-header {
    padding: 12px 20px;
    font-size: 32px;
    text-align: center;
  }
  &-main {
    padding: 20px;
  }
}

p {
  margin: 38px 0;
  text-align: center;
  font-size: 20px;
}
</style>
