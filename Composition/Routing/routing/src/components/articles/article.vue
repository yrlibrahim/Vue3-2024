<template>
  <div class="container">
    <div class="row bg-dark text-light rounded-3 p-4 my-4">
      <div class="col-md-6">
        <h1>{{ article.title }}</h1>
        <p>
          {{ article.summary }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <h5>Lorem</h5>
        <hr />
        <p>
          {{ article.date }} <strong>{{ article.author }}</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit sequi magnam minima a nam? Sunt porro perspiciatis sit
          voluptates distinctio.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          illo laborum nam at, officiis perferendis!
        </p>
      </div>
      <div class="col-md-4 bg-light rounded-3 p-4">
        <h5>Lorem</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vero
          vitae inventore, quasi quas amet illo eligendi nobis neque unde magni
          consequuntur quis quae ullam veniam ducimus fugit porro sed? Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { onMounted, ref } from "vue";

const route = useRoute();

const article = ref({});

const loadArticle = (articleId) => {
  axios.get(`http://localhost:3000/articles/${articleId}`).then((response) => {
    article.value = response.data;
  });
};

onMounted(() => {
  loadArticle(route.params.articleId);
});
</script>
