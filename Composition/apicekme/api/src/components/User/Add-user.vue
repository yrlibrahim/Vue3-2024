<template>
  <form class="mt-5" @submit.prevent="submitForm">
    <div class="mb-3">
      <label class="form-label">Adiniz: </label>
      <input type="text" class="form-control" v-model="user.name" />
    </div>
    <div class="mb-3">
      <label class="form-label">Soyadiniz</label>
      <input type="text" class="form-control" v-model="user.lastname" />
    </div>
    <button type="submit" class="btn btn-primary">Kaydet</button>
  </form>
</template>

<script setup>
import postUsers from "@/composables/postUsers";

const { user, submitForm } = postUsers();
</script>

<style></style>
