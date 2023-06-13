import { ref } from "vue";
import { defineStore } from "pinia";
import type { CartItem, Product } from "@/types";

export const useProductStore = defineStore("product", () => {
  const admin = true;
  const shoppingCart = ref<CartItem[]>([]);
  const products = ref<Product[]>([]);
  const search = ref("");
  const activePage = ref(1);

  return {
    admin,
    shoppingCart,
    products,
    search,
    activePage,
  };
});
