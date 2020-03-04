<template>
  <v-app-bar app color="teal" height="75px" align-center>
    <div class="wrap-appbar">
      <div class="appbar-left">
        <a href="http://localhost:8080/" class="text_logo">UGRPWEB</a>
      </div>
      <div class="appbar-right">
        <ul>
          <li>
            <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" text>
              <v-icon size="20pt" color="white">fas fa-bell</v-icon>
            </v-btn>
          </li>
          <li>
            <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" text>
              <v-icon size="20pt" color="white">fas fa-user</v-icon>
            </v-btn>
          </li>
        </ul>
      </div>
    </div>
  </v-app-bar>
</template>

<style scoped>
.wrap-appbar {
  min-width: 800pt;
  max-width: 1000pt;
  width: 70%;
  margin: 0 auto;
}
.appbar-left {
  display: inline-block;
  width: 13%;
}
a {
  display: inline-block;
  text-decoration: none;
}
.text_logo {
  font-size: 24pt;
  color: white;
}
.appbar-right {
  display: inline-block;
  width: 87%;
  text-align: right;
}
ul {
  padding: 0;
  margin-left: 0;
  list-style-type: none;
}
li {
  display: inline-block;
}
</style>
