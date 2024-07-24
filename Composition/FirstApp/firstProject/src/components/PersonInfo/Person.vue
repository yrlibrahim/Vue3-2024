<template>
  <div class="personContainer">
    <h2>Kullanıcılar</h2>
    <ul>
      <li><span>Adınız: </span>{{ name }}</li>

      <li><span>Yaşınız: </span>{{ age }}</li>
    </ul>
    <button @click="reAge">Yaşı Güncelle</button>
  </div>
</template>
<script setup>
const emmit = defineEmits(["re-age"]);
const props = defineProps({
  name: String,
  age: {
    type: Number,
    default: 0,
    required: true,
  },
});

const rename = () => {
  props.name = "Mehmet";
};
const reAge = () => {
  // props.age = 25;
  emmit("re-age", 25);
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
ul li {
  padding: 10px 0;
}
ul li span {
  font-weight: bold;
}
.personContainer {
  border: 1px solid grey;
  padding: 15px;
  border-radius: 25px;
}
</style>
