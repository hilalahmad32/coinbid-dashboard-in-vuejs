<script setup>
// import { useStore } from "../store";
// const store = useStore();
</script>
<template>
  <div class="flex">
    <!-- sidebar start -->
    <Sidebar :show="show" @hideSidebar="hidebar" />
    <!-- content -->
    <div class="h-full w-full to-[#F5F5F5] from-white bg-gradient-to-r lg:ml-[300px]">
      <Navbar @sideBar="showNavBar" title="Google Ads" />
      <div class="container mx-auto sm:px-0 ml-10">
        <router-link to="/create/google/ads">
          <button
            class="bg-[#E27425] text-white rounded px-3 sm:py-2 py-1 sm:text-[19px] text-sm font-bold font-mulish sm:my-4 my-2 mb-0"
          >New</button>
        </router-link>
      </div>
      <div class="bg-white rounded-md shadow mx-10 my-5" :class="isLoading ? 'p-10':'p-0'">
        <div class="text-center my-5" v-if="isLoading">
          <div role="status">
            <svg
              class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-else>
          <div class="overflow-y-scroll lg:overflow-y-hidden">
            <table class="w-full">
              <thead class="bg-[#D7D8DB] px-3 py-4">
                <tr>
                  <td class="text-left px-6 py-5">Id</td>
                  <td class="text-left px-6 py-5">App id</td>
                  <td class="text-left px-6 py-5">App unit id</td>
                  <td class="text-left px-6 py-5">Coins</td>
                  <td class="text-left px-6 py-5">Action</td>
                  <td></td>
                </tr>
              </thead>
              <tbody v-for="(ad, index) in ads" :key="index" class="border-b">
                <tr>
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >{{index + 1}}</td>
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >{{ad.app_id}}</td>
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >{{ad.ad_unit_id}}</td>
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                  >{{ad.coins}}</td>
                  <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    <router-link :to="'/update/google/ads/'+ad._id">
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
                        @click="deleteCoin(ad._id)"
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
import { BASE_URL } from "../baseurl";
export default {
  name: "BannerPage",
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      show: false,
      isLoading: false,
      ads: []
    };
  },
  methods: {
    showNavBar() {
      this.show = true;
    },
    hidebar() {
      this.show = false;
    },
    async getAds() {
      this.isLoading = true;
      const res = await (
        await fetch(`${BASE_URL}admin/ads/google`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            admin_access_token: localStorage.getItem("token")
          }
        })
      ).json();
      if (res.success) {
        this.ads = res.ads;
        this.isLoading = false;
      }
    },
    async deleteCoin(id) {
      const res = await (
        await fetch(`${BASE_URL}admin/ads/google/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            admin_access_token: localStorage.getItem("token")
          }
        })
      ).json();
      if (res.success) {
        this.$swal("success", res.message);
        this.getAds();
      } else {
        this.$swal("error", res.message);
      }
    }
  },
  mounted() {
    this.getAds();
  }
};
</script>
<style >
</style>