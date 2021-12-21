import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AxiosConfig from "./core/config/AxiosConfig";
import Moment from "moment";
import VueSweetalert2 from "vue-sweetalert2";
import "./assets/style.scss";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.prototype.$axios = AxiosConfig;
Vue.prototype.$moment = Moment;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
