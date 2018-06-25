<template>
  <section id="app">
    <Header></Header>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </section>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "app",
  components: {
    "Header" : Header
  }
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
</style>
