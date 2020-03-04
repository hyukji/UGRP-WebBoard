<template>
  <div class="wrap-dashboard">
    <p class="body-title">{{ middle_title }}</p>

    <div class="dashboard-cards">
      <div class="dashboard-cards-half left">
        <div class="wrap-card class_list">
          <v-card class="mx-auto" min-width="400" width="100%" min-height="530">
            <v-card-text>
              <p class="card_title">수업목록</p>
              <ul>
                <li v-for="el of class_list">
                  <v-icon color="teal darken-2" v-if="el.complete == 0">far fa-check-circle</v-icon>
                  <v-icon color="teal darken-2" v-else>fas fa-check-circle</v-icon>
                  {{el.list_title}}
                </li>
              </ul>
            </v-card-text>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
      </div>
      <div class="dashboard-cards-half right">
        <div class="wrap-card notice">
          <v-card class="mx-auto" min-width="400" width="100%" min-height="125">
            <v-card-text>
              <p class="card_title">과제목록</p>
              <ul>
                <li v-for="el of assignments">
                  <v-icon color="teal darken-2" v-if="el.complete == 0">far fa-check-circle</v-icon>
                  <v-icon color="teal darken-2" v-else>fas fa-check-circle</v-icon>
                  {{el.list_title}}
                </li>
              </ul>
            </v-card-text>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
        <div class="wrap-card notice">
          <v-card class="mx-auto" min-width="400" width="100%" min-height="125">
            <v-card-text>
              <p class="card_title">공지사항</p>
              <ul>
                <li v-for="el of notice">{{el.list_title}}</li>
              </ul>
            </v-card-text>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
        <div class="wrap-card question">
          <v-card class="mx-auto" min-width="400" width="100%" min-height="125">
            <v-card-text>
              <p class="card_title">최근질문</p>
              <ul>
                <li v-for="el of question">
                  <v-icon color="teal darken-2">fas fa-question</v-icon>
                  {{el.list_title}}
                </li>
              </ul>
            </v-card-text>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Dashboard",
  components: {},
  data: () => ({
    middle_title: "대시보드",
    class_list: [
      { list_title: "lab#00 파이썬 이해하기", complete: 1 }
      //{ list_title: "lab#01 변수", complete: 0 }
    ],
    assignments: [
      { list_title: "Assignment1", complete: 1 },
      { list_title: "Assignment2", complete: 0 },
      { list_title: "Assignment2", complete: 0 }
    ],
    notice: [{ list_title: "공지 1" }, { list_title: "공지 2" }],
    question: [
      { list_title: "질문있습니다" },
      { list_title: "궁금한게 있어요" }
    ]
  }),
  methods: {}
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
.body-title {
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 3%;
  padding-top: 3%;
  padding-bottom: 2%;
}
.right {
  float: right;
}

.dashboard-cards-half {
  display: inline-block;
  width: 50%;
  padding-left: 2%;
  padding-right: 2%;
}
.dashboard-cards {
  display: block;
  width: 100%;
}
.wrap-card {
  padding-bottom: 3%;
}
.card_title {
  color: #2c2e37;

  padding-top: 2.3%;
  padding-left: 3%;
  font-size: 1.25rem;
  font-weight: 550;
}
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
li {
  font-size: 1.2rem;
  color: #2c2e37;
  padding: 1%;
  margin: 0;
}
</style>

