<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "../store";
const store = useStore();

onMounted(() => {
  store.getBank();
  store.banks;
});

const approved = async id => {
  const res = await (
    await fetch(`https://coinbid11.herokuapp.com/admin/withdraws/request/${id}`, {
      method: "PUT",
      headers: {
        admin_access_token: localStorage.getItem("token")
      }
    })
  ).json();
  if (res.success) {
    alert("Request Approved Successfully");
    store.getBank();
    store.banks;
  }
};

// const deleteUser = id => {
//   store.userDelete(id);
//   store.getBank();
// };
</script>

<template>
  <div class="flex">
    <!-- sidebar start -->
    <Sidebar :show="show" @hideSidebar="hidebar" />
    <!-- content -->
    <div class="h-full w-full to-[#F5F5F5] from-white bg-gradient-to-r">
      <Navbar @sideBar="showNavBar" title="WithDraw Request" />
      <div class="bg-white rounded-md shadow mx-10 my-5">
        <div class="flex justify-between items-center px-4 py-4">
          <div class="relative">
            <button
              class="flex items-center px-3 py-2 bg-[#009D6C] leading-tight text-white font-medium text-[16px] uppercase rounded-xl shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              @click="dropdown1"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 18"
                fill="none"
                class="mr-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM5 10V14H7V10H5ZM9 4V14H11V4H9ZM13 7V14H15V7H13Z"
                  fill="white"
                />
              </svg>

              <span class="text-white font-medium text-md">Status</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 ml-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div v-if="drop" class="bg-white rounded-xl shadow-md absolute w-[350px] top-14 left-0">
              <div class="flex justify-between items-center py-3 px-4">
                <h1 class="text-xl font-bold">Status</h1>
                <h1 class="text-md text-[#E27425] text-medium">Clear</h1>
              </div>
              <div class="mx-2 my-1">
                <div class="bg-gray-200 flex items-center justify-around py-2 rounded-xl">
                  <h1 class="bg-white py-2 px-10 rounded-lg">Include</h1>
                  <h1>Exclude</h1>
                </div>
                <div class="my-4">
                  <h1
                    class="p-3 my-1 cursor-pointer flex items-center justify-between rounded-md bg-green-600/25"
                  >
                    <span>Pending</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-green-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </h1>
                  <h1
                    class="p-3 my-1 cursor-pointer flex items-center justify-between rounded-md hover:bg-red-600/25"
                  >
                    <span>Paid</span>
                    <span class="hover:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 hidden fill-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </h1>
                  <h1
                    class="p-3 my-1 cursor-pointer flex items-center justify-between rounded-md bg-yellow-600/25"
                  >
                    <span>Unpaid</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 fill-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </h1>
                  <h1
                    class="p-3 my-1 cursor-pointer flex items-center justify-between rounded-md hover:bg-green-600/25"
                  >
                    <span>Pending</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 hidden fill-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <button
              class="flex items-center px-4 py-1 bg-[#F5F5F5] leading-tight text-black font-medium text-sm uppercase rounded-full shadow-md hover:bg-[#F5F5F5] hover:shadow-lg focus:bg-[#F5F5F5] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out relative"
              @click="dropdown2"
            >
              <span class="text-black font-mulish font-medium text-sm">Sort By</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              v-if="drop1"
              class="bg-white rounded-lg shadow-md absolute w-[300px] top-14 left-[-170px]"
            >
              <div class="my-1 mx-2">
                <div class="my-1">
                  <h1
                    class="p-3 my-1 cursor-pointer flex items-center justify-between rounded-md bg-green-600/25"
                  >
                    <span>By Name</span>
                  </h1>
                  <h1
                    class="p-3 my-1 cursor-pointer flex items-center justify-between rounded-md hover:bg-red-600/25"
                  >
                    <span>By Bank Name</span>
                  </h1>
                  <h1
                    class="p-3 my-1 cursor-pointer flex items-center justify-between rounded-md hover:bg-yellow-600/25"
                  >
                    <span>By Account Number</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overflow-y-scroll lg:overflow-y-hidden">
          <table class="w-full">
            <thead class="bg-[#D7D8DB] px-3 py-4">
              <tr>
                <td class="text-left px-6 py-5">User Name</td>
                <td class="text-left px-6 py-5">Bank Name</td>
                <td class="text-left px-6 py-5">Account Number</td>
                <td class="text-left px-6 py-5">IFSC Code</td>
                <td class="text-left px-6 py-5">Amount</td>
                <td class="text-left px-6 py-5">Status</td>
              </tr>
            </thead>
            <tbody v-for="(bank, index) in store.banks" :key="index" class="border-b">
              <tr>
                <td
                  class="text-[16px] font-[700] text-gray-900 whitespace-nowrap flex items-center px-6 py-5"
                >
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    class="w-8 h-8 rounded-full"
                    alt
                  />
                  <span class="ml-4 text-[16px] font-semibold font-mulish">{{bank.users.name}}</span>
                </td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                >{{bank.bank_name}}</td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                >{{bank.account_number}}</td>
                <td
                  class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                >{{bank.ifsc_code}}</td>
                <td
                  class="py-4 px-6 mt-0 text-sm font-medium text-gray-900 whitespace-nowrap"
                >{{bank.amount}}</td>
                <td>
                  <span
                    @click="approved(bank._id)"
                    class="px-6 py-1 rounded-full bg-[#E0FFEE]"
                    v-if="bank.status == 'pending'"
                    :class="bank.status == 'pending'?'bg-red-600/25':''"
                  >Pending</span>
                  <span
                    @click="approved(bank._id)"
                    class="text-[#439B15] px-6 py-1 rounded-full bg-[#E0FFEE]"
                    v-if="bank.status == 'Approved'"
                  >Paid</span>
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
export default {
  name: "UserWithDrawRequest",
  components: { Sidebar, Navbar },
  data() {
    return {
      drop: false,
      drop1: false,
      show: false
    };
  },
  methods: {
    dropdown1() {
      this.drop = !this.drop;
      this.drop1 = false;
    },
    dropdown2() {
      this.drop1 = !this.drop1;
      this.drop = false;
    },
    showNavBar() {
      this.show = true;
    },
    hidebar() {
      this.show = false;
    }
    // async getRequest() {
    //   const res = await (
    //     await fetch("https://coinbid11.herokuapp.com/admin/banks", {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         admin_access_token: localStorage.getItem("token")
    //       }
    //     })
    //   ).json();
    //   console.log(res);
    //   if (res.success) {
    //     this.banks = res.banks;
    //   }
    // }
  }
  // mounted() {
  //   this.getRequest();
  // }
};
</script>
<style >
</style>