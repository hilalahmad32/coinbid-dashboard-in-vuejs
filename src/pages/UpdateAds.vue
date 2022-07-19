<template >
  <div class="flex">
    <!-- sidebar start -->
    <Sidebar :show="show" @hideSidebar="hidebar" />
    <!-- content -->
    <div class="h-full w-full to-[#F5F5F5] from-white bg-gradient-to-r">
      <Navbar @sideBar="showNavBar" title="Ads" />
      <div class="container mx-auto max-w-2xl">
        <router-link to="/ads">
          <button
            class="bg-[#E27425] text-white rounded px-3 py-2 text-[19px] font-bold font-mulish my-4"
          >Go Back</button>
        </router-link>
      </div>
      <div class="bg-white rounded-md shadow my-5 container mx-auto max-w-2xl">
        <div
          class="bg-[#D7D8DB] rounded-t-md px-3 py-3 text-[19px] font-bold font-mulish"
        >Update Ads</div>
        <div class="bg-white px-4 py-3">
          <form @submit.prevent="updateAds">
            <div
              class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-0 lg:gap-4"
            >
              <div class="my-2">
                <label for="title" class="text-md block text-gray-700 font-bold mb-2">Title:</label>
                <input
                  type="text"
                  class="border border-gray-400 rounded-2xl text-md font-semibold w-full py-2 px-6 outline-green-600 appearance-none"
                  placeholder="Enter Title"
                  v-model="title"
                />
              </div>
              <div class="my-2">
                <label for="price" class="text-md block text-gray-700 font-bold mb-2">Coins:</label>
                <input
                  type="text"
                  v-model="price"
                  class="border border-gray-400 rounded-2xl text-md font-semibold w-full py-2 px-6 outline-green-600 appearance-none"
                  placeholder="Enter  Coins"
                />
              </div>
            </div>
            <div class="my-2">
              <label for="package" class="text-md block text-gray-700 font-bold mb-2">Package:</label>
              <select
                class="border border-gray-400 rounded-md text-md font-semibold w-full py-2 px-3 outline-green-600 appearance-none"
                v-model="new_package"
              >
                <option>Select Packages</option>
                <option
                  class="flex justify-between items-center"
                  v-for="(pk, index) in packages"
                  :key="index"
                  :value="pk._id"
                >
                  {{pk.title}},
                  {{pk.price}} Price
                </option>
              </select>
              <input
                type="hidden"
                v-model="old_package"
                class="border border-gray-400 rounded-2xl text-md font-semibold w-full py-2 px-6 outline-green-600 appearance-none"
                placeholder
              />
            </div>
            <div class="my-2">
              <label for="images" class="text-md block text-gray-700 font-bold mb-2">Upload Images:</label>
              <input
                type="file"
                class="border outline-green-600 border-gray-400 rounded-2xl text-md font-semibold w-full py-2 px-6 appearance-none"
                placeholder="Upload Image"
                multiple
                @change="onFileChange"
              />
            </div>
            <span v-html="images" class="flex space-x-3"></span>
            <input type="hidden" v-model="old_image" />
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
      title: "",
      price: "",
      image: "",
      packages: [],
      video: "",
      old_image: "",
      images: "",
      new_package: "",
      old_package: "",
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
      this.image = e.target.files;
    },

    async getData() {
      const res = await (
        await fetch(
          `https://coinbid11.herokuapp.com/admin/ads/${this.$route.params.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              admin_access_token: localStorage.getItem("token")
            }
          }
        )
      ).json();
      console.log(res);
      if (res.success) {
        this.title = res.ads.title;
        this.price = res.ads.price;
        this.old_image = res.ads.images;
        this.old_package = res.ads.packages;
      }
      const data = JSON.parse(this.old_image);
      data.map(val => {
        this.images += `<img src="https://coinbid11.herokuapp.com/uploads/${val}" class="h-12 w-12" alt="" />`;
      });
    },
    async updateAds() {
      const formdata = new FormData();
      formdata.append("title", this.title);
      formdata.append("old_image", this.old_image);
      formdata.append("price", this.price);
      formdata.append("new_package", this.new_package);
      formdata.append("old_package", this.old_package);
      for (const i of Object.keys(this.image)) {
        formdata.append("images", this.image[i]);
      }
      const res = await axios.put(
        `https://coinbid11.herokuapp.com/admin/ads/${this.$route.params.id}`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            admin_access_token: localStorage.getItem("token")
          }
        }
      );
      console.log(res.data);
      if (res.data.success) {
        alert(res.data.message);
        this.image = "";
        this.title = "";
        this.price = "";
        this.old_image = "";
        this.$router.push("/ads");
      } else {
        alert(res.data.message);
      }
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
    }
  },
  components: { Sidebar, Navbar },
  mounted() {
    this.getData();
    this.getPackages();
  }
};
</script>
<style >
</style>