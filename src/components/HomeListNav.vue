<script setup lang="ts">
import { computed } from "vue";
import { useProductStore } from "../stores/product";

const store = useProductStore();

const prop = defineProps(["productsTotal"]);

const prevoiusPage = () => store.activePage--;
const nextPage = () => store.activePage++;

const isNextButtonDisabled = computed(() => {
  return (
    store.activePage === Math.ceil(prop.productsTotal / 12) ||
    prop.productsTotal === 0
  );
});
</script>

<template>
  <div class="nav">
    <button
      :disabled="store.activePage === 1"
      @click="prevoiusPage"
      class="nav-item"
    >
      &lt;
    </button>
    <button class="nav-item">{{ store.activePage }}</button>
    <button :disabled="isNextButtonDisabled" @click="nextPage" class="nav-item">
      >
    </button>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  gap: 20px;
  display: flex;
  justify-content: center;
  margin: 60px 0;
  &-item {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 2px solid black;
    &:hover {
      background-color: var(--color-pale-orange);
      border: 2px solid var(--color-orange);
      color: var(--color-orange);
    }
    &:disabled {
      border: 2px solid var(--color-light-grey);
      cursor: unset;
      color: var(--color-light-grey);
      &:hover {
        background-color: transparent;
        color: var(--color-light-grey);
      }
    }
  }
}
</style>
