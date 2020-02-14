// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";

//icon font (fontawesome)
//좀더 깔끔하게 가져오는 방법을 찾기
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faHome);
library.add(faUser);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.config.errorHandler = (err, vm, info) => {
  console.log('[Global Error Handler]'+
              '\nerror: '+ err +
              '\nvm: '+ vm +
              '\ninfo: '+ info);
} //cannot handle the error inside the methods

axios.interceptors.response.use(
function(res) {
  console.log('res:', res);
  return res;},
function(err) {
    // handle error
    if (err) {
        console.log('interceptor:', err.response);
        alert(err.response.data.msg);
    // if (err.response) {
    //     alert(error.response.data.message);
    }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
