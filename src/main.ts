import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faPlus,
  faMinus,
  faCartShopping,
  faTrashCan,
  faXmark,
  faChevronLeft,
  faChevronRight,
  faBars,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faPlus,
  faMinus,
  faCartShopping,
  faTrashCan,
  faXmark,
  faChevronLeft,
  faChevronRight,
  faBars,
  faPenToSquare
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.mount("#app");
