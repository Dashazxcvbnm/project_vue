import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import AboutPage from "../views/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "/",
      name: "about",
      component: AboutPage,
    },
  ],
});

export default router;
