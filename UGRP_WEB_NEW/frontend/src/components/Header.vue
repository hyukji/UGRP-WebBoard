<template>
  <v-app-bar app color="teal" height="75px" align-center>
    <div class="wrap-appbar">
      <div class="appbar-left">
        <a href="/mycourse" class="text_logo">UGRPWEB</a>
      </div>
      <div class="appbar-right">
        <ul>
          <li>
            <a class="to-mycourse" href="/mycourse">내 강의실</a>
          </li>
          <li>
            <div class="text-center">
              <v-menu :offset-y="true" left>
                <template v-slot:activator="{ on }">
                  <v-btn icon color="white" dark v-on="on" active-class="false">
                    <v-icon size="20pt" color="white">fas fa-bell</v-icon>
                  </v-btn>
                </template>

                <v-list class="menus" width="250pt">
                  <v-list-item-content
                    two-line
                    v-for="(item, index) in bell_menus"
                    :key="index"
                    @click="menu_bell_func(item.route)"
                  >
                    <v-list-item-subtitle class="menu-bell-main">{{item.main}}</v-list-item-subtitle>
                    <v-list-item-title class="menu-bell-title">{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle class="menu-bell-date">{{item.date}}</v-list-item-subtitle>
                    <v-divider></v-divider>
                  </v-list-item-content>
                </v-list>
              </v-menu>
            </div>
          </li>
          <li>
            <div class="text-center">
              <v-menu :offset-y="true" left>
                <template v-slot:activator="{ on }">
                  <v-btn icon color="white" dark v-on="on" active-class="false">
                    <v-icon size="20pt" color="white">fas fa-user</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item-content two-line>
                    <v-list-item-title class="menu-user_name">{{ user.name }}</v-list-item-title>
                    <v-list-item-subtitle class="menu-user_mail">{{user.mail}}</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-divider></v-divider>
                  <v-list-item
                    class="menu-user-list"
                    v-for="(item, index) in user_menus"
                    :key="index"
                    v-on:click="menu_user_func(item.route)"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon" size="15pt"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </v-app-bar>
</template>
<script>
import { eventBus } from "../main.js";
export default {
  name: "header",
  data: function() {
    return {
      user: { name: "곽지혁", mail: "wlgur0416@dgist.ac.kr" },
      bell_menus: [
        {
          main: "게시판/공지사항",
          title: "새로운 공지가 올라왔습니다.",
          date: "2020.3.8",
          route: "공지사항"
        },
        {
          main: "게시판/QnA",
          title: "새로운 질문이 올라왔습니다.",
          date: "2020.3.8",
          route: "QnA"
        },
        {
          main: "게시판/자유게시판",
          title: "새로운 댓글이 달렸습니다.",
          date: "2020.3.8",
          route: "자유게시판"
        },
        {
          main: "수업목록",
          title: "과제가 새로 올라왔습니다.",
          date: "2020.3.8",
          route: "수업목록"
        }
      ],
      user_menus: [
        { title: "계정 관리", route: "/account", icon: "fas fa-user-cog" },
        { title: "로그아웃", route: "/logout", icon: "fas fa-sign-out-alt" },
        { title: "FAQ", route: "/managing/FAQ", icon: "fas fa-home" },
        { title: "QnA", route: "/managing/FAQ", icon: "fas fa-home" }
      ]
    };
  },
  methods: {
    menu_user_func: function(route) {
      this.$router.push({
        path: route,
        params: { user: "username" },
        query: { group: "member" }
      });
      // route==logout이면 백이용해서 로그아웃하고홈으로
    },
    menu_bell_func: function(route) {
      eventBus.bell_route(route);
      if (location.pathname == "/course/courseid") {
      } else {
        this.$router.push({
          path: "/course/courseid",
          query: { tab: route }
        });
      }
    }
  }
};
</script>

<style scoped>
.wrap-appbar {
  min-width: 800pt;
  max-width: 1000pt;
  width: 70%;
  margin: 0 auto;
}
.appbar-left {
  display: inline-block;
  width: 13%;
}
.appbar-right {
  display: inline-block;
  width: 87%;
  text-align: right;
}
a {
  display: inline-block;
  text-decoration: none;
}
.text_logo {
  font-size: 24pt;
  color: white;
}
.appbar-right {
  display: inline-block;
  width: 87%;
  text-align: right;
}
ul {
  padding: 0;
  margin-left: 0;
  list-style-type: none;
}
li {
  padding-left: 1%;
  display: inline-block;
}
.to-mycourse {
  font-size: 12pt;
  color: white;
}
.menu-user_name {
  text-align: center;
  font-weight: 500;
  font-size: 1.25rem;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 3%;
  padding-bottom: 1%;
}
.menu-user_mail {
  text-align: center;

  font-size: 0.9rem;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 1.5%;
  padding-bottom: 5%;
}
.menu-user-list {
  padding-left: 7%;
  padding-top: 1.5%;
}
.menu-bell-main {
  padding-bottom: 1.5%;
  padding-left: 7%;
}
.menu-bell-title {
  font-weight: 500;
  font-size: 1.1rem;
  padding-left: 7%;
  padding-bottom: 3.5%;
}
.menu-bell-date {
  float: right;
  padding-left: 7%;
  padding-bottom: 4%;
}
</style>
