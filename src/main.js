import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import VueApexCharts from "vue3-apexcharts";
import { router } from "./router";

const app = createApp(App);
app
  .use(VueApexCharts)
  .use(router)
  .mount("#app");
