<template>
  <div class="list">
    <!-- data 내 pageTitle의 값이 아래 h2에 들어갑니다. -->
    <h2>{{ pageTitle }}</h2>
    <div>
      <button v-on:click="toSignIn">SignIn</button>
      <button v-on:click="toSignUp">SignUp</button>
      <button v-on:click="toMakeNew">Write</button>
    </div>
    <table class="postings">
      <!-- data 내 lectueList 배열의 요소 하나하나가 아래 tr로 만들어집니다.   -->
      <!-- 각 요소 하나하나를 lecture로, 그 번호를 lecIdx로(여기서는 사용되지 않음) 부릅니다. -->
      <tr
        v-for="(posting, Idx) in postingList"
        :key="Idx"
        @click="toPosting(posting._id)"
      >
        <td class>
          <span>{{ posting.title }}</span>
          <span>{{ posting.writer }}</span>
          <span>{{ posting.showdate }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "posting-list",
  // 데이터가 들어가는 곳입니다.
  data: function() {
    return {
      pageTitle: "자유게시판",
      postingList: []
    };
  },
  // 함수들을 지정하는 곳입니다.
  methods: {
    toPosting: function(id) {
      this.$router.push(`posting/${id}`);
    },
    toMakeNew: function(id) {
      this.$router.push("/newposting");
    },
    toSignIn: function(id) {
      this.$router.push("/signIn");
    },
    toSignUp: function() {
      this.$router.push("/signUp")
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
