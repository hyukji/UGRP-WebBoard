<template>
  <div id="SignUp">
    <div>Sign Up</div>
    name :
    <input v-model="user.name" placeholder="name" />
    <br />ID :
    <input v-model="user.id" placeholder="ID" />
    <br />Password :
    <input
      v-model="user.password"
      type="password"
      placeholder="password"
    /><br />
    <button v-on:click="signUp">SignUp</button>
  </div>
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
        .post("/api/signUp", {
          //axios 사용
          user: this.user
        })
        .then(response => {
          if (response.data.result === 0) {
            alert("Error, please, try again");
          }
          if (response.data.result === 1) {
            alert("Success");
            this.$router.push("/signIn"); // Login 페이지로 보내줌
          }
        })
        .catch(function(error) {
          alert("error");
        });
    }
  }
};
</script>
