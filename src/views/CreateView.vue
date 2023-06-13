<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { getProduct } from "@/services/productsService";
import { storeToRefs } from "pinia";
import { useCategoriesStore } from "@/stores/categories";
import Buttons from "../components/CreateButtons.vue";

const route = useRoute();

const { categories } = storeToRefs(useCategoriesStore());

const imageUrl = ref("");

const product = reactive({
  name: "",
  category: "white",
  image: "",
  price: null,
  inStock: true,
});

const setCategory = (event: Event) => {
  product.category = (event.target as HTMLSelectElement).value;
};

const setInStock = (event: Event) => {
  product.inStock = JSON.parse((event.target as HTMLSelectElement).value);
};

const onInput = () => {
  product.image = `src/images/image-product-${imageUrl.value}-`;
};

if (route.path === `/edit/${route.params.id}`) {
  getProduct(Number(route.params.id)).then((response) => {
    Object.assign(product, response.data);
  });
}
</script>

<template>
  <section>
    <div class="img-create">
      <img src="../images/image-product-0.jpeg" alt="" />
      <input @input="onInput()" v-model="imageUrl" type="text" />
    </div>
    <div class="info-create">
      <select @change="setCategory" name="" id="">
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.slug"
        >
          {{ category.name }}
        </option>
      </select>
      <div>
        <label for="name">Name</label>
        <input v-model="product.name" id="name" type="text" />
      </div>
      <div>
        <label for="price">Price</label>
        <input v-model="product.price" id="price" type="number" />
      </div>
      <select @change="setInStock" name="" id="stock">
        <option :value="true">In Stock</option>
        <option :value="false">Out of Stock</option>
      </select>
      <Buttons :product="product" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  max-width: 1000px;
  margin: 60px auto;
  display: flex;
  justify-content: center;
  gap: 100px;
}
input {
  max-width: 300px;
  margin-bottom: 40px;
}

label {
  margin-right: 12px;
}

select {
  margin-bottom: 20px;
}

img {
  width: 300px;
  height: 300px;
}

.img-create {
  display: flex;
  flex-direction: column;
  & img {
    margin-bottom: 40px;
  }
}
.info-create {
  margin-top: 20px;
}
</style>
