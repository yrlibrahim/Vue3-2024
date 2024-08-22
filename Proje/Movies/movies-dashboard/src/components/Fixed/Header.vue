<template>
  <header class="flex justify-around items-center my-4">
    <router-link to="/" class="nav-link text-white">
      <span>Anasayfa</span>
    </router-link>
    <router-link to="/favories" class="nav-link text-white"
      >Favoriler</router-link
    >

    <div>
      <div class="search-bar flex gap-2">
        <img src="../../assets/images/Search....png" class="rounded" />
        <input
          @input="handleSearch"
          type="search"
          placeholder="Ara.."
          class="ms-2"
        />
      </div>
    </div>
  </header>
  <hr style="border: 1px solid grey; margin-bottom: 20px" />
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["search"]);

const searchQuery = ref("");

const handleSearch = (event) => {
  searchQuery.value = event.target.value;
  emit("search", searchQuery.value);
};
</script>

<style scoped>
header {
  padding: 20px;
}

.nav-link {
  font-size: 20px;
  color: white;
  text-decoration: none;
}

.nav-link.router-link-active {
  color: #00b9ae;
  border-bottom: 4px solid #00b9ae;
}
.search-bar {
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #21242d;
  padding: 10px 15px;
  display: flex;
  align-items: center;
}

.search-bar img {
  margin-right: 8px;
}

.search-bar input {
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  color: white;
}
</style>
