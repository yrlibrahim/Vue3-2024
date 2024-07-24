<template>
  <div>
    <ul>
      <li v-for="student in students" :key="student.id">
        <span> {{ student.name }} </span> <span>{{ student.score }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps(["students"]);
</script>
