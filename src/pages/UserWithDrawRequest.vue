<template>
  <div class="flex">
    <!-- sidebar start -->
    <div
      class="lg:w-[400px] w-[300px] h-screen lg:block bg-white border-r-gray-500 border-r-2 lg:relative fixed z-40 top-0 left-0 duration-300 ease-in-out"
      :class="show ? 'block translate-x-0' : 'hidden'"
    >
      <div class="flex justify-center my-10">
        <img
          src="https://img.freepik.com/free-vector/dollar_53876-25498.jpg?size=338&ext=jpg&ga=GA1.2.428230215.1657184317"
          alt="logo"
          class="w-[150px] h-[120px]"
        />
      </div>
      <div>
        <ul>
          <router-link to="/dashboard">
            <li
              class="flex items-center my-3 py-6 px-6 mr-8 cursor-pointer rounded-r-full border-l-4 border-red-500 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 fill-red-500"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM280 292.7V88C280 74.75 269.3 64 256 64C242.7 64 232 74.75 232 88V292.7C208.5 302.1 192 325.1 192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 325.1 303.5 302.1 280 292.7zM144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176zM96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224zM416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288zM368 112C350.3 112 336 126.3 336 144C336 161.7 350.3 176 368 176C385.7 176 400 161.7 400 144C400 126.3 385.7 112 368 112z"
                />
              </svg>

              <span class="text-red-500 text-lg ml-4">Dashboard</span>
            </li>
          </router-link>
          <router-link to="/user">
            <li class="flex items-center my-2 py-6 px-6 mr-8 rounded-r-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 fill-red-500"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                />
              </svg>
              <span class="text-red-500 text-lg ml-4">Users</span>
            </li>
          </router-link>
          <router-link to="/request">
            <li class="flex items-center my-2 py-6 px-6 mr-8 rounded-r-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 fill-red-500"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                />
              </svg>
              <span class="text-red-500 text-lg ml-4">Withdrawal Requests</span>
            </li>
          </router-link>
          <router-link to="/request">
            <li class="flex items-center my-2 py-6 px-6 mr-8 rounded-r-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 fill-red-500"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                />
              </svg>
              <span class="text-red-500 text-lg ml-4">Withdrawal Posted</span>
            </li>
          </router-link>
          <router-link to="/request">
            <li class="flex items-center my-2 py-6 px-6 mr-8 rounded-r-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 fill-red-500"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                />
              </svg>
              <span class="text-red-500 text-lg ml-4">Subscriptions</span>
            </li>
          </router-link>
          <router-link to="/request">
            <li class="flex items-center my-2 py-6 px-6 mr-8 rounded-r-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 fill-red-500"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                />
              </svg>

              <span class="text-red-500 text-lg ml-4">Live Updates</span>
            </li>
          </router-link>
          <router-link to="/request">
            <li class="flex items-center my-2 py-6 px-6 mr-8 rounded-r-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 fill-red-500"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                />
              </svg>

              <span class="text-red-500 text-lg ml-4">Banner</span>
            </li>
          </router-link>
          <hr class="w-[200px] container mx-auto border-2 bg-gray-400" />
          <router-link to="/request">
            <li class="flex items-center my-2 py-6 px-6 mr-8 rounded-r-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 fill-red-500"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                />
              </svg>

              <span class="text-red-500 text-lg ml-4">Setting</span>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- content -->
    <div class="w-full">
      <div class="px-10 flex justify-between items-center w-full py-5 bg-white">
        <div class="flex items-center">
          <h1 class="font-bold text-xl leading-2 tracking-wide">Dashboard</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-5 lg:hidden block cursor-pointer"
            viewBox="0 0 448 512"
            @click="showNavBar"
          >
            <path
              d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
            />
          </svg>
        </div>
        <div class="flex items-center">
          <h1 class="font-semibold text-md leading-2 tracking-wide mr-4">Hilal Ahmad</h1>
          <img
            src="https://img.freepik.com/free-vector/farmer-using-agricultural-technology_53876-120543.jpg?size=338&ext=jpg&ga=GA1.2.428230215.1657184317"
            class="w-12 h-12 rounded-full border-2 border-gray-700 p-1"
            alt
          />
        </div>
      </div>
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
    </div>
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