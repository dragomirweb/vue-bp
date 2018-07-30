import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Matches from "@/components/Matches";
Vue.use(Router);

export default new Router({
  hashbang: false,
  mode: "history",
  linkActiveClass: "active",
  transitionOnLoad: true,

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/matches",
      name: "Matches",
      component: Matches
    }
  ]
});
