import {createApp} from "vue";
import {createPinia} from "pinia";
import {i18n} from "@/config/i18n.js";
import App from "./App.vue";
import router from "./router";
import {LocalStorage} from "./services/localStorage";

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);
app.provide("localStorage", new LocalStorage());
app.mount("#app");
