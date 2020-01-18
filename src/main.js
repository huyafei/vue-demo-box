import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import axios from "./utils/request.js";
Vue.prototype.$ajax = axios;

import "normalize.css/normalize.css";
import "./assets/css/reset.css";

import "./assets/scss/element-variables.scss";
import "./assets/scss/index.scss";

Vue.use(ElementUI);

import VueSocketIO from "vue-socket.io";
Vue.use(
  new VueSocketIO({
    debug: true,
    // 服务器端地址
    connection: "http://wallizard.com:7001",
    vuex: {}
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
