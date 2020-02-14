<template>
  <div class="list">
    <!-- data 내 pageTitle의 값이 아래 h2에 들어갑니다. -->
    <h2>{{ pageTitle }}</h2>
    <table class="editform">
      <td class>
        <span>{{ postedData.title }}</span> <br />

        <span>{{ postedData.writer }}</span>
        <span>{{ postedData.showdate }}</span> <br />

        body :
        <input v-model="postedData.body" placeholder="postedData.body" />
        <br />
      </td>
    </table>

    <button v-on:click="re_post">posting</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageTitle: "board edit page",

      postedData: []
    };
  },
  // 함수들을 지정하는 곳입니다.
  methods: {
    toHome: function(id) {
      this.$router.push("/home");
    }
  },
  methods: {
    re_post: function(id) {
      var id = this.$route.params.id;
      this.$http
        .patch(`/api/posting/${id}`, { body: this.postedData.body })
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
    console.log(121);
    var id = this.$route.params.id;
    this.$http.get(`/api/posting/${id}`).then(response => {
      this.postedData = response.data;
    });
    console.log(this.postedData);
  }
};
</script>
