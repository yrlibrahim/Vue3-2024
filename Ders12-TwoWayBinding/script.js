const app = Vue.createApp({
  data() {
    return {
      name: " ",
    };
  },
  methods: {
    reset() {
      this.name = " ";
    },
    setName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#frontend");
