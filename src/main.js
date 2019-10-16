import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import VueRouter from "vue-router";

import home from "./views/home";
import pets from "./views/pets";
import favorites from "./views/favorites";
import form from "./views/form";
import store from "./store/store";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: home
  },
  {
    path: "/pets",
    component: pets
  },
  {
    path: "/favorites",
    component: favorites
  },
  {
    path: "/form",
    component: form
  }
];
const router = new VueRouter({ routes });
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
