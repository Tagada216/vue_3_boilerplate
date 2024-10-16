import "./style.css";
import "./assets/css/fonts.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueReCaptcha } from "vue-recaptcha-v3";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueReCaptcha, {
  siteKey: import.meta.env.VUE_APP_RECAPTCHA_SITE_KEY,
  loaderOptions: {
    useRecaptchaNet: true,
  },
});

app.mount("#app");
