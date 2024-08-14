import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Main/home.vue";
import Movies from "@/components/Movie/Movies.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movies",
      name: "movies",
      component: Movies,
    },
  ],
});

export default router;
