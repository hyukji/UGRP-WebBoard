<template>
  <v-container flex class="wrap-content">
    <v-row class="text-center">
      <v-col class cols="12">
        <a href="http://localhost:8080/" class="text_logo">UGRPWEB</a>
      </v-col>
      <v-col>
        <v-text-field v-model="user.name" label="이름" outlined></v-text-field>
        <v-text-field v-model="user.email" label="이메일" outlined></v-text-field>
        <v-text-field v-model="user.id" label="아이디" outlined></v-text-field>
        <v-text-field
          v-model="user.password"
          :type="show1 ? 'text' : 'password'"
          label="비밀번호"
          outlined
        ></v-text-field>
        <v-btn
          color="teal white--text"
          height="40pt"
          text-lg-center
          depressed
          large
          block
          v-on:click="signUp"
        >가입하기</v-btn>
        <br />
      </v-col>
    </v-row>
    <div wrap-ul>
      <ul>
        <li>
          <p>계정이 있으신가요?</p>
        </li>
        <li>
          <a href="http://localhost:8080/signin">로그인</a>
        </li>
      </ul>
    </div>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        id: "",
        password: "",
        name: ""
      }
    };
  },
  methods: {
    signUp: function(event) {
      this.$http
        .post("/api/login/signUp", {
          //axios 사용
          user: this.user
        })
        .then(response => {
          if (response.data.result === 0) {
            alert("Error, please, try again");
          }
          if (response.data.result === 1) {
            alert("Success");
            this.$router.push("/signin"); // Login 페이지로 보내줌
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
a {
  text-decoration: none;
}
.text_logo {
  color: black;
  font-size: 37pt;
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
</style>


