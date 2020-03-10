<template>
  <div class="wrap-body">
    <div class="wrap-brief">
      <v-card class="mx-auto" outlined>
        <v-container width="100%" height="150pt">
          <v-row>
            <div class="brief-img">
              <v-img src="../assets/python.png"></v-img>
            </div>
            <div class="brief-text">
              <div>
                <div class="brief-text-left">
                  <v-card-title class="brief-title">프로그래밍(실습)</v-card-title>
                  <v-card-subtitle class="brief-subtitle">prof. 신동훈</v-card-subtitle>
                </div>

                <div class="brief-text-right">
                  <v-btn class="teal white--text btn-learn" outlined width="90%" height="50">바로학습</v-btn>
                </div>
              </div>

              <v-card-subtitle class="brief-process-line-title">진행률 70%</v-card-subtitle>
              <div class="process-line">
                <v-progress-linear v-model="progess_data" color="teal" height="10" :rounded="true"></v-progress-linear>
              </div>
            </div>
          </v-row>
        </v-container>
      </v-card>
    </div>

    <div class="wrap-app-menu">
      <div class="app-menu">
        <v-btn class="menu-title" text v-on:click="change_middle_title('대시보드')">대시보드</v-btn>
        <v-btn class="menu-title" text v-on:click="change_middle_title('강의소개')" depressed>강의소개</v-btn>
        <v-btn class="menu-title" text v-on:click="change_middle_title('수업목록')" depressed>수업목록</v-btn>

        <v-btn class="menu-title" text v-on:click="change_middle_title('공지사항')" depressed>게시판</v-btn>
        <v-btn class="menu-title" text v-on:click="change_middle_title('학습현황')" depressed>학습현황</v-btn>
      </div>
    </div>

    <p class="body-title">{{ middle_title }}</p>

    <dashboard v-if="middle_title == '대시보드'"></dashboard>
    <grade v-else-if="middle_title == '학습현황'"></grade>
    <introduction v-else-if="middle_title == '강의소개'"></introduction>
    <lectures v-else-if="middle_title == '수업목록'"></lectures>

    <div v-else class="wrap-board">
      <sidebar_board :sidebar_title="middle_title" @ChangeComponent="change_middle_title"></sidebar_board>
      <notice v-if="middle_title == '공지사항'"></notice>
      <freeboard v-if="middle_title == '자유게시판'"></freeboard>
      <qnaboard v-if="middle_title == 'QnA'"></qnaboard>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

// @ is an alias to /src
import notice from "@/components/AboutCourses/board/notice.vue";
import freeboard from "@/components/AboutCourses/board/freeboard.vue";
import qnaboard from "@/components/AboutCourses/board/qnaboard.vue";

import sidebar_board from "@/components/AboutCourses//board/sidebar_board.vue";

import dashboard from "@/components/AboutCourses/dashboard.vue";
import grade from "@/components/AboutCourses/grade.vue";
import introduction from "@/components/AboutCourses/introduction.vue";
import lectures from "@/components/AboutCourses/lectures.vue";

export default {
  name: "Mycourse",
  components: {
    lectures,
    freeboard,
    qnaboard,
    notice,
    dashboard,
    grade,
    introduction,
    sidebar_board
  },
  data: () => ({
    middle_title: "대시보드",
    progess_data: 70
  }),
  methods: {
    change_middle_title: function(title) {
      this.middle_title = title;
    }
  },
  created() {
    if (this.$route.query.tab != null) {
      this.middle_title = this.$route.query.tab;
    }
    eventBus.$on("bell_route", route => {
      this.middle_title = route;
    });
    this.$route.query.tab = "";
  }
};
</script>

<style scoped>
.wrap-body {
  min-width: 800pt;
  max-width: 1000pt;
  width: 70%;
  padding-top: 1%;
  margin: 0 auto;
}
.wrap-app-menu {
  padding-bottom: 1%;
  border-bottom: 1px solid #d3d1d1;
}
.body-title {
  width: auto;
  font-size: 1.7rem;
  font-weight: 600;
  padding-left: 3%;
  padding-top: 3%;
}
.brief-img {
  padding-left: 1%;
  padding-right: 1%;
  width: 30%;
}
.brief-text {
  width: 65%;
}
.process-line {
  padding-left: 2%;
}
.wrap-brief {
  padding-top: 1.5%;
  padding-bottom: 2%;
}
.brief-text-left {
  width: 70%;
  display: inline-block;
}
.brief-text-right {
  height: 100%;
  width: 30%;
  display: inline-block;
}
.v-card-title {
  font-size: 5rem;
}
.brief-title {
  padding-top: 6%;
  font-size: 1.8rem;
  font-weight: 550;
}
.brief-subtitle {
  padding-top: 1%;
  font-size: 1.1rem;
}
.brief-process-line-title {
  padding-top: 2.5%;
  padding-bottom: 1.2%;
}
.btn-learn {
  margin: 0 auto;
}
</style>

