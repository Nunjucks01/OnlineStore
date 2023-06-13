<script setup lang="ts">
import Filters from "../components/HomeFilters.vue";
import List from "../components/HomeList.vue";
</script>

<template>
  <div class="home-container">
    <Filters />
    <List />
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  max-width: 1000px;
  margin: auto;
  margin-top: 80px;
}
</style>
