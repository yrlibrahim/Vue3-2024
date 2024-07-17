<template>
  <signUpForm />
</template>

<script>
import signUpForm from "./components/signUpForm.vue";

export default {
  name: "App",
  components: { signUpForm },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: medium;
  margin-top: 60px;
}
</style>
