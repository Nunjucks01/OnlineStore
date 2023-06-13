<script setup lang="ts">
import { ref } from "vue";
import { useProductStore } from "../stores/product";

const store = useProductStore();
const prop = defineProps(["product"]);

const productNumber = ref(0);

const addToCart = () => {
  const sameProduct = store.shoppingCart.find(
    (product) => product.name === prop.product.name
  );
  if (sameProduct === undefined) {
    store.shoppingCart.push({
      name: prop.product.name,
      image: prop.product.image,
      price: prop.product.price,
      productAmount: productNumber.value,
      totalPrice: prop.product.price * productNumber.value,
    });
  } else {
    sameProduct.totalPrice += prop.product.price * productNumber.value;
    sameProduct.productAmount += productNumber.value;
  }
  localStorage.setItem("products", JSON.stringify(store.shoppingCart));
};
</script>

<template>
  <div class="btn-wrapper">
    <div class="btn-grey">
      <button :disabled="productNumber === 0" @click="productNumber--">
        <font-awesome-icon
          icon="fa-solid fa-minus"
          size="xs"
          style="color: var(--color-orange)"
        />
      </button>
      <strong>{{ productNumber }}</strong>
      <button @click="productNumber++">
        <font-awesome-icon
          icon="fa-solid fa-plus"
          size="xs"
          style="color: var(--color-orange)"
        />
      </button>
    </div>
    <button
      :disabled="productNumber === 0"
      @click="addToCart()"
      class="btn-orange"
    >
      <font-awesome-icon
        icon="fa-solid fa-cart-shopping"
        style="color: #ffffff"
      />
      <strong>Add to cart</strong>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn-wrapper {
  display: grid;
  grid-template-columns: 35% 55%;
  margin-top: 28px;
  gap: 16px;
}

.btn-grey {
  background-color: var(--color-background);
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-radius: 10px;
  & button {
    color: var(--color-orange);
    background-color: var(--color-background);
    font-size: 20px;
  }
}
.btn-orange {
  & svg {
    margin-right: 12px;
  }
}
</style>
