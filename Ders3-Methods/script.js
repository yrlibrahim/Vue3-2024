const app = Vue.createApp({
  data() {
    return {
      firstGoal: "HTML",
    };
  },
  methods: {
    addGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Html";
      } else {
        return "CSS";
      }
    },
  },
});

app.mount("#frontend");
