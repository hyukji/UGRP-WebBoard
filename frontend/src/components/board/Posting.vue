<template>
  <div class="list">
    <!-- data 내 pageTitle의 값이 아래 h2에 들어갑니다. -->
    <h2>{{ pageTitle }}</h2>
    <table class="posting_detail">
      <td class>
        <span>{{ posting_Data.title }}</span>
        <span>{{ posting_Data.writer }}</span>
        <span>{{ posting_Data.showdate }}</span>
        <span>{{ posting_Data.body }}</span>
      </td>
    </table>

    <button v-on:click="toHome">GoBack</button>
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
    toHome: function(id) {
      this.$router.push("/home");
    }
  },
  // 페이지가 열리면 실행되는 명령어입니다.
  created() {
    console.log(11);
    var id = this.$route.params.id;
    this.$http.get(`/api/home/${id}`).then(response => {
      this.posting_Data = response.data;
    });
  }
};
</script>
