import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";

Vue.use(Router);

export default new Router({
  hashbang: false,
  mode: "history",
  linkActiveClass: "active",
  transitionOnLoad: true,

  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    }
  ]
});
