<template>
  <app-header></app-header>
  <div class="container"><router-view></router-view></div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "@/components/home.vue";
import Articles from "./components/articles/articles.vue";
import Article from "./components/articles/article.vue";
import contact from "./components/Contact/contact.vue";
</script>
<style scoped></style>
