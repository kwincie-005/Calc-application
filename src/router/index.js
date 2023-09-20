import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ButtonView from "../views/ButtonView.vue";

/**Define routes here */
const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/button", name: "button", component: ButtonView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
