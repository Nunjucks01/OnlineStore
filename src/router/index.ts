import { createRouter, createWebHistory } from "vue-router";
import ProductView from "../views/ProductView.vue";
import HomeView from "../views/HomeView.vue";
import CreateView from "../views/CreateView.vue";
import CartView from "../views/CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products/:id",
      name: "product",
      component: ProductView,
    },
    {
      path: "/create",
      name: "create",
      component: CreateView,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: CreateView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
  ],
});

export default router;
