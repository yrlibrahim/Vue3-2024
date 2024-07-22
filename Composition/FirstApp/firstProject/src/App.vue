<template>
  <appHeader />
  <div>Main</div>
  <appFooter />
</template>
<script setup>
import { ref } from "vue";
import appFooter from "@/components/Fixed/Footer.vue";

const name = ref("Ibrahim");
</script>

<style scoped>
div {
  margin: 0 auto;
  color: red;
}
</style>
