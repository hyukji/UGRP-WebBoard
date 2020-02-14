<template>
  <div id="app">
    <div class="wrapcontent">
      <nav class="toparea">
        <ul>
          <div class="navbar">
            <li>
              <router-link to="/user">
                <font-awesome-icon :icon="['fas', 'user']" />
              </router-link>
            </li>
            <li>
              <router-link to="/home">
                <font-awesome-icon :icon="['fas', 'home']" />
              </router-link>
            </li>
          </div>
        </ul>
        <br />
      </nav>
      <main>
        <h1>UGRP_Web</h1>
        <img src="./assets/logo.png" />
        <router-view class="default view"></router-view>
        <br />
        <router-view class="additional view" name="complement"></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.toparea {
  height: 50px;
  border-bottom: thin solid #202022;
  text-align: center;
}
ul {
  display: inline-block;
  width: 1000px;
  height: 100%;
  list-style-type: none;
}
li {
  font-size: 25px;
  margin-right: 1.5%;

  float: right;
}
#navbar {
  width: 100%;
  text-align: left;
}
</style>
