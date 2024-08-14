<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Fixed/Header.vue";
</script>

<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
