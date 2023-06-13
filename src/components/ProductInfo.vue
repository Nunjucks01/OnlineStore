<script setup lang="ts">
import Buttons from "../components/ProductInfoButtons.vue";
import { getProduct } from "@/services/productsService";
import { useRoute } from "vue-router";

const route = useRoute();

const prop = defineProps(["product"]);

getProduct(Number(route.params.id)).then((response) => {
  Object.assign(prop.product, response.data);
});
</script>

<template>
  <div class="main-content">
    <h2 class="orange">SNEAKER COMPANY</h2>
    <h1>{{ product.name }}</h1>
    <p>
      These now-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they'll withstand everything the
      weather can offer.
    </p>
    <div class="original-price-wrapper">
      <div class="price-wrapper">
        <h3>$ {{ product.price }}</h3>
        <strong class="orange discount">50%</strong>
      </div>
      <strong class="pre-discount">$ {{ product.price * 2 }}</strong>
    </div>
    <Buttons :product="product" />
  </div>
</template>

<style lang="scss" scoped>
h2 {
  letter-spacing: 2px;
  margin-top: 48px;
  font-size: 12px;
}

h1 {
  font-size: 40px;
  line-height: 48px;
  margin-top: 16px;
}

p {
  color: var(--color-text);
  margin-top: 24px;
}

.price-wrapper {
  display: flex;
  align-items: center;
  margin-top: 16px;
}

h3 {
  font-size: 24px;
}

.discount {
  background-color: var(--color-pale-orange);
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: 12px;
}

.pre-discount {
  display: block;
  color: var(--color-light-grey);
  text-decoration: line-through;
}

.orange {
  color: var(--color-orange);
}
</style>
