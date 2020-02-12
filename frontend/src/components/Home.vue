<template>
  <div class="list">
    <!-- data 내 pageTitle의 값이 아래 h2에 들어갑니다. -->
    <h2>{{ pageTitle }}</h2>
    <div>
      <button v-on:click="toSignIn">SignIn</button>
      <button v-on:click="toSignUp">SignUp</button>
      <button v-on:click="toBoard">Board</button>
    </div>
  </div>
</template>

<script>
export default {
  // 데이터가 들어가는 곳입니다.
  data: function() {
    return {
      pageTitle: "Home",
      postingList: []
    };
  },
  // 함수들을 지정하는 곳입니다.
  methods: {
    toSignIn: function(id) {
      this.$router.push("/signIn");
    },
    toSignUp: function(id) {
      this.$router.push("/signUp");
    },
    toBoard: function(id) {
      this.$router.push("/board");
    }
  },
  // 페이지가 열리면 실행되는 명령어입니다.
  created() {
    this.$http.get("/api/home").then(response => {
      this.postingList = response.data;
    });
  }
};
</script>
