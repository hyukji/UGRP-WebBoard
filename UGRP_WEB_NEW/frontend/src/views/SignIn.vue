<template>
  <v-container fluid background-color="teal lighten-5" class="wrap-content">
    <v-row class="text-center">
      <v-col class cols="12">
        <a href="http://localhost:8080/" class="text_logo">UGRPWEB</a>
      </v-col>
      <v-col>
        <v-text-field v-model="user.id" label="아이디"></v-text-field>
        <v-text-field v-model="user.password" :type="show1 ? 'text' : 'password'" label="비밀번호"></v-text-field>
        <v-btn
          color="teal white--text"
          height="40pt"
          text-lg-center
          depressed
          large
          block
          v-on:click="signIn"
        >로그인</v-btn>
        <br />
        <ul>
          <li>
            <a>아이디 찾기</a>
          </li>
          <li>
            <a>비밀번호 찾기</a>
          </li>
          <li>
            <a href="http://localhost:8080/signup">회원가입</a>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        id: "",
        password: ""
      }
    };
  },
  methods: {
    signIn: function(event) {
      this.$http
        .post("/api/login/signIn", {
          //axios 사용
          user: this.user
        })
        .then(res => {
          if (res.data.result === 0) {
            alert("Error, please, try again");
          }
          if (res.data.result === 1) {
            alert("Success");
            this.$router.push("/mycourse"); // Login 페이지로 보내줌
          }
        })
        .catch(function(error) {
          alert("error");
        });
    }
  }
};
</script>

<style scoped>
.wrap-content {
  padding-top: 100pt;
  width: 400pt;
}
ul {
  text-align: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
}
li {
  display: inline-block;
  margin-right: 3%;
}
a {
  text-decoration: none;
}
.text_logo {
  color: black;
  font-size: 37pt;
}
</style>


