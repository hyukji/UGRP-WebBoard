<template>
  <div class="wrap-body">
    <div class="wrap-app-menu">
      <div class="app-menu">
        <v-btn class="menu-title" text v-on:click="change_middle_title('대시보드')">대시보드</v-btn>
        <v-btn class="menu-title" text v-on:click="change_middle_title('강의소개')">강의소개</v-btn>
        <v-btn class="menu-title" text v-on:click="change_middle_title('게시판')">개사판</v-btn>
        <v-btn class="menu-title" text v-on:click="change_middle_title('성적')">성적</v-btn>
      </div>
    </div>

    <board v-if="middle_title == '게시판'"></board>
    <dashboard v-if="middle_title == '대시보드'"></dashboard>
    <grade v-if="middle_title == '성적'"></grade>
    <introduction v-if="middle_title == '강의소개'"></introduction>
  </div>
</template>

<script>
// @ is an alias to /src
import board from "@/components/AboutCourses/board.vue";
import dashboard from "@/components/AboutCourses/dashboard.vue";
import grade from "@/components/AboutCourses/grade.vue";
import introduction from "@/components/AboutCourses/introduction.vue";

export default {
  name: "Mycourse",
  components: {
    board,
    dashboard,
    grade,
    introduction
  },
  data: () => ({
    middle_title: "대시보드",
    progess_data: 70
  }),
  methods: {
    change_middle_title: function(title) {
      this.middle_title = title;
    }
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
.app-menu {
}
.body-title {
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 3%;

  padding-top: 3%;

  padding-bottom: 2%;
}
.wrap-Mycourse-cards {
  float: left;
}
.btn-nowlearn {
  padding-right: 5%;
  padding-bottom: 3%;
  text-align: right;
}
.menu-title {
  font-size: 1.2rem;
  font-weight: 550;
}
</style>

