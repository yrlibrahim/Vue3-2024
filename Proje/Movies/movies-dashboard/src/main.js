import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import Header from "./components/Fixed/Header.vue";

// FontAwesome için gerekli importlar
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

const app = createApp(App); // Create the app instance
app.use(router); // Use the router

const pinia = createPinia();

app.component("app-header", Header);
app.use(pinia);

library.add(fas);
library.add(fasHeart, farHeart);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app"); // Mount the app
