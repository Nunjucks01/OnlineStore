<script setup lang="ts">
import { useProductStore } from "../stores/product";
import Item from "@/components/HeaderCartItem.vue";
const store = useProductStore();
</script>

<template>
  <div class="cart">
    <div class="cart-header">
      <h4>Cart</h4>
    </div>
    <div class="cart-main">
      <p v-if="store.shoppingCart.length === 0">
        <strong>Your cart is empty.</strong>
      </p>
      <ul>
        <li v-for="(item, index) in store.shoppingCart" :key="index">
          <Item :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  position: absolute;
  background-color: white;
  top: 40px;
  right: -120px;
  border-radius: 8px;
  box-shadow: 1px 24px 54px -20px rgba(107, 107, 107, 1);
  z-index: 1;
  width: 268px;
  &-header {
    padding: 12px 20px;
    border-bottom: 1px solid var(--color-light-grey);
  }
  &-main {
    padding: 20px;
  }
}

p {
  margin: 38px 0;
  text-align: center;
}

li {
  display: flex;
  align-items: center;
  list-style: none;
  margin-bottom: 16px;
}
</style>
