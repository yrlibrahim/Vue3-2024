<template>
  <div>
    <h2>Form Projesi</h2>
    <form>
      <label>E-mail: </label>
      <input type="email" placeholder="example@gmail" v-model="email" />
      <label>Şifre: </label>
      <input type="password" v-model="password" />
      <label>Cinsiyet: </label>
      <select v-model="gender">
        <option value="male">Erkek</option>
        <option value="female">Kadın</option>
      </select>
      <div id="terms">
        <input class="checkbox" type="checkbox" v-model="term" />
        <label @click="termAccept" class="termAccept">
          Kullanım Koşulları
        </label>
      </div>
      <div v-if="showterms">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quisquam
          omnis eius deserunt, odit voluptate veritatis inventore laboriosam
          voluptates odio! Nemo aspernatur minima soluta sit quae tenetur
          placeat veniam harum.
        </p>
      </div>
      <button>Kayıt Ol</button>
    </form>
    <p>{{ email }}</p>
    <p>{{ password }}</p>
    <p>{{ gender }}</p>
    <p>{{ term }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showterms: false,
      email: "",
      password: "",
      gender: "",
      term: false,
    };
  },
  methods: {
    termAccept() {
      this.showterms = !this.showterms;
    },
  },
};
</script>

<style>
form {
  max-width: 400px;
  width: 100%;
  margin: 30px auto;
  background-color: cadetblue;
  padding: 30px;
  border-radius: 20px;
  text-align: left;
}
input {
  display: block;
  margin: 10px 0;
  border: none;
  border-radius: 20px;
  padding: 8px 5px;
  width: 100%;
}
select {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  border-radius: 10px;
}
.checkbox {
  display: inline-block;
  width: 30px;
  margin-top: 10px;
}
button {
  margin-top: 20px;
  padding: 8px 13px;
  border-radius: 15px;
  border: none;
  color: black;
  font-size: 15px;
  transition: all 0.2s ease;
  font-weight: 700;
}
button:hover {
  background-color: greenyellow;
}
#terms {
  margin-top: 15px;
}
.termAccept {
  cursor: pointer;
  color: blue;
}
</style>
