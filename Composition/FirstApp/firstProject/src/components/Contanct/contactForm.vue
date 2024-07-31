<template>
  <div>
    <form @submit="formSubmit">
      <div class="row mb-4 mt-4">
        <h1>İletişim</h1>
        <hr />
        <div class="mb-3">
          <label>Ad</label>
          <input type="text" class="form-control" v-model="formData.name" />
        </div>
        <div class="mb-3">
          <label>Soyad</label>
          <input type="text" class="form-control" v-model="formData.surname" />
        </div>
        <div class="mb-3">
          <h4>Cinsiyet</h4>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              v-model="formData.gender"
              value="man"
            />
            <label>Erkek</label>
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              v-model="formData.gender"
              value="women"
            />
            <label>Kadın</label>
          </div>
        </div>
        <div class="mb-3">
          <label>E-mail</label>
          <input
            type="email"
            class="form-control"
            placeholder="example@gmail.com"
            v-model="formData.email"
          />
        </div>
        <div class="mb-3">
          <label>Konu</label>
          <input type="text" class="form-control" v-model="formData.subject" />
        </div>
        <div class="mb-3">
          <h4>Hangi Amaçla Yazıyorsun?</h4>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="formData.goals"
              value="educaiton"
            />
            <label class="form-check-label">Eğitim</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="formData.goals"
              value="job"
            />
            <label class="form-check-label">İş</label>
          </div>
        </div>
        <div class="mb-3">
          <label> Mesajınız: </label>
          <textarea
            class="form-control"
            rows="4"
            v-model="formData.message"
          ></textarea>
        </div>
        <div class="mb-3">
          <button class="btn btn-success">Gönder</button>
        </div>
      </div>
    </form>
    <h3>Hataları Düzeltiniz!</h3>
    <p>
        <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
    </p>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const formData = reactive({
  name: "",
  surname: "",
  gender: "man",
  email: "",
  subject: "",
  goals: [],
  message: "",
});

const errors = reactive([]);

const formSubmit = (e) => {
  e.preventDefault();
};

if (!formData.name) {
  errors.push("Lütfen adınızı giriniz!");
}
if (!formData.surname) {
  errors.push("Lütfen soyadınızı giriniz!");
}
if (!formData.email) {
  errors.push("Lütfen email giriniz!");
}
if (!errors.length) {
  console.log(formData);
}
</script>
