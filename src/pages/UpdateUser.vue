<template >
  <div class="flex">
    <!-- sidebar start -->
    <Sidebar :show="show" @hideSidebar="hidebar" />
    <!-- content -->
    <div class="h-full w-full to-[#F5F5F5] from-white bg-gradient-to-r">
      <Navbar @sideBar="showNavBar" title="Users" />
      <div class="container mx-auto max-w-2xl">
        <router-link to="/user">
          <button
            class="bg-[#E27425] text-white rounded px-3 py-2 text-[19px] font-bold font-mulish my-4"
          >Go Back</button>
        </router-link>
      </div>
      <div class="bg-white rounded-md shadow my-5 container mx-auto max-w-2xl">
        <div
          class="bg-[#D7D8DB] rounded-t-md px-3 py-3 text-[19px] font-bold font-mulish"
        >Update User</div>
        <div class="bg-white px-4 py-3">
          <form @submit.prevent="updateUser">
            <div
              class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-0 lg:gap-4"
            >
              <div class="my-2">
                <label for="name" class="text-md block text-gray-700 font-bold mb-2">Name:</label>
                <input
                  type="text"
                  class="border border-gray-400 rounded-2xl text-md font-semibold w-full py-2 px-6 outline-green-600 appearance-none"
                  placeholder="Enter Name"
                  v-model="name"
                />
              </div>
              <div class="my-2">
                <label for="email" class="text-md block text-gray-700 font-bold mb-2">Email:</label>
                <input
                  type="text"
                  v-model="email"
                  class="border border-gray-400 rounded-2xl text-md font-semibold w-full py-2 px-6 outline-green-600 appearance-none"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div
              class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-0 lg:gap-4"
            >
              <div class="my-2">
                <label
                  for="contact"
                  class="text-md block text-gray-700 font-bold mb-2"
                >Contact Number:</label>
                <input
                  type="text"
                  class="border border-gray-400 rounded-2xl text-md font-semibold w-full py-2 px-6 outline-green-600 appearance-none"
                  placeholder="Enter Contact Number"
                  v-model="mobile"
                />
              </div>
              <div class="my-2">
                <label for="state" class="text-md block text-gray-700 font-bold mb-2">State:</label>
                <input
                  type="text"
                  class="border border-gray-400 rounded-2xl text-md font-semibold w-full py-2 px-6 outline-green-600 appearance-none"
                  placeholder="Enter State"
                  v-model="state"
                />
              </div>
            </div>
            <div class="my-2">
              <label for="city" class="text-md block text-gray-700 font-bold mb-2">City:</label>
              <input
                type="text"
                class="border outline-green-600 border-gray-400 rounded-2xl text-md font-semibold w-full py-2 px-6 appearance-none"
                placeholder="Enter City"
                v-model="city"
              />
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
export default {
  data() {
    return {
      name: "",
      email: "",
      state: "",
      city: "",
      profile: "",
      mobile: "",
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
    async getUser() {
      const res = await (
        await fetch(
          `https://coinbid11.herokuapp.com/admin/edit/users/${this.$route.params.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              admin_access_token: localStorage.getItem("token")
            }
          }
        )
      ).json();
      if (res.success) {
        this.name = res.users.name;
        this.email = res.users.email;
        this.state = res.users.state;
        this.city = res.users.city;
        this.profile = res.users.profile;
        this.mobile = res.users.mobile;
      }
    },
    async updateUser() {
      const data = {
        name: this.name,
        email: this.email,
        state: this.state,
        city: this.city,
        profile: this.profile,
        mobile: this.mobile
      };
      const res = await (
        await fetch(
          `https://coinbid11.herokuapp.com/admin/update/users/${this.$route.params.id}`,
          {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
              admin_access_token: localStorage.getItem("token")
            }
          }
        )
      ).json();
      if (res.success) {
        alert(res.message);
        this.name = "";
        this.email = "";
        this.state = "";
        this.city = "";
        this.profile = "";
        this.mobile = "";
        this.$router.push("/user");
      }
    }
  },
  mounted() {
    this.getUser();
  },
  components: { Sidebar, Navbar }
};
</script>
<style>
</style>