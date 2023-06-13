<script setup lang="ts">
import { watchEffect, ref } from "vue";
import { useProductStore } from "@/stores/product";
import { useCategoriesStore } from "@/stores/categories";
import { getProducts } from "../services/productsService";
import type { Params } from "../types";
import AdminActions from "./HomeListAdminActions.vue";
import Nav from "./HomeListNav.vue";

const productStore = useProductStore();
const categoriesStore = useCategoriesStore();

categoriesStore.fetchAndSaveCategories();

const productsTotal = ref(0);

const fetchAndSaveProducts = () => {
  const params: Params = {
    name_like: productStore.search,
    _page: productStore.activePage,
  };
  categoriesStore.activeCategory
    ? (params.categoryId = categoriesStore.activeCategory.id)
    : "";
  return getProducts(params).then(
    (response) => (
      (productStore.products = response.data),
      (productsTotal.value = Number(response.headers["x-total-count"]))
    )
  );
};

watchEffect(() => {
  fetchAndSaveProducts();
});
</script>

<template>
  <ul class="products-list">
    <li v-for="product in productStore.products" :key="Number(product.id)">
      <RouterLink :to="`products/${product.id}`">
        <img :src="`../../${product.image}1.jpeg`" alt="" />
        <div class="category-wrapper">
          <div class="category">{{ product.category }}</div>
          <strong v-if="!product.inStock">Out of Stock!</strong>
        </div>
        <h2>{{ product.name }}</h2>
        <div class="price">{{ product.price }} $</div>
      </RouterLink>
      <AdminActions
        v-if="productStore.admin"
        @fetch-and-save-products="fetchAndSaveProducts()"
        :product="product"
      />
    </li>
  </ul>
  <Nav :productsTotal="productsTotal" />
</template>

<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5%;

  & li {
    width: 30%;
    margin-bottom: 24px;
  }
}
img {
  margin-bottom: 8px;
}

.category-wrapper {
  display: flex;
  justify-content: space-between;
}

.price {
  font-weight: 700;
}
strong {
  color: red;
}
</style>
