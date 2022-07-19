<template >
  <div class="flex">
    <!-- sidebar start -->
    <Sidebar :show="show" @hideSidebar="hidebar" />
    <!-- content -->
    <div class="h-full w-full to-[#F5F5F5] from-white bg-gradient-to-r">
      <Navbar @sideBar="showNavBar" title="SubScription" />
      <div class="container mx-auto max-w-2xl">
        <router-link to="/subscription">
          <button
            class="bg-[#E27425] text-white rounded px-3 py-2 text-[19px] font-bold font-mulish my-4"
          >Go Back</button>
        </router-link>
      </div>
      <div class="bg-white rounded-md shadow my-5 container mx-auto max-w-2xl">
        <div
          class="bg-[#D7D8DB] rounded-t-md px-3 py-3 text-[19px] font-bold font-mulish"
        >Create Ads</div>
        <div class="bg-white px-4 py-3">
          <form @submit.prevent="createPackage">
            <div>
              <div
                class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-0 lg:gap-4"
              >
                <div class="my-2">
                  <label for="title" class="text-md block text-gray-700 font-bold mb-2">Title:</label>
                  <input
                    type="text"
                    class="border border-gray-400 rounded-md text-md font-semibold w-full py-2 px-3 outline-green-600 appearance-none"
                    placeholder="Enter Banner Title"
                    v-model="title"
                  />
                </div>
                <div class="my-2">
                  <label for="price" class="text-md block text-gray-700 font-bold mb-2">Price:</label>
                  <input
                    type="number"
                    v-model="price"
                    class="border border-gray-400 rounded-md text-md font-semibold w-full py-2 px-3 outline-green-600 appearance-none"
                    placeholder="Enter Price"
                  />
                </div>
              </div>
              <div class="my-2">
                <label for="price" class="text-md block text-gray-700 font-bold mb-2">Expired Date:</label>
                <input
                  type="date"
                  v-model="exp"
                  class="border border-gray-400 rounded-md text-md font-semibold w-full py-2 px-3 outline-green-600 appearance-none"
                  placeholder="Enter Expired Date"
                />
              </div>
              <div class="my-2">
                <label
                  for="images"
                  class="text-md block text-gray-700 font-bold mb-2"
                >Upload Images:</label>
                <input
                  type="file"
                  class="border outline-green-600 border-gray-400 rounded-md text-md font-semibold w-full py-2 px-3 appearance-none"
                  placeholder="Upload Image"
                  multiple
                  @change="onFileChange"
                />
              </div>
              <div class="my-2">
                <button
                  class="border border-gray-400 rounded-md font-bold bg-green-700 text-md text-white w-full py-2 px-3 appearance-none capitalize hover:bg-green-800"
                  type="submit"
                >Save</button>
              </div>
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
      title: "",
      price: "",
      image: "",
      exp: "",
      show: false
    };
  },
  methods: {
    showNavBar() {
      this.show = true;
    },
    hidebar() {
      this.show = false;
    },
    onFileChange(e) {
      this.image = e.target.files[0];
    },
    async createPackage() {
      const formdata = new FormData();
      formdata.append("title", this.title);
      formdata.append("price", this.price);
      formdata.append("expire_date", this.exp);
      formdata.append("icon", this.image);
      const res = await axios.post(
        "http://localhost:5000/admin/package/plan",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            admin_access_token: localStorage.getItem("token")
          }
        }
      );
      if (res.data.success) {
        alert(res.data.message);
        this.image = "";
        this.title = "";
        this.price = "";
        this.exp = "";
        this.$router.push("/subscription");
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