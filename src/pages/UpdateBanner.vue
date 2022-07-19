<template >
  <div class="flex">
    <!-- sidebar start -->
    <Sidebar :show="show" @hideSidebar="hidebar" />
    <!-- content -->
    <div class="h-full w-full to-[#F5F5F5] from-white bg-gradient-to-r">
      <Navbar @sideBar="showNavBar" title="Ads" />
      <div class="container mx-auto max-w-2xl">
        <router-link to="/banner">
          <button
            class="bg-[#E27425] text-white rounded px-3 py-2 text-[19px] font-bold font-mulish my-4"
          >Go Back</button>
        </router-link>
      </div>
      <div class="bg-white rounded-md shadow my-5 container mx-auto max-w-2xl">
        <div
          class="bg-[#D7D8DB] rounded-t-md px-3 py-3 text-[19px] font-bold font-mulish"
        >Update Banner</div>
        <div class="bg-white px-4 py-3">
          <form @submit.prevent="updateBanner">
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
            <img :src="'http://localhost:5000/uploads/'+old_image" class="h-12 w-12" alt />
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
      old_image: "",
      new_image: "",
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
      this.new_image = e.target.files[0];
    },

    async getData() {
      const res = await (
        await fetch(
          `http://localhost:5000/admin/banner/${this.$route.params.id}`,
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
        this.old_image = res.banners.banner;
      }
    },
    async updateBanner() {
      const formdata = new FormData();
      formdata.append("old_image", this.old_image);
      formdata.append("image", this.new_image);
      const res = await axios.put(
        `http://localhost:5000/admin/banner/${this.$route.params.id}`,
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
        this.old_image = "";
        this.$router.push("/banner");
      } else {
        alert(res.data.message);
      }
    }
  },
  components: { Sidebar, Navbar },
  mounted() {
    this.getData();
  }
};
</script>
<style >
</style>