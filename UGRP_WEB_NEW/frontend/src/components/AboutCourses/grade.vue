<template>
  <div class="grade">
    <v-card class="mx-auto" max-width="70%" outlined>
      <v-container>
        <v-row>
          <v-col class="wrap-total-list" v-for="item in total_data" :key="item.title">
            <v-list three-line>
              <v-icon size="40pt" v-text="item.icon"></v-icon>
              <v-list-item-title class="toal-list-title" v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <div>
      <p class="card-title">과제 성적</p>
      <v-card max-width="90%" class="mx-auto" outlined>
        <v-list two-line subheader>
          <v-list-item v-for="item in assignments" :key="item.title">
            <v-list-item-avatar>
              <v-icon size="20pt" color="black">far fa-file-code</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action class="assignment-right">
              <v-chip class="ma-2" color="teal lighten-1" text-color="white" v-text="item.score"></v-chip>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    assignments: [
      {
        title: "Assignment1",
        subtitle: "Jan 9, 2020",
        score: "95 / 100"
      },
      {
        title: "Assignment2",
        subtitle: "Jan 17, 2020",
        score: "95 / 100"
      },
      {
        title: "Assignment3",
        subtitle: "Jan 28, 2020",
        score: "95 / 100"
      }
    ],
    total_data: [
      {
        icon: "far fa-hourglass",
        title: "3일 6시간 55분",
        subtitle: "코딩한 시간"
      },
      {
        icon: "fas fa-pen",
        title: "4529",
        subtitle: "코딩한 줄 수"
      },
      {
        icon: "fas fa-trophy",
        title: "365 / 3541",
        subtitle: "성공횟수 / 제출횟수"
      }
    ]
  })
};
</script>


<style scoped>
.wrap-total-list {
  margin: 0 auto;
  text-align: center;
}
.toal-list-title {
  font-size: 1.25rem;
  padding-top: 6%;
  font-weight: 550;
}
.grade-half {
  padding-top: 4%;
}
.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  padding-top: 3%;

  padding-left: 6%;
}
.total-card {
  padding-top: 10%;
}
</style>
