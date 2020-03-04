<template>
  <v-app>
    <v-content class="wrap-page">
      <router-view name="header"></router-view>
      <router-view name="body"></router-view>
      <router-view name="footer"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosanskannada.css);

.wrap-page {
  width: 100%;
  height: 100%;
  background-color: #f9fcfc;
  font-family: "Nanum Gothic";
}
</style>
