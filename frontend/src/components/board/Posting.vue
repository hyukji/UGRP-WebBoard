<template>
  <div class="list">
    <!-- data 내 pageTitle의 값이 아래 h2에 들어갑니다. -->
    <h2>{{ pageTitle }}</h2>
    <table class="posting_detail">
      <div>
        <button v-on:click="toEdit">Edit</button>
        <button v-on:click="toDelete">Delete</button>
      </div>
      <td class>
        <span>{{ posting_Data.title }}</span>
        <span>{{ posting_Data.writer }}</span>
        <span>{{ posting_Data.showdate }}</span>
        <span>{{ posting_Data.body }}</span>
      </td>
    </table>

    <button v-on:click="topostings">GoBack</button>
  </div>
</template>

<script>
export default {
  name: "postingdata",
  // 데이터가 들어가는 곳입니다.
  data: function() {
    return {
      pageTitle: "자유게시판",
      posting_Data: []
    };
  },
  // 함수들을 지정하는 곳입니다.
  methods: {
    topostings: function(id) {
      this.$router.push("/board");
    },
    toEdit: function(id) {
      var id = this.$route.params.id;
      this.$router.push(`/board/posting_edit/${id}`);
    },
    toDelete: function() {
      var id = this.$route.params.id;
      this.$http
        .delete(`/api/posting/${id}`)
        .then(response => {
          if (response.data.result === 0) {
            alert("Error, please, try again");
          }
          if (response.data.result === 1) {
            alert("Success");
            this.$router.push("/board"); // board 페이지로 보내줌
          }
        })
        .catch(function(error) {
          alert("error");
        });
    }
  },
  // 페이지가 열리면 실행되는 명령어입니다.
  created() {
    console.log(11);
    var id = this.$route.params.id;
    this.$http.get(`/api/posting/${id}`).then(response => {
      this.posting_Data = response.data;
    });
  }
};
</script>
