<template>
  <div>
    <ul>
      <li v-for="student in students" :key="student.id">
        <span>{{ student.name }} : </span><span>{{ student.score }}</span>
      </li>
    </ul>
    <button @click="updateStudent">İlk öğrenciyi güncelle</button>
  </div>
</template>
<script setup>
import { inject } from "vue";

const { students, updateStudent } = inject("students");
</script>
