<template>
  <div class="flex">
    <!-- sidebar start -->
    <Sidebar :show="show" @hideSidebar="hidebar" />
    <!-- content -->
    <div class="h-full w-full to-[#F5F5F5] from-white bg-gradient-to-r">
      <Navbar @sideBar="showNavBar" title="Sub Scription" />
      <div class="bg-white rounded-md shadow mx-10 my-5">
        <div>
          <router-link to="/create/subscription">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
            >New</button>
          </router-link>
          <div class="overflow-y-scroll lg:overflow-y-hidden">
            <table class="w-full">
              <thead class="bg-[#D7D8DB] px-3 py-4">
                <tr>
                  <td class="text-left px-6 py-5">Title</td>
                  <td class="text-left px-6 py-5">Price</td>
                  <td class="text-left px-6 py-5">Ads</td>
                  <td class="text-left px-6 py-5">Expire Date</td>
                  <td class="text-left px-6 py-5">Icon</td>
                  <td class="text-left px-6 py-5">Action</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pk, index) in packages" :key="index" class="border-b">
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >{{pk.title}}</td>
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >{{pk.price}}</td>
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >{{pk.banners}}</td>
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >{{pk.expire_date}}</td>
                  <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    <img
                      :src="'https://coinbid11.herokuapp.com/uploads/'+pk.icon"
                      class="w-12 h-12"
                      alt
                    />
                  </td>
                  <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    <router-link :to="'/update/subscription/'+pk._id">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mr-5 fill-green-500 hover:fill-green-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </button>
                    </router-link>
                    <button class="ml -5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 fill-red-500 hover:fill-red-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        @click="deletePackage(pk._id)"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
      packages: []
    };
  },
  methods: {
    showNavBar() {
      this.show = true;
    },
    hidebar() {
      this.show = false;
    },
    async getPackages() {
      const res = await (
        await fetch("https://coinbid11.herokuapp.com/admin/package/plan", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            admin_access_token: localStorage.getItem("token")
          }
        })
      ).json();
      if (res.success) {
        this.packages = res.packages;
      }
    },
    async deletePackage(id) {
      const res = await (
        await fetch(
          `https://coinbid11.herokuapp.com/admin/package/plan/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              admin_access_token: localStorage.getItem("token")
            }
          }
        )
      ).json();
      if (res.success) {
        alert(res.message);
        this.getPackages();
      } else {
        alert(res.message);
      }
    }
  },
  mounted() {
    this.getPackages();
  }
};
</script>
<style >
</style>