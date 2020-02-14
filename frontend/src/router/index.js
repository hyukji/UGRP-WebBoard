import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";

import Posting from "@/components/board/Posting";
import Postings from "@/components/board/Postings";
import PosingEdit from "@/components/board/PostingEdit";
import PosingNew from "@/components/board/PostingNew";

import SignUp from "@/components/user/SignUp";
import SignIn from "@/components/user/SignIn";
import User from "@/components/user/User";

import Comment from "@/components/comment/Comment";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    //path를 "*"로 하면 정해지지 않은 사이트 나중에 NotFound 추가하기.
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
      path: "/board/posting_edit/:id",
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
      components: {
        default: Posting,
        complement: Comment
      }
    },
    {
      path: "/user",
      name: "user",
      component: User
    }
  ]
});

//서버 이용하지 않고 이동할때 데이터 넘기는 법
//router.push({name:"home", params: {"id": id값을 넣어줌}})
//this.$route.params.id
