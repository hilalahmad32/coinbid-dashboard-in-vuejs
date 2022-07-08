<script setup>
import Navbar from "../components/Navbar.vue";
import Dashboard from "../components/Dashboard.vue";
import UserPage from "./UserPage.vue";
import UserWithDrawRequest from "./UserWithDrawRequest.vue";
import VerifyPage from "./VerifyPage.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template >
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "DashboardPage",
  data() {
    return {
      show: false
    };
  },
  methods: {
    showNavBar() {
      this.show = true;
    }
  }
};
</script>
<style>
</style>