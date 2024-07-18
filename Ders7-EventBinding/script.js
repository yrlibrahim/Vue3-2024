const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    reset() {
      this.counter = 0;
    },
  },
});

app.mount("#frontend");
