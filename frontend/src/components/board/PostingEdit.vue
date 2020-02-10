<template>
  <div id="Editposting">
    <div>Editposting</div>
    <tr v-for="(posting, Idx) in postedData" :key="Idx">
      <td class>
        <span>
          <h1>{{ posting.title }}</h1>
        </span>
        <span>{{ posting.writer }}</span>
        <span>{{ posting.showdate }}</span>
      </td>body :
      <input v-model="posting.body" placeholder="posting.body" />
      <br />
      <button v-on:click="re_post">Posting</button>
    </tr>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
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
      this.$http.patch(`/api/home/${id}`).then(response => {
        this.postedData = response.data;
      });
    }
  },
  // 페이지가 열리면 실행되는 명령어입니다.
  created() {
    console.log(11);
    var id = this.$route.params.id;
    this.$http.get(`/api/home/${id}`).then(response => {
      this.postedData = response.data;
    });
  }
};
</script>
