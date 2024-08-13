<template>
  <div class="sign-in-container">
    <div v-if="userStore.loading">
      <v-progress-circular
        color="primary"
        indeterminate
        :size="62"
      ></v-progress-circular>
    </div>
    <Form
      v-if="!userStore.loading"
      class="sign-in-form row gy-4"
      :validation-schema="formSchema"
      @submit="onSubmit"
    >
      <h2>{{ isLoggedActive ? "Giriş Yap" : "Kaydol" }}</h2>

      <div class="form-group">
        <Field name="email" v-slot="{ field, errors, errorMessage }">
          <input
            v-bind="field"
            type="email"
            class="form-control"
            placeholder="example@gmail.com"
            :class="{ 'is-invalid': errors.length !== 0 }"
          />
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>

      <div class="form-group">
        <Field name="password" v-slot="{ field, errors, errorMessage }">
          <input
            v-bind="field"
            type="password"
            class="form-control"
            placeholder="Şifrenizi giriniz"
            :class="{ 'is-invalid': errors.length !== 0 }"
          />
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>

      <button type="submit" class="btn btn-outline-primary">
        {{ isLoggedActive ? "Giriş Yap" : "Kaydol" }}
      </button>

      <div @click="isLoggedActive = !isLoggedActive" class="log-switch">
        <span v-if="isLoggedActive">Kaydol</span>
        <span v-else>Giriş Yap</span>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const formSchema = yup.object({
  email: yup
    .string()
    .required("Zorunlu alan!")
    .email("Lütfen istenilen formatta giriniz"),
  password: yup.string().required("Zorunlu alan!"),
});

const isLoggedActive = ref(true);

function onSubmit(values, { resetForm }) {
  if (isLoggedActive.value) {
    userStore.signIn(values);
  } else {
    userStore.register(values);
  }
}
</script>
