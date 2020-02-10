import Vue from "vue";
import Router from "vue-router";

import Posting from "@/components/Posting";
import Home from "@/components/Home";
import SignUp from "@/components/login/SignUp";
import SignIn from "@/components/login/SignIn";
import Newposting from "@/components/Newposting";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login/signUp",
      name: "SignUp",
      component: SignUp //전 router-view의 namaing을 body,header,footer로 나누었습니다
    },
    {
      path: "/login/signIn",
      name: "SignIn",
      component: SignIn //전 router-view의 namaing을 body,header,footer로 나누었습니다
    },
    {
      path: "/newposting",
      name: "newposting",
      component: Newposting //전 router-view의 namaing을 body,header,footer로 나누었습니다
    },
    {
      path: "/home",
      name: "home",
      component: Home //전 router-view의 namaing을 body,header,footer로 나누었습니다
    },
    {
      path: "/posting/:id",
      name: "posting",
      component: Posting //전 router-view의 namaing을 body,header,footer로 나누었습니다
    }
  ]
});
