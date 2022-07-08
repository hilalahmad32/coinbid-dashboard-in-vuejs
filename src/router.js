import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import User from "./pages/UserPage.vue";
import UserWithDrawRequest from "./pages/UserWithDrawRequest.vue";
import VerifyPage from "./pages/VerifyPage.vue";
// import Login from "./pages/LoginPage.vue";

const routes = [
  //   {
  //     path: "/",
  //     component: Login,
  //   },
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/request",
    component: UserWithDrawRequest,
  },
  {
    path: "/verify",
    component: VerifyPage,
  },
];

export const router = new createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});
