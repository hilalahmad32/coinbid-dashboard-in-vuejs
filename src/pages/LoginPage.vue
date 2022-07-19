<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";

const store = useStore();
const router = useRouter();
const username = ref("");
const password = ref("");

const submit = async () => {
  const data = {
    username: username.value,
    password: password.value
  };
  await store.adminLogin(data);
  if (store.response.success) {
    alert(store.response.message);
    localStorage.setItem("token", store.response.token);
    router.push("/dashboard");
  } else {
    alert(store.response.message);
  }
};
</script>

<template >
  <div class="bg-red-400 h-screen flex items-center w-full">
    <div class="container mx-auto max-w-md">
      <div class="bg-white rounded-md py-6">
        <h1 class="text-3xl font-extrabold text-center">Admin Login</h1>
        <div class="px-5">
          <form @submit.prevent="submit">
            <div class="my-4">
              <label for="username" class="text-md block text-gray-700 font-bold mb-2">Username:</label>
              <input
                type="text"
                v-model="username"
                class="border border-gray-400 rounded-lg text-md font-semibold w-full py-2 px-4 outline-green-600 appearance-none"
                placeholder="Enter Username"
              />
            </div>
            <div class="my-6">
              <label for="username" class="text-md block text-gray-700 font-bold mb-2">Password:</label>
              <input
                type="password"
                v-model="password"
                class="border outline-green-600 border-gray-400 rounded-lg text-md font-semibold w-full py-2 px-4 appearance-none"
                placeholder="Enter Password"
              />
            </div>
            <div class="my-7">
              <button
                class="border border-gray-400 rounded-lg font-bold bg-green-700 text-md text-white w-full py-2 px-6 appearance-none capitalize hover:bg-green-800"
                type="submit"
              >{{store.isloading ? "Loading ....":'Login'}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage"
};
</script>
<style >
</style>