import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify"
import axios from "axios"

Vue.prototype.$http = axios

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    bell_route(route) {
      this.$emit("bell_route", route)
    }
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app")
