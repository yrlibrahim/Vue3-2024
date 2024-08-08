import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/home.vue";
import SignIn from "@/components/User/SignIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignIn,
    },
  ],
});

export default router;
