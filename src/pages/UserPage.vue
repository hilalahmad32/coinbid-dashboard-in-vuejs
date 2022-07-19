<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "../store";
import UpdateUser from "../components/UpdateUser.vue";
const store = useStore();
const drop = ref(false);

onMounted(() => {
  store.totalCountUser();
});

const deleteUser = id => {
  store.userDelete(id);
  store.totalCountUser();
};
// const showDrop = id => {
//   store.users.filter(val => {
//     if (val._id !== id) {
//       drop.value = false;
//     } else {
//       drop.value = true;
//     }
//   });
// };
</script>
<template>
  <div class="flex">
    <!-- sidebar start -->
    <Sidebar :show="show" @hideSidebar="hidebar" />
    <!-- content -->
    <div class="h-full w-full to-[#F5F5F5] from-white bg-gradient-to-r">
      <Navbar @sideBar="showNavBar" title="Users" />
      <div class="bg-white rounded-md shadow mx-10 my-5 overflow-y-scroll lg:overflow-y-hidden">
        <div>
          <table class="w-full">
            <thead class="bg-[#D7D8DB] px-3 py-4">
              <tr>
                <td class="text-left px-6 py-5">User Name</td>
                <td class="text-left px-6 py-5">Contact Number</td>
                <td class="text-left px-6 py-5">State</td>
                <td class="text-left px-6 py-5">District</td>
                <td class="text-left px-6 py-5">City</td>
                <td class="text-left px-6 py-5"></td>
              </tr>
            </thead>
            <tbody v-for="(user, index) in store.users" :key="index" class="border-b">
              <tr>
                <td
                  class="text-[16px] font-[700] text-gray-900 whitespace-nowrap flex items-center px-6 py-5"
                >
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    class="w-8 h-8 rounded-full"
                    alt
                  />
                  <span class="ml-4 text-[16px] font-semibold font-mulish">{{user.name}}</span>
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                >{{user.mobile}}</td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                >Andhra Pradesh</td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                >{{user.city}}</td>
                <td
                  class="py-4 px-6 mt-0 text-sm font-medium text-gray-900 whitespace-nowrap"
                >{{user.state}}</td>
                <td class="relative">
                  <router-link :to="'/edit/users/'+user._id">
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
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 fill-red-500 hover:fill-red-700"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      @click="deleteUser(user._id)"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="w-7 h-7 border rounded-full p-1 cursor-pointer"
                    @click="showDrop(user._id)"
                    id="user._id"
                  >
                    <path
                      d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
                    />
                  </svg>
                  <div
                    class="absolute bg-white right-16 shadow-md rounded-lg top-5 z-10 space-y-2"
                    :class="drop ? 'block' :'hidden' "
                  >
                    <h1 class="text-xl font-mulish m-3 px-3 py-1 w-52 bg-[#E27425]">Edit</h1>
                    <h1 class="text-xl font-mulish m-3 px-3 py-1 w-52 bg-[#E27425]">View</h1>
                    <h1 class="text-xl font-mulish m-3 px-3 py-1 w-52 bg-[#E27425]">Delete</h1>
                  </div>-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import { useStore } from "../store";
import { onMounted } from "vue";
export default {
  name: "UserPage",
  components: { Sidebar, Navbar },
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
    },
    showNavBar() {
      this.show = true;
    },
    hidebar() {
      this.show = false;
    }
  }
};
</script>
<style >
</style>