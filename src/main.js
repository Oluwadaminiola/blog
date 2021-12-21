import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AxiosConfig from "./core/config/AxiosConfig";
import Moment from "moment";
import "./assets/style.scss";

Vue.config.productionTip = false;

Vue.prototype.$axios = AxiosConfig;
Vue.prototype.$moment = Moment;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
