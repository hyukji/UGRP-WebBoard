<template>
  <div class="wrap-body">
    <p class="body-title">내 강의</p>
    <div class="wrap-Mycourse-cards">
      <v-card class="mx-auto" max-width="300" hover href="http://localhost:8080/course/courseid">
        <v-img src="../assets/python.png" height="200px"></v-img>

        <v-card-title>프로그래밍(실습)</v-card-title>

        <v-card-subtitle>prof. 신동훈</v-card-subtitle>
        <div class="btn-nowlearn">
          <v-btn class="teal white--text" small>바로학습</v-btn>
        </div>

        <v-divider class="mx-4"></v-divider>
        <v-card-subtitle>진행률 70%</v-card-subtitle>
        <v-progress-linear v-model="progess_data" color="teal"></v-progress-linear>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Mycourse",
  components: {},
  data: () => ({
    progess_data: 70
  })
};
</script>

<style scoped>
.wrap-body {
  min-width: 800pt;
  max-width: 1000pt;
  width: 70%;
  padding-top: 4%;
  margin: 0 auto;
}
.body-title {
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 2%;
}
.wrap-Mycourse-cards {
  float: left;
}
.btn-nowlearn {
  padding-right: 5%;
  padding-bottom: 3%;
  text-align: right;
}
</style>

