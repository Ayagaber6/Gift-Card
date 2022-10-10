import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VeeValidate from "vee-validate";
import AOS from "aos";
import "aos/dist/aos.css";
Vue.use(VeeValidate);
Vue.config.productionTip = false;

import "./assets/main.css";

new Vue({
  router,
  mounted() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");
