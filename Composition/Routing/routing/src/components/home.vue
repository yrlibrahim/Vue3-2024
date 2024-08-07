<template>
  <div class="container p-5 bg-light rounded-3 mb-4">
    <h1 class="mb-4 fw-bold">Angular 17</h1>
    <p class="col-md-8 fs-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptas
      iste, recusandae unde hic laudantium eaque harum id in ipsum neque, illo
      vel eius tempora dolores corrupti maxime provident repellat.
    </p>
    <button @click="router.push('/articles')" class="btn btn-primary btn-lg">
      Devamını Oku
    </button>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6 bg-dark text-light p-5 rounded-3">
        <h1>React Router</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          excepturi iste minus dignissimos deleniti magnam. Perspiciatis beatae
          mollitia, provident blanditiis labore veritatis. Amet, voluptatum
          fugit. Reprehenderit voluptatem sint assumenda repellendus.
        </p>
        <button class="btn btn-outline-light">Devamını Oku</button>
      </div>
      <div class="col-md-6 bg-light text-dark p-5 rounded-3">
        <h1>Vue Router</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          excepturi iste minus dignissimos deleniti magnam. Perspiciatis beatae
          mollitia, provident blanditiis labore veritatis. Amet, voluptatum
          fugit. Reprehenderit voluptatem sint assumenda repellendus.
        </p>
        <button class="btn btn-outline-dark">Devamını Oku</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

console.log(router);
console.log(route);
</script>
