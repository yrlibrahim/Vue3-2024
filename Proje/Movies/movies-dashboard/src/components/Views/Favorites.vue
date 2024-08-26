<template>
  <div>
    <app-header @search="handleSearch"></app-header>
    <div class="container">
      <div class="row">
        <div
          class="col-md-3 mb-4"
          v-for="movie in filteredFavorites"
          :key="movie.id"
        >
          <div class="movie-card">
            <h1 class="movie-name">{{ movie.title }}</h1>
            <img :src="getPosterUrl(movie.poster_path)" />

            <div class="movie-card-info justify-content-between">
              <span>Rate: {{ movie.vote_average }}</span>
              <span>Date: {{ movie.release_date }}</span>
            </div>
            <div class="movie-card-bottom justify-content-around">
              <button
                type="button"
                class="button-remove"
                @click="removeFromFavorites(movie)"
              >
                <font-awesome-icon
                  :icon="['fas', 'heart']"
                  style="color: #ff0000; background-color: rgba(0, 0, 0, 0)"
                />
              </button>
              <router-link
                :to="{ name: 'Info', params: { id: movie.id } }"
                class="button-info"
                ><button type="button">Detaylar</button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useFavoritesStore } from "../Stores/addFavorites.js";

const favoritesStore = useFavoritesStore();
const searchQuery = ref("");

const getPosterUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`;

const handleSearch = (query) => {
  searchQuery.value = query;
};

const filteredFavorites = computed(() => {
  return favoritesStore.favorites.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const removeFromFavorites = (movie) => {
  favoritesStore.removeFavorite(movie.id);
};
</script>

<style scoped></style>
