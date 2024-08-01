<template>
  <div class="row">
    <div class="col-md-3" v-for="user in data.users" :key="user.id">
      <div class="card mt-3 me-3">
        <img
          :src="'https://placebeard.it/300/300?' + user.id"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">{{ user.name }} {{ user.lastname }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import getUsers from "@/composables/getUsers";

const { data, loadUser } = getUsers();

loadUser();
</script>
<style></style>
