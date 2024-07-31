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
import { reactive } from "vue";
import axios from "axios";

const user = reactive({
  name: "",
  lastname: "",
});

const submitForm = () => {
  axios({
    method: "POST",
    url: "http://localhost:3000/users",
    data: user,
  })
    .then(() => {})
    .catch(() => {})
    .finally(() => {});
};
</script>

<style></style>
