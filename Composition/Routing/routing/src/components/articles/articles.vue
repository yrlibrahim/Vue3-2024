<template>
  <div class="container">
    <div class="row gy-4 mt-3">
      <div
        class="col-lg-3 col-md-6 col-sm-12"
        v-for="article in data.articles"
        :key="id"
      >
        <div class="card">
          <img :src="article.img + '?' + article.id" class="card-img-top" />
          <div class="card-body">
            <p class="card-text summary">
              {{ article.summary }}
            </p>
            <router-link :to="`/articles/${article.id}`"
              >View Article</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";

const data = reactive({
  articles: [],
});

console.log("btu", data.articles);

onMounted(() => {
  axios.get("http://localhost:3000/articles").then((response) => {
    data.articles = response.data;
  });
});
</script>
<style scoped>
.summary {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
