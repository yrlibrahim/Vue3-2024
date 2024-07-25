<template>
  <appHeader />
  <div class="container">
    <!-- <appPerson :name="data.name" :age="data.age" @re-age="reAge" />
    <button @click="rename">Güncelle</button> -->
    <appStudent />
  </div>
  <appFooter />
</template>
<script setup>
import { ref, reactive, provide } from "vue";
import appFooter from "@/components/Fixed/Footer.vue";
// import appPerson from "@/components/PersonInfo/Person.vue";
import appStudent from "@/components/Students/Students.vue";

const students = reactive([
  {
    id: 1,
    name: "Ibrahim",
    score: 80,
  },
  {
    id: 2,
    name: "Ahmet",
    score: 70,
  },
  {
    id: 3,
    name: "Mehmet",
    score: 75,
  },
]);
const updateStudent = () => {
  students[0].score = 70;
};

provide("students", { students, updateStudent });

/*  const reAge = (reAge) => {
   data.age = 25;
 }; */
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  height: 100vh;
  text-align: center;
  padding: 20px;
  margin-top: 15px;
}
button {
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  background-color: lightgreen;
}
button:hover {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.4s ease;
}
</style>
