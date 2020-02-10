import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";

import Posting from "@/components/board/Posting";
import Postings from "@/components/board/Postings";
import PosingEdit from "@/components/board/PostingEdit";
import PosingNew from "@/components/board/PostingNew";

import SignUp from "@/components/user/SignUp";
import SignIn from "@/components/user/SignIn";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home //전 router-view의 namaing을 body,header,footer로 나누었습니다
    },
    {
      path: "/signUp",
      name: "SignUp",
      component: SignUp //전 router-view의 namaing을 body,header,footer로 나누었습니다
    },
    {
      path: "/signIn",
      name: "SignIn",
      component: SignIn //전 router-view의 namaing을 body,header,footer로 나누었습니다
    },
    {
      path: "/board/posting_new",
      name: "Posting_new",
      component: PosingNew //전 router-view의 namaing을 body,header,footer로 나누었습니다
    },
    {
      path: "/board/posting_edit",
      name: "Posting_edit",
      component: PosingEdit //전 router-view의 namaing을 body,header,footer로 나누었습니다
    },
    {
      path: "/board",
      name: "Postings",
      component: Postings //전 router-view의 namaing을 body,header,footer로 나누었습니다
    },
    {
      path: "/board/posting/:id",
      name: "posting",
      component: Posting //전 router-view의 namaing을 body,header,footer로 나누었습니다
    }
  ]
});
