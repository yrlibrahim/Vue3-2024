<template>
  <div class="sign-in-container">
    <Form class="sign-in-form row gy-4">
      <h2>Giriş Yap</h2>
      <div class="form-group">
        <Field name="email" v-slot="{ field, errors, errorMessage }">
          <input
            type="email"
            class="form-control"
            placeholder="örneğin@gmail.com"
          />
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <div class="form-group">
        <Field name="password" v-slot="{ field, errors, errorMessage }">
          <input
            type="password"
            class="form-control"
            placeholder="Şifrenizi giriniz"
          />
          <div class="input-alert" v-if="errors.length !== 0">
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <button class="btn btn-outline-primary">Giriş Yap</button>
    </Form>
  </div>
</template>
<script setup>
import { Field, Form } from "vee-validate";
import * as yup from "yup";
</script>
