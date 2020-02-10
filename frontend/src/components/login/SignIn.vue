<template>
  <div id="SignIn">
    <div>Sign In</div>
    ID :
    <input v-model="user.id" placeholder="ID" />
    <br/>Password :
    <input
      v-model="user.password"
      type="password"
      placeholder="password"
    /><br/>
    <button v-on:click="signIn">SignIn</button>
    <div>If u don't have account</div>
    <button v-on:click="toSignUp">SignUp</button>
  </div>
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
