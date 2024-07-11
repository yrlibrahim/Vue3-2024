const app = Vue.createApp({
  data() {
    return {
      name: " ",
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    login() {
      alert("Login Successful");
    },
  },
});

app.mount("#frontend");
