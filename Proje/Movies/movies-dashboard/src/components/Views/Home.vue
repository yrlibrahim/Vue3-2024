<template>
  <app-header @search="handleSearch"></app-header>
  <div class="container">
    <div class="row">
      <div
        class="col-md-3 mb-4"
        v-for="movie in filteredMovies"
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
              :class="isFavorite(movie.id) ? 'button-remove' : 'button-add'"
              @click="toggleFavorite(movie)"
            >
              <font-awesome-icon
                style="background-color: rgba(0, 0, 0, 0)"
                :icon="
                  isFavorite(movie.id) ? ['fas', 'heart'] : ['far', 'heart']
                "
                :style="{ color: isFavorite(movie.id) ? '#ff0000' : '' }"
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
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useFavoritesStore } from "../Stores/addFavorites.js";

const apiKey = "6276d5fcc2e21dd08c75a75e22e9b485";
const apiUrl = "https://api.themoviedb.org/3/movie/popular";
const imageUrl = "https://image.tmdb.org/t/p/w500";

const movies = ref([]);
const favoritesStore = useFavoritesStore();
const error = ref(null);
const searchQuery = ref("");

const getPosterUrl = (path) => `${imageUrl}${path}`;

const fetchMovies = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        api_key: apiKey,
      },
    });
    movies.value = response.data.results;
  } catch (err) {
    error.value = "Veri alınamadı: " + err.message;
  }
};

const isFavorite = (movieId) => {
  return favoritesStore.favorites.some((movie) => movie.id === movieId);
};

const toggleFavorite = (movie) => {
  if (isFavorite(movie.id)) {
    favoritesStore.removeFavorite(movie.id);
  } else {
    favoritesStore.addFavorite(movie);
  }
};

const handleSearch = (query) => {
  searchQuery.value = query;
};

const filteredMovies = computed(() => {
  return movies.value.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(fetchMovies);
</script>

<style scoped></style>
