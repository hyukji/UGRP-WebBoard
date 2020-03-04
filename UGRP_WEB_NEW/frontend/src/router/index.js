import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/Home.vue"
import Signin from "../views/SignIn.vue"
import SignUp from "../views/SignUp.vue"
import MyCourse from "../views/MyCourse.vue"
import AboutCourse from "../views/AboutCourse.vue"

import Header from "../components/Header.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    components: { header: Header, body: Home }
  },
  {
    path: "/signin",
    name: "Signin",
    components: {
      body: Signin
    }
  },
  {
    path: "/signup",
    name: "SignUp",
    components: {
      body: SignUp
    }
  },
  {
    path: "/mycourse",
    name: "MyCourse",
    components: {
      header: Header,
      body: MyCourse
    }
  },
  {
    path: "/course/courseid",
    name: "AboutCourse",
    components: {
      header: Header,
      body: AboutCourse
    }
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
