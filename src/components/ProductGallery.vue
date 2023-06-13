<script setup lang="ts">
import { ref } from "vue";

defineProps(["galleryShown", "product"]);

const emit = defineEmits(["galleryToggle"]);

const thumbnails = [1, 2, 3, 4];
const activeThumbnail = ref(1);

const buttonClick = () => emit("galleryToggle");

const previousImg = () => {
  if (activeThumbnail.value === 1) {
    activeThumbnail.value = thumbnails[thumbnails.length - 1];
  } else {
    activeThumbnail.value--;
  }
};

const nextImg = () => {
  if (activeThumbnail.value === thumbnails[thumbnails.length - 1]) {
    activeThumbnail.value = 1;
  } else {
    activeThumbnail.value++;
  }
};

const changeImg = (event: Event) => {
  activeThumbnail.value = Number((event.target as HTMLButtonElement).value);
};
</script>

<template>
  <div class="gallery" v-if="galleryShown">
    <div class="icon-x">
      <button @click="buttonClick">
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          size="2xl"
          style="color: #fff"
        />
      </button>
    </div>
    <div class="main-img">
      <button class="arrow left" @click="previousImg">
        <font-awesome-icon
          icon="fa-solid fa-chevron-left"
          style="color: #000000"
        />
      </button>
      <img :src="`../../${product.image}${activeThumbnail}.jpeg`" alt="" />
      <button class="arrow right" @click="nextImg">
        <font-awesome-icon
          icon="fa-solid fa-chevron-right"
          style="color: #000000"
        />
      </button>
    </div>
    <ul class="gallery-thumbnail-wrapper">
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
  <div class="overlay" v-if="galleryShown"></div>
</template>

<style lang="scss" scoped>
.gallery {
  position: absolute;
  z-index: 3;
  top: -20%;
  left: 25%;
}
.icon-x {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}
.main-img {
  position: relative;
  width: 500px;
  height: 500px;
}

img {
  border-radius: 10px;
}
.arrow {
  background-color: white;
  border-radius: 50%;
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left {
  top: 50%;
  left: 0;
  transform: translate(-50%, 0);
}
.right {
  top: 50%;
  right: 0;
  transform: translate(50%, 0);
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-top: 32px;
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
.overlay {
  background-color: rgba($color: #000000, $alpha: 0.75);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
