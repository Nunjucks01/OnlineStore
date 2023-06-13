<script setup lang="ts">
import { ref, reactive } from "vue";
import Gallery from "../components/ProductGallery.vue";
import Images from "../components/ProductImages.vue";
import Info from "../components/ProductInfo.vue";

const galleryShown = ref(false);

const product = reactive({
  name: "",
  category: "white",
  image: "src/images/image-product-2-",
  price: 0,
  inStock: true,
});

const galleryToggle = () => {
  galleryShown.value = !galleryShown.value;
};
</script>
<template>
  <div class="productPage">
    <Gallery
      :galleryShown="galleryShown"
      :product="product"
      @gallery-toggle="galleryToggle"
    />
    <Images
      :galleryShown="galleryShown"
      :product="product"
      @gallery-toggle="galleryToggle"
    />
    <Info :product="product" />
  </div>
</template>

<style scoped>
.productPage {
  display: grid;
  grid-template-columns: 45% 45%;
  max-width: 900px;
  margin: auto;
  margin-top: 80px;
  gap: 100px;
  position: relative;
}
</style>
