import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";

// Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.use(BootstrapVue);

// Vue-Visual
import VueVisual from "vue-visual";
Vue.component("visual", VueVisual);
require("vue-visual/index.css");

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
