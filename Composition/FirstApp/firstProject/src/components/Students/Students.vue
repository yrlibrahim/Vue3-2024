<template>
  <div>
    <StudentsList :studentsList="students" />
  </div>
</template>
<script setup>
import StudentsList from "@/components/Students/StudentsList.vue";

const props = defineProps(["students"]);
</script>
