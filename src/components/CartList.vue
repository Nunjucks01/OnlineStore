<script setup lang="ts">
import { useProductStore } from "@/stores/product";
import type { CartItem } from "@/types";
import { fetchLocalStorage } from "../services/productsService";

const store = useProductStore();

const deleteItem = (item: CartItem) => {
  if (item.productAmount === 1) {
    store.shoppingCart = store.shoppingCart.filter((i) => i !== item);
  } else {
    const cartItem = store.shoppingCart.find((i) => i === item);
    cartItem.productAmount -= 1;
    cartItem.totalPrice = cartItem.price * cartItem.productAmount;
  }
  localStorage.setItem("products", JSON.stringify(store.shoppingCart));
  store.shoppingCart = fetchLocalStorage();
};
</script>

<template>
  <ul>
    <li v-for="(item, index) in store.shoppingCart" :key="index">
      <img :src="`../../${item.image}1.jpeg`" alt="" />
      <div>
        <h3>Fall Limited Edition Sneakers</h3>
        <span
          >${{ item.price }} x {{ item.productAmount }}
          <strong>${{ item.totalPrice }}.00</strong></span
        >
      </div>
      <button @click="deleteItem(item)">
        <font-awesome-icon
          icon="fa-solid fa-trash-can"
          size="xl"
          style="color: var(--color-text)"
        />
      </button>
    </li>
  </ul>
</template>

<style scoped>
img {
  width: 20%;
  border-radius: 4px;
}

h3 {
  font-size: 28px;
  margin-bottom: 20px;
}
ul {
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 52px;
  justify-content: space-between;
}
</style>
