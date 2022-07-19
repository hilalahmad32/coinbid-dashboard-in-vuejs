import { defineStore } from "pinia";
// import { router } from "../router";
export const useStore = defineStore("main", {
  state: () => {
    return {
      token: localStorage.getItem("token") || "",
      admin: {},
      response: {},
      isloading: false,
      totalUser: 0,
      users: [],
      banks: [],
    };
  },
  actions: {
    async adminLogin(data) {
      this.isloading = true;
      const res =
        await (await fetch("https://coinbid11.herokuapp.com/admin/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })).json();
      this.response = res;
      this.isloading = false;
    },
    async totalCountUser() {
      const res =
        await (await fetch("https://coinbid11.herokuapp.com/admin/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "admin_access_token": localStorage.getItem("token"),
          },
        })).json();
      if (res.success) {
        this.totalUser = res.totalUsers;
        this.users = res.users;
      }
    },

    async userDelete(id) {
      const res = await (await fetch(
        `https://coinbid11.herokuapp.com/admin/delete/users/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "admin_access_token": localStorage.getItem("token"),
          },
        },
      )).json();
      if (res.success) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    },

    async getBank() {
      const res =
        await (await fetch("https://coinbid11.herokuapp.com/admin/banks", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "admin_access_token": localStorage.getItem("token"),
          },
        })).json();
      if (res.success) {
        this.banks = res.banks;
      }
    },
    async logout() {
      this.token = "";
      localStorage.removeItem("token");
    },
  },
});
