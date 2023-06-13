<script setup lang="ts">
import { ref } from "vue";
import { useProductStore } from "../stores/product";

const store = useProductStore();

defineProps(["galleryShown", "product"]);

const thumbnails = [1, 2, 3, 4];
const activeThumbnail = ref(1);

const changeImg = (event: Event) => {
  activeThumbnail.value = Number((event.target as HTMLButtonElement).value);
};
</script>
<template>
  <div>
    <button class="main-img" @click="$emit('galleryToggle')">
      <img
        :src="`../../${product.image}${activeThumbnail}.jpeg`"
        :alt="`Picture ${activeThumbnail}`"
      />
    </button>
    <ul>
      <button
        @click="changeImg"
        v-for="(thumbnail, index) in thumbnails"
        :key="index"
      >
        <li
          :value="thumbnail"
          :class="{ active: activeThumbnail === thumbnail }"
        >
          <img
            :src="`../../${product.image}${thumbnail}.jpeg`"
            :alt="`Picture ${thumbnail}`"
          />
        </li>
      </button>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.main-img {
  width: 405px;
  height: 405px;
}

img {
  border-radius: 10px;
}

ul {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  list-style: none;
}

li {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 10px;
  & img {
    width: 80px;
    height: 80px;
  }
}

.active {
  outline: 2px solid var(--color-orange);
}

li:hover,
.active {
  &:after {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 10px;
    background-color: rgba($color: #fff, $alpha: 0.5);
  }
}
</style>
