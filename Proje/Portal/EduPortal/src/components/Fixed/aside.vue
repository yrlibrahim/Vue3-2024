<template>
  <div class="container aside">
    <router-link to="/" class="logo">
      <img src="../Images/logo.png" alt="" />
      <span class="fs-2 ml-3">EduPortal</span>
    </router-link>
  </div>
</template>
<script setup></script>
<style>
.aside {
  width: 20%;
  max-width: 345px;
  height: 100vh;
  margin-left: 0;
  padding: 20px 15px;
  background-color: #4d44b5;
}
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.aside span {
  font-weight: 700;
  color: white;
}
</style>
