import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

/**styling */
import "./style.css";
import "./assets/tailwind.css"; //tailwind

const app = createApp(App);
app.use(router);
app.mount("#app");
