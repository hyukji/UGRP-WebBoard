<template>
  <div id="Newposting">
    <div>
      <div>Newposting</div>writer :
      <input v-model="posting.writer" placeholder="writer" />
      <br />title :
      <input v-model="posting.title" placeholder="title" />
      <br />body :
      <input v-model="posting.body" placeholder="body" />
      <br />
      <button v-on:click="post_it">Posting</button>
      <button v-on:click="topostings">GoBack</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      posting: {
        writer: "",
        title: "",
        body: ""
      }
    };
  },

  methods: {
    topostings: function(id) {
      this.$router.push("/board");
    },
    post_it: function(event) {
      this.$http
        .post("/api/posting/newposting", {
          //axios 사용
          posting: this.posting
        })
        .then(response => {
          if (response.data.result === 0) {
            alert("Error, please, try again");
          }
          if (response.data.result === 1) {
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
