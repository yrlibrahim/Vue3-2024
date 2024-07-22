<template>
  <div>
    <ul>
      <li>{{ name }}</li>
      <li ref="myRef">{{ age }}</li>
    </ul>
    <button @click="handleClick">Tıkla</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let name = "Ibrahim";
    let age = 24;
    const myRef = ref(null); // refi tanımladıktan sonra template içerisini manipüle etmek için kullanırız.
    const handleClick = () => {
      myRef.value.classList.add("age"); // myref ile seçilen html tagına etkileşim yaparız. classList ile yeni class atandı
      myRef.value.textContent = "Değişti"; // textContent ile Html tagının içine erişildi
    };
    return { name, age, handleClick, myRef };
  },
};
</script>

<style>
.age {
  color: red;
}
</style>
