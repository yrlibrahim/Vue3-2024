import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Views/Home.vue";
import Favorites from "../components/Views/Favorites.vue";
import Info from "../components/Details/Info.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favories",
    name: "Favories",
    component: Favorites,
  },
  {
    path: "/:id",
    name: "Info",
    component: Info,
    props: true, // URL parametrelerini props olarak geç
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
