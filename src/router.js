import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Login/index";
import Welcome from "@/views/Welcome/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About/index"),
  },
];

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0, behavior: "smooth" });
      }, 500);
    });
  },
  routes,
});
