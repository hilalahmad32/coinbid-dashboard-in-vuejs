<template>
  <div class="flex">
    <!-- sidebar start -->
    <Sidebar :show="show" @hideSidebar="hidebar" />
    <!-- content -->
    <div class="h-full w-full to-[#F5F5F5] from-white bg-gradient-to-r">
      <Navbar @sideBar="showNavBar" title="Banner" />
      <div class="bg-white rounded shadow mx-10 my-5 py-2">
        <div>
          <router-link to="/create/banner">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
            >New</button>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-10 mx-5">
          <div v-for="(banner, index) in banners" :key="index">
            <div class="relative">
              <router-link :to="'/update/banner/'+banner._id">
                <img
                  class="rounded-lg w-full h-52 object-cover"
                  :src="'http://localhost:5000/uploads/'+banner.banner"
                  alt
                />
              </router-link>
              <button
                class="inline-block absolute top-2 right-2 text-gray-500 dark:text-red-400 bg-red-100 dark:hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  @click="deleteBanner(banner._id)"
                  class="h-6 w-6"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "BannerPage",
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      show: false,
      banners: [],
      path: "http://localhost:5000/uploads/"
    };
  },
  methods: {
    showNavBar() {
      this.show = true;
    },
    hidebar() {
      this.show = false;
    },
    async getBanners() {
      const res = await (
        await fetch("http://localhost:5000/admin/banner", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            admin_access_token: localStorage.getItem("token")
          }
        })
      ).json();
      if (res.success) {
        this.banners = res.banners;
      }
    },
    async deleteBanner(id) {
      const res = await (
        await fetch(`http://localhost:5000/admin/banner/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            admin_access_token: localStorage.getItem("token")
          }
        })
      ).json();
      console.log(res);
      if (res.success) {
        alert(res.message);
        this.getBanners();
      } else {
        alert(res.message);
      }
    }
  },
  mounted() {
    this.getBanners();
  }
};
</script>
<style >
</style>