// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.config.errorHandler = (err, vm, info) => {
  console.log('[Global Error Handler]'+
              '\nerror: '+ err +
              '\nvm: '+ vm +
              '\ninfo: '+ info);
} //cannot handle the error inside the methods

axios.interceptors.response.use(
function(res) { console.log(res); return res;},
function(err) {
    // handle error
    console.log('interceptor error');
    if (err) {
        console.log('int interceptor');
        alert(err.response.data.error);
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
