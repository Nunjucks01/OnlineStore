import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import type { Category } from "@/types";

const CATEGORIES_URL = "http://localhost:3000/categories";

export const useCategoriesStore = defineStore("categories", () => {
  const categories = ref<Category[]>([]);
  const activeCategoryId = ref<number | null>(null);

  const activeCategory = computed(() => {
    return categories.value.find(
      (category) => category.id === activeCategoryId.value
    );
  });

  const fetchAndSaveCategories = async () => {
    await axios
      .get<Category[]>(CATEGORIES_URL)
      .then((response) => (categories.value = response.data));
  };

  const updateActiveCategory = (categoryId: number | null) => {
    activeCategoryId.value = categoryId;
  };

  return {
    categories,
    activeCategoryId,
    activeCategory,
    fetchAndSaveCategories,
    updateActiveCategory,
  };
});
