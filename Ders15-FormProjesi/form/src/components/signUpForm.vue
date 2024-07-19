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
      <label>Bildiğiniz Diller: </label>
      <input
        type="text"
        placeholder="Beceri eklemek için Enter'a basın."
        v-model="skill"
        @keyup.enter="addSkill"
      />
      <div class="skillList" v-for="skillItem in skills" :key="skillItem">
        <span
          >{{ skillItem }}
          <i @click="deleteSkill(skillItem)" class="fa-solid fa-xmark"></i>
        </span>
      </div>
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
      <button type="button">Kayıt Ol</button>
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
      skill: "",
      skills: [],
    };
  },
  methods: {
    termAccept() {
      this.showterms = !this.showterms;
    },
    addSkill() {
      if (this.skill) {
        if (!this.skills.includes(this.skill)) {
          this.skills.push(this.skill);
        }
        this.skill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill != item;
      });
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
  margin: 10px 0;
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
  background-color: #05ce26;
}
#terms {
  margin-top: 15px;
}
.termAccept {
  cursor: pointer;
  color: blue;
}
.skillList {
  display: inline-block;
  width: auto;
  height: 20px;
  border: 1px solid;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 20px;
  background-color: white;
}
.skillList span {
  text-align: center;
  cursor: pointer;
}
.skillList span i {
  color: red;
}
.skillList span i:hover {
  padding: 3px 4px;
  border: none;
  border-radius: 50px;
  background-color: red;
  color: white;
}
</style>
