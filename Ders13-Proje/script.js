function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      winner: null,
      compHp: 100,
      userHp: 100,
      roundCount: 0,
    };
  },
  watch: {
    userHp(value) {
      if (value <= 0 && this.compHp <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "computer";
      }
    },
    compHp(value) {
      if (value <= 0 && this.userHp <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "user";
      }
    },
  },
  computed: {
    compBarStyle() {
      if (this.compHp < 0) {
        return { width: "0%" };
      } else {
        return { width: this.compHp + "%" };
      }
    },
    compBarColor() {
      if (this.compHp < 35) {
        return { backgroundColor: "red" };
      } else if (this.compHp < 70) {
        return { backgroundColor: "orange" };
      } else {
        return { backgroundColor: "green" };
      }
    },
    userBarStyle() {
      if (this.userHp < 0) {
        return { width: "0%" };
      } else {
        return { width: this.userHp + "%" };
      }
    },
    userBarColor() {
      if (this.userHp < 35) {
        return { backgroundColor: "red" };
      } else if (this.userHp < 70) {
        return { backgroundColor: "orange" };
      } else {
        return { backgroundColor: "green" };
      }
    },
    specialAttack() {
      return this.roundCount % 4 !== 0;
    },
  },
  methods: {
    attackToComp() {
      this.roundCount++;
      const attackValue = getRandomValue(7, 15);
      this.compHp -= attackValue;
      this.attackToUser();
    },
    attackToUser() {
      const attackValue = getRandomValue(10, 20);
      this.userHp -= attackValue;
    },
    superAttack() {
      this.roundCount++;
      const attackValue = getRandomValue(15, 30);
      this.compHp -= attackValue;
      this.attackToUser();
    },
    healUser() {
      this.roundCount++;
      const healValue = getRandomValue(12, 20);
      if (this.userHp + healValue > 100) {
        this.userHp = 100;
      } else {
        this.userHp += healValue;
      }
      this.attackToUser();
    },
    newGame() {
      this.roundCount = 0;
      this.userHp = 100;
      this.compHp = 100;
      this.winner = null;
    },
  },
});
app.mount("#app");
