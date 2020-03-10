<template>
  <div class="freeboard">
    <v-card-title class="search">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" label="Search" append-icon="mdi-magnify" hide-details></v-text-field>
      <v-btn class="teal white--text bottom-btn" depressed>글쓰기</v-btn>
    </v-card-title>
    <v-data-table color="f9fcfc" :headers="headers" :items="notice_items" :search="search"></v-data-table>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "board",
  components: {},
  data: () => ({
    middle_title: "게시판",
    search: "",
    headers: [
      {
        text: "글번호",
        sortable: false,
        width: "9%"
      },
      {
        text: "제목",
        sortable: false,
        value: "title",
        width: "60%"
      },
      { text: "작성일", sortable: false, value: "date" },
      { text: "작성자", sortable: false, value: "writer", width: "11%" },
      { text: "조회수", sortable: false, value: "hits" }
    ],
    notice_items: [
      {
        title: "첫 질문입니다.",
        date: "2020.3.6",
        writer: "곽지혁",
        hits: 1,
        file: 1
      }
    ]
  }),
  methods: {}
};
</script>

<style scoped>
.bottom-btn {
  margin-top: 1%;
  margin-left: 1.5%;
  float: right;
}
.search {
  padding-top: 0;
}
.freeboard {
  display: inline-block;
  width: 75%;
}
.body-title {
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 3%;

  padding-top: 3%;

  padding-bottom: 2%;
}
</style>

