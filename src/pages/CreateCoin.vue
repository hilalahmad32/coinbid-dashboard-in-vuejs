<template >
  <div class="flex">
    <!-- sidebar start -->
    <Sidebar :show="show" @hideSidebar="hidebar" />
    <!-- content -->
    <div class="h-full w-full to-[#F5F5F5] from-white bg-gradient-to-r">
      <Navbar @sideBar="showNavBar" title="Users" />
      <div class="container mx-auto max-w-2xl">
        <router-link to="/coin">
          <button
            class="bg-[#E27425] text-white rounded px-3 py-2 text-[19px] font-bold font-mulish my-4"
          >Go Back</button>
        </router-link>
      </div>
      <div class="bg-white rounded-md shadow my-5 container mx-auto max-w-2xl">
        <div
          class="bg-[#D7D8DB] rounded-t-md px-3 py-3 text-[19px] font-bold font-mulish"
        >Create Coin</div>
        <div class="bg-white px-4 py-3">
          <form @submit.prevent="createBanner">
            <div
              class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-0 lg:gap-4"
            >
              <div class="my-2">
                <label for="coins" class="text-md block text-gray-700 font-bold mb-2">Coins:</label>
                <input
                  type="text"
                  class="border border-gray-400 rounded-2xl text-md font-semibold w-full py-2 px-6 outline-green-600 appearance-none"
                  placeholder="Enter Coins"
                  v-model="coins"
                />
              </div>
              <div class="my-2">
                <label for="price" class="text-md block text-gray-700 font-bold mb-2">Price:</label>
                <input
                  type="text"
                  v-model="price"
                  class="border border-gray-400 rounded-2xl text-md font-semibold w-full py-2 px-6 outline-green-600 appearance-none"
                  placeholder="Enter Enter banner Price"
                />
              </div>
            </div>
            <div class="my-2">
              <button
                class="border border-gray-400 rounded-md font-bold bg-green-700 text-md text-white w-full py-2 px-6 appearance-none capitalize hover:bg-green-800"
                type="submit"
              >Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import axios from "axios";
export default {
  data() {
    return {
      coins: "",
      price: ""
    };
  },
  methods: {
    async createBanner() {
      const data = {
        coins: this.coins,
        price: this.price
      };
      const res = await axios.post("http://localhost:5000/admin/coin", data, {
        headers: {
          "Content-Type": "application/json",
          admin_access_token: localStorage.getItem("token")
        }
      });
      if (res.data.success) {
        alert(res.data.message);
        this.coins = "";
        this.price = "";
        this.$router.push("/coin");
      } else {
        alert(res.data.message);
      }
    }
  },
  components: { Sidebar, Navbar }
};
</script>
<style >
</style>