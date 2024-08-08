<template>
  <header>
    <div class="container headerContainer">
      <div class="pageLogo">
        <router-link to="/"
          ><img src="../Images/logo.png" class="me-3" />EduPortal</router-link
        >
      </div>
      <div class="userActionDiv">
        <ul class="userAction">
          <li><router-link to="/sign-in">Giriş Yap</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup></script>
<style scoped></style>
