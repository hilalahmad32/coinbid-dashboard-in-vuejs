import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/DashboardPage.vue";
import User from "../pages/UserPage.vue";
import UserWithDrawRequest from "../pages/UserWithDrawRequest.vue";
import VerifyPage from "../pages/VerifyPage.vue";
import Login from "../pages/LoginPage.vue";
import UpdateUser from "../pages/UpdateUser.vue";
import AdsPage from "../pages/AdsPage.vue";
import CreateAds from "../pages/CreateAds.vue";
import UpdateAds from "../pages/UpdateAds.vue";
import CoinPage from "../pages/CoinPage.vue";
import CreateCoin from "../pages/CreateCoin.vue";
import UpdateCoin from "../pages/UpdateCoin.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },

  {
    path: "/user",
    component: User,
  },
  {
    path: "/edit/users/:id",
    component: UpdateUser,
  },
  {
    path: "/request",
    component: UserWithDrawRequest,
  },
  {
    path: "/verify",
    component: VerifyPage,
  },
  {
    path: "/ads",
    component: AdsPage,
  },
  {
    path: "/create/ads",
    component: CreateAds,
  },
  {
    path: "/update/ads/:id",
    component: UpdateAds,
  },
  {
    path: "/coin",
    component: CoinPage,
  },
  {
    path: "/create/coin",
    component: CreateCoin,
  },
  {
    path: "/update/coin/:id",
    component: UpdateCoin,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

export const router = new createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass:
    "flex items-center mt-0 fill-[#E27425] rounded-r-full border-l-4 border-[#E27425] shadow-md text-[#E27425] text-[16px] ",
});

router.beforeEach((to, from, next) => {
  if (
    to.fullPath === "/dashboard" || to.fullPath === "/user" ||
    to.fullPath === "/request" || to.fullPath === "/banner"
  ) {
    if (!localStorage.getItem("token")) {
      next("/");
    }
  }
  if (to.fullPath === "/") {
    if (localStorage.getItem("token")) {
      next("/dashboard");
    }
  }
  next();
});
