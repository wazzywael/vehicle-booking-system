import "@babel/polyfill";
import "mutationobserver-shim";
import Vue, { createApp } from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.configureCompat({ WATCH_ARRAY: false });

/* const app = Vue.createApp({});
app.use(router);
app.render((h) => h(App));
app.mount("#app"); */

createApp(App).mount("#app");
