<template>
  <section id="app">
    <Header></Header>
    <Home></Home>
  </section>
</template>

<script>
import Header from "@/components/Header";
import Home from "@/components/Home";

export default {
  name: "app",
  components: {
    "Header" : Header,
    "Home"   : Home
  }
};
</script>

<style>
body {
  
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f9fa;
  min-height: 100vh;
}
</style>
