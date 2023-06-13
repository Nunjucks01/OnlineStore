<script setup lang="ts">
import { watch, watchEffect } from "vue";
import { useProductStore } from "@/stores/product";
import { useCategoriesStore } from "@/stores/categories";
import { getProducts } from "../services/productsService";

const productStore = useProductStore();
const categoriesStore = useCategoriesStore();

watch(
  () => productStore.search,
  () => {
    productStore.activePage = 1;
  }
);

const getAllProducts = () => {
  categoriesStore.updateActiveCategory(null);
  const params = {
    name_like: productStore.search,
    _page: productStore.activePage,
  };
  return getProducts(params).then(
    (response) => (productStore.products = response.data)
  );
};

const categoryChange = (categoryId: number) => {
  categoriesStore.updateActiveCategory(categoryId);
};

watchEffect(() => {
  getAllProducts;
});
</script>

<template>
  <div>
    <ul>
      <li>
        <button
          :class="{ active: !categoriesStore.activeCategory }"
          @click="getAllProducts()"
        >
          all
        </button>
      </li>
      <li v-for="(category, index) in categoriesStore.categories" :key="index">
        <button
          :class="{ active: category === categoriesStore.activeCategory }"
          @click="categoryChange(category.id)"
        >
          {{ category.name }}
        </button>
      </li>
    </ul>
    <input v-model="productStore.search" type="text" placeholder="search" />
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 20px;
  max-width: 960px;
}

li {
  display: inline-block;
  margin-right: 24px;
}

button {
  padding: 4px 8px;
  border-radius: 4px;
  &:hover {
    background-color: var(--color-pale-orange);
    color: var(--color-orange);
  }
}
.active {
  background-color: var(--color-pale-orange);
  color: var(--color-orange);
}
</style>
