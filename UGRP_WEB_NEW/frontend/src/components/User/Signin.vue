<template>
  <v-container flex class="wrap-content">
    <v-row class="text-center">
      <v-col cols="12">
        <p class="text_login">로그인</p>
      </v-col>
      <v-col>
        <v-text-field v-model="user.id" label="아이디"></v-text-field>
        <v-text-field v-model="user.password" :type="show1 ? 'text' : 'password'" label="비밀번호"></v-text-field>
        <v-btn color="teal white--text" depressed large block v-on:click="signIn">로그인</v-btn>
        <br />
        <div wrap-ul>
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
        </div>
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
    toSignUp: function(id) {
      this.$router.push("/signUp");
    },
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
            this.$router.push("/home"); // Login 페이지로 보내줌
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
  margin-top: 100pt;
  width: 400pt;
}
.wrap-ul {
  align-items: center;
}
ul {
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
.text_login {
  font-size: 37pt;
}
</style>
