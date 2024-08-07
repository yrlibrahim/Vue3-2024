import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import header from "./components/Header/header.vue";

const app = createApp(App);

app.use(router);
app.component("app-header", header);
app.mount("#app");
