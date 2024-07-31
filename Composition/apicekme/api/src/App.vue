<template>
  <div class="ms-5 mt-5">
    <button @click="activeComp = User" class="btn btn-primary me-3">
      Kullanicilar
    </button>
    <button @click="activeComp = AddUser" class="btn btn-primary">
      Kullanici Ekle
    </button>
    <component :is="activeComp" />
  </div>
</template>

<script setup>
import User from "@/components/User/User.vue";
import AddUser from "@/components/User/Add-user.vue";
import { shallowRef } from "vue";

const activeComp = shallowRef(User);
</script>

<style scoped></style>
