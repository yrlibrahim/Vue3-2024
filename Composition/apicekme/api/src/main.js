import { createApp } from "vue";
import App from "./App.vue";
import Loading from "@/components/Utility/Loading.vue";

App.component("app-loading", Loading);

createApp(App).mount("#app");
