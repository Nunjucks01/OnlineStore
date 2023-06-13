<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useProductStore } from "@/stores/product";

const store = useProductStore();
const priceArr = ref<number[]>([]);
const totalPrice = ref(0);

const calculateTotalPrice = () => {
  priceArr.value = store.shoppingCart.map((a) => a.totalPrice);
  totalPrice.value = priceArr.value.reduce((sum, current) => sum + current);
};

watchEffect(() => {
  calculateTotalPrice();
});
</script>

<template>
  <div class="total-price">Total: ${{ totalPrice }}.00</div>
  <div>
    <button class="btn-orange">
      <strong>Checkout</strong>
    </button>
  </div>
</template>

<style scoped>
div {
  text-align: center;
}
.total-price {
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 20px;
}
.btn-orange {
  width: 60%;
}
</style>
