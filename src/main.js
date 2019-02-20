import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./filters.js";
import "./directives/NsValidateDirective";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPaperPlane,
  faUser,
  faSearch,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPaperPlane);
library.add(faUser);
library.add(faSearch);
library.add(faStar);
library.add(farStar);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
