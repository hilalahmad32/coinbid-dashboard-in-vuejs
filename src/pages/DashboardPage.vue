<script setup>
import Navbar from "../components/Navbar.vue";
import Dashboard from "../components/Dashboard.vue";
import UserPage from "./UserPage.vue";
import UserWithDrawRequest from "./UserWithDrawRequest.vue";
import VerifyPage from "./VerifyPage.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template >
  <div class="flex">
    <!-- sidebar start -->
    <Sidebar :show="show" @hideSidebar="hidebar" />
    <!-- content -->
    <div class="h-full w-full to-[#F5F5F5] from-white bg-gradient-to-r">
      <Navbar @sideBar="showNavBar" title="Dashboard" />
      <Dashboard />
    </div>
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
    },
    hidebar() {
      this.show = false;
    }
  }
};
</script>
<style>
</style>