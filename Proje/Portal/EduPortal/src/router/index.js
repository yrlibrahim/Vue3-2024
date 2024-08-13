import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/home.vue";
import SignIn from "@/components/User/SignIn.vue";
import MainPage from "@/components/User/dashboard/MainPage.vue";

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
    {
      path: "/user/dashboard",
      name: "main-page",
      component: MainPage,
    },
  ],
});

export default router;
