<template>
  <div class="notice">
    <v-card background-color="#f9fcfc" outlined color="#f9fcfc">
      <v-card-title class="search">
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" label="Search" append-icon="mdi-magnify" hide-details></v-text-field>
      </v-card-title>
      <v-data-table class="table" :headers="headers" :items="notice_items" :search="search"></v-data-table>
    </v-card>
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
        title: "첫 공지사항 게시물입니다.",
        date: "2020.3.6",
        writer: "신동훈",
        hits: 24,
        file: 1
      },
      {
        title: "첫 공지사항 게시물입니다.",
        date: "2020.3.6",
        writer: "신동훈",
        hits: 24,
        file: 1
      },
      {
        title: "첫 공지사항 게시물입니다.",
        date: "2020.3.6",
        writer: "신동훈",
        hits: 24,
        file: 1
      },
      {
        title: "첫 공지사항 게시물입니다.",
        date: "2020.3.6",
        writer: "신동훈",
        hits: 24,
        file: 1
      },
      {
        title: "첫 공지사항 게시물입니다.",
        date: "2020.3.6",
        writer: "신동훈",
        hits: 24,
        file: 1
      },
      {
        title: "첫 공지사항 게시물입니다.",
        date: "2020.3.6",
        writer: "신동훈",
        hits: 24,
        file: 1
      },
      {
        title: "첫 공지사항 게시물입니다.",
        date: "2020.3.6",
        writer: "신동훈",
        hits: 24,
        file: 1
      },
      {
        title: "첫 공지사항 게시물입니다.",
        date: "2020.3.6",
        writer: "신동훈",
        hits: 24,
        file: 1
      }
    ]
  }),
  methods: {
    a: function() {
      console.log("a");
    }
  }
};
</script>

<style scoped>
.search {
  padding-top: 0;
}
.notice {
  display: inline-block;
  width: 79%;
  padding-left: 5%;
}
.body-title {
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 3%;

  padding-top: 3%;

  padding-bottom: 2%;
}
.table {
  background-color: #00f;
}
</style>

