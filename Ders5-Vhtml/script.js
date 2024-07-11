const app = Vue.createApp({
  data() {
    return {
      firstGoal: "<h3>HTML</h3>",
      secondGoal: "CSS",
    };
  },
  methods: {
    addGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.firstGoal;
      } else {
        return this.secondGoal;
        // this ile data da tanımlanan property lere erişim sağlarız
      }
    },
  },
});

app.mount("#frontend");
