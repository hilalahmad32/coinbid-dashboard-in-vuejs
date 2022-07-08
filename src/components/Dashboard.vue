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
      <div class="container mx-auto">
        <div class="mx-5 mt-10">
          <DashboardCard />
          <GraphCard />
          <WithDraw />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardCard from "./DashboardCard.vue";
import GraphCard from "./GraphCard.vue";
import WithDraw from "./WithDraw.vue";
export default {
  name: "DashboardComp",
  components: { DashboardCard, GraphCard, WithDraw }
};
</script>
<style>
</style>