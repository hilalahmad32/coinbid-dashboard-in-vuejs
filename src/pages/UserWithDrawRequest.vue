<template>
  <div class="bg-white rounded-md shadow mx-10 my-5">
    <div class="flex justify-between items-center px-4 py-4">
      <div class="relative">
        <button
          class="flex items-center px-6 py-2.5 bg-green-600 leading-tight text-white font-medium text-lg uppercase rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="dropdown1"
        >
          <span class="text-white font-medium text-lg">Status</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 ml-5"
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
        <div v-if="drop" class="bg-white shadow-md absolute w-[350px] top-16 left-0">
          <div class="flex justify-between items-center py-3 px-4">
            <h1 class="text-xl text-bold">Status</h1>
            <h1 class="text-md text-red-600 text-medium">Clear</h1>
          </div>
          <div class="my-3 mx-10">
            <div class="bg-gray-200 flex items-center justify-between py-2 px-3 rounded-xl">
              <h1 class="bg-white py-3 px-6 rounded-lg">Include</h1>
              <h1>Exclude</h1>
            </div>
            <div class="my-4">
              <h1
                class="p-3 my-2 cursor-pointer flex items-center justify-between rounded-md bg-green-600/25"
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
                class="p-3 my-2 cursor-pointer flex items-center justify-between rounded-md hover:bg-red-600/25"
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
                class="p-3 my-2 cursor-pointer flex items-center justify-between rounded-md bg-yellow-600/25"
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
                class="p-3 my-2 cursor-pointer flex items-center justify-between rounded-md hover:bg-green-600/25"
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
          class="flex items-center px-4 py-1 bg-gray-300 leading-tight text-black font-medium text-sm uppercase rounded-full shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out relative"
          @click="dropdown2"
        >
          <span class="text-black font-medium text-sm">Sort By</span>
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
        <div v-if="drop1" class="bg-white shadow-md absolute w-[350px] top-14 left-[-220px]">
          <div class="my-3 mx-10">
            <div class="my-4">
              <h1
                class="p-3 my-2 cursor-pointer flex items-center justify-between rounded-md bg-green-600/25"
              >
                <span>By Name</span>
              </h1>
              <h1
                class="p-3 my-2 cursor-pointer flex items-center justify-between rounded-md hover:bg-red-600/25"
              >
                <span>By Bank Name</span>
              </h1>
              <h1
                class="p-3 my-2 cursor-pointer flex items-center justify-between rounded-md hover:bg-yellow-600/25"
              >
                <span>By Account Number</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="w-full">
      <thead class="bg-gray-300/50 px-3 py-4">
        <tr>
          <th class="text-left px-6 py-5">User Name</th>
          <th class="text-left px-6 py-5">Bank Name</th>
          <th class="text-left px-6 py-5">Account Number</th>
          <th class="text-left px-6 py-5">IFSC Code</th>
          <th class="text-left px-6 py-5">Amount</th>
          <th class="text-left px-6 py-5">Status</th>
        </tr>
      </thead>
      <tbody class="border-b" v-for="(item, index) in 3" :key="index">
        <tr>
          <td class="flex items-center px-6 py-5">
            <input
              type="radio"
              class="mr-4 form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
            />
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              class="w-12 h-12 rounded-full"
              alt
            />
            <span class="ml-4 text-md font-semibold font-mulish">Daily Recmard</span>
          </td>
          <td class="px-6 py-5">
            <span class="text-semibold">State Bank of india</span>
          </td>
          <td class="px-6 py-5">
            <span class="text-semibold">24959668586</span>
          </td>
          <td class="px-6 py-5">
            <span class="text-semibold">UIGHOKRG</span>
          </td>
          <td class="px-6 py-5">
            <span class="text-semibold">20500</span>
          </td>
          <td>
            <span class="text-gray-600 px-6 py-1 rounded-full bg-green-300">Paid</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "UserWithDrawRequest",
  data() {
    return {
      drop: false,
      drop1: false
    };
  },
  methods: {
    dropdown1() {
      this.drop = !this.drop;
    },
    dropdown2() {
      this.drop1 = !this.drop1;
    }
  }
};
</script>
<style >
</style>