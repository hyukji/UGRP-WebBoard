<template>
  <div class="wrap-dashboard">
    <div class="dashboard-cards">
      <div class="dashboard-cards-half left">
        <div class="wrap-card class_list">
          <v-card class="mx-auto" min-width="400" width="100%" min-height="570" outlined>
            <v-card-text>
              <p class="card_title">수업목록</p>
              <ul>
                <li v-for="el of class_list">
                  <v-icon
                    color="teal darken-2"
                    size="27"
                    v-if="el.complete == 0"
                  >far fa-check-circle</v-icon>
                  <v-icon color="teal darken-2" size="24" v-else>fas fa-check-circle</v-icon>
                  <p class="li-title">{{el.list_title}}</p>
                  <p class="li-title li-date">{{ printDatePast(el.date) }}</p>
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </div>
      </div>
      <div class="dashboard-cards-half right">
        <div class="wrap-card notice">
          <v-card class="mx-auto" min-width="400" width="100%" min-height="125" outlined>
            <v-card-text>
              <p class="card_title">과제목록</p>
              <ul>
                <li v-for="el of assignments">
                  <v-icon
                    color="teal darken-2"
                    v-if="el.complete == 0"
                    size="24"
                  >far fa-check-circle</v-icon>
                  <v-icon color="teal darken-2" size="24" v-else>fas fa-check-circle</v-icon>
                  <p class="li-title">{{el.list_title}}</p>
                  <p class="li-title li-date">{{ printDatePast(el.date) }}</p>
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </div>
        <div class="wrap-card notice">
          <v-card class="mx-auto" min-width="400" width="100%" min-height="125" outlined>
            <v-card-text>
              <p class="card_title">공지사항</p>
              <ul>
                <li v-for="el of notice">
                  <v-icon color="teal darken-2" size="24">far fa-sticky-note</v-icon>
                  <p class="li-title">{{el.list_title}}</p>
                  <p class="li-title li-date">{{ printDatePast(el.date) }}</p>
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </div>
        <div class="wrap-card question">
          <v-card class="mx-auto" min-width="400" width="100%" min-height="125" outlined>
            <v-card-text>
              <p class="card_title">최근질문</p>
              <ul>
                <li v-for="el of question">
                  <v-icon color="teal darken-2" size="24">fas fa-paper-plane</v-icon>
                  <p class="li-title">{{el.list_title}}</p>
                  <p class="li-title li-date">{{ printDatePast(el.date) }}</p>
                </li>
              </ul>
            </v-card-text>
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
    date: "Mon Mar 07 2020 23:06:20 GMT+0900 (대한민국 표준시)",
    class_list: [
      {
        list_title: "lab#00 파이썬 이해하기",
        complete: 1,
        date: "Mon Mar 07 2019 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "lab#00 파이썬 이해하기",
        complete: 1,
        date: "Mon Mar 01 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "lab#00 파이썬 이해하기",
        complete: 1,
        date: "Mon Mar 07 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "lab#00 파이썬 이해하기",
        complete: 1,
        date: "Mon Mar 04 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "lab#00 파이썬 이해하기",
        complete: 0,
        date: "Mon Mar 02 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "lab#00 파이썬 이해하기",
        complete: 0,
        date: "Mon Mar 07 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "lab#00 파이썬 이해하기",
        complete: 0,
        date: "Mon Mar 07 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "lab#00 파이썬 이해하기",
        complete: 0,
        date: "Mon Mar 07 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "lab#00 파이썬 이해하기",
        complete: 0,
        date: "Mon Mar 07 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "lab#00 파이썬 이해하기",
        complete: 0,
        date: "Mon Mar 07 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      }
      //{ list_title: "lab#01 변수", complete: 0 }
    ],
    assignments: [
      {
        list_title: "Assignment1",
        complete: 1,
        date: "Mon Mar 05 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "Assignment2",
        complete: 0,
        date: "Mon Mar 07 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "Assignment2",
        complete: 0,
        date: "Mon Mar 06 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      }
    ],
    notice: [
      {
        list_title: "공지 1",
        date: "Mon Mar 07 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "공지 2",
        date: "Mon Mar 07 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      }
    ],
    question: [
      {
        list_title: "질문있습니다",
        date: "Mon Mar 07 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      },
      {
        list_title: "궁금한게 있어요",
        date: "Mon Mar 08 2020 23:06:20 GMT+0900 (대한민국 표준시)"
      }
    ]
  }),
  methods: {
    getDateAndTime(date) {
      if (date !== null) {
        var obj_date = new Date(date);
        let hour = obj_date.getHours();
        let minutes = obj_date.getMinutes();
        let fullDate = `${obj_date.getFullYear()}/${obj_date.getMonth() +
          1}/${obj_date.getDate()}`;
        return `${fullDate} ${hour}:${minutes}`;
      } else {
        return null;
      }
    },
    printDatePast(date) {
      let nowdate = new Date();
      var obj_date = new Date(date);
      if (nowdate.getFullYear() != obj_date.getFullYear()) {
        let num = nowdate.getFullYear() - obj_date.getFullYear();
        return num + "년 전";
      }
      if (nowdate.getMonth() != obj_date.getMonth()) {
        let num = nowdate.getMonth() - obj_date.getMonth();
        return num + "달 전";
      }
      if (nowdate.getDate() != obj_date.getDate()) {
        let num = nowdate.getDate() - obj_date.getDate();
        return num + "일 전";
      } else {
        return "오늘";
      }
    }
  }
};
</script>

<style scoped>
.wrap-dashboard {
  padding-top: 1%;
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

  padding-top: 1%;
  padding-bottom: 0.5%;
  padding-left: 3%;
  font-size: 1.25rem;
  font-weight: 700;
}
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
li {
  color: #2c2e37;
  padding: 1.2%;
  margin: 0;
}
.li-title {
  display: inline;
  font-size: 1.2rem;
  padding-left: 2%;
  padding-top: 0.2%;
}
.li-date {
  float: right;
  font-size: 0.8rem;
  color: #9c9c9c;
}
</style>

