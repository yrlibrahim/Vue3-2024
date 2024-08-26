<template>
  <div v-if="movie">
    <div class="back-button">
      <router-link to="/" style="color: #00b9ae"
        >Geri
        <font-awesome-icon
          :icon="['fas', 'arrow-left-long']"
          style="color: #00b9ae"
      /></router-link>
    </div>
    <div class="info-box-img">
      <img :src="getBackdropUrl(movie.backdrop_path)" />
    </div>
    <div class="info-box-text container">
      <h1>{{ movie.title }}</h1>
      <div class="details-rate-date">
        <p>Rate: {{ movie.vote_average }}</p>
        <p>Date: {{ movie.release_date }}</p>
      </div>
      <h2>{{ movie.overview }}</h2>
    </div>
  </div>
  <p v-else>Loading...</p>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const apiKey = "6276d5fcc2e21dd08c75a75e22e9b485";
const imageUrl = "https://image.tmdb.org/t/p/w500";

const route = useRoute();
const movie = ref(null);

const getBackdropUrl = (path) => `${imageUrl}${path}`;

const fetchMovieDetails = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${route.params.id}`,
      {
        params: {
          api_key: apiKey,
        },
      }
    );
    movie.value = response.data;
  } catch (err) {
    console.error("Detaylar alınamadı: " + err.message);
  }
};

onMounted(fetchMovieDetails);
</script>
<style scoped>
* {
  color: white;
}
.info-box-img {
  width: 100%;
  height: 100vh;
  position: relative;
}
.info-box-img img {
  width: 100%;
  height: auto;
  opacity: 0.4;
}
.info-box-text {
  position: absolute;
  top: 50%;
  background-color: rgba(255, 255, 255, 0);
  align-items: center;
}
h1 {
  text-align: center;
  font-size: 40px;
  color: #00b9ae;
  background-color: rgba(255, 255, 255, 0);
}
.details-rate-date {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0);
}
.details-rate-date p {
  background-color: rgba(255, 255, 255, 0);
}
h2 {
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0);
}
.back-button {
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;
  padding: 10px;
  border-radius: 10px;
}
.back-button:hover {
  transform: scale(1.1);
  transition: all ease 0.4s;
}
</style>
