<script setup lang="ts">
import { ref } from "vue";
import Cart from "./HeaderCart.vue";
import { useProductStore } from "@/stores/product";
import { RouterLink } from "vue-router";
const store = useProductStore();

const cartVisible = ref(false);
</script>

<template>
  <div class="cart-actions">
    <div class="icon">
      <div class="cart-length" v-if="store.shoppingCart.length">
        {{ store.shoppingCart.length }}
      </div>
      <RouterLink to="/cart">
        <font-awesome-icon
          @mouseover="cartVisible = true"
          @mouseout="cartVisible = false"
          icon="fa-solid fa-cart-shopping"
          style="color: #000000"
        />
      </RouterLink>
      <Cart v-if="cartVisible" />
    </div>
    <button class="avatar">
      <img src="../images/image-avatar.png" alt="Avatar image" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.cart-actions {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.icon {
  margin-right: 32px;
  position: relative;
}

.cart-length {
  background-color: var(--color-orange);
  border-radius: 10px;
  font-size: 7px;
  color: white;
  padding: 0 6px;
  position: absolute;
  top: -4px;
  left: 8px;
}

.avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  &:hover {
    outline: 2px solid var(--color-orange);
  }
}
</style>
