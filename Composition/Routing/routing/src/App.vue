<template>
  <app-header></app-header>
  <home />
  <Articles />
  <div class="container"></div>
</template>
<script setup>
import Home from "@/components/home.vue";
import Articles from "./components/articles/articles.vue";
// import { RouterLink, RouterView } from "vue-router";
</script>
<style scoped></style>
