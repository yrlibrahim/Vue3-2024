<template>
  <div class="container">
    <header class="d-flex py-4 border-bottom mb-4">
      <router-link to="/" class="fs-4 me-auto text-decoration-none text-dark">
        <span>İbrahim Yerli</span>
      </router-link>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link" to="/"> Anasayfa </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/articles">Yazılarım</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">İletişim</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>
<script setup>
import router from "@/router";
</script>
