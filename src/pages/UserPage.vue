<template>
  <div class="bg-white rounded-md shadow mx-10 my-5">
    <table class="w-full">
      <thead class="bg-gray-300/50 px-3 py-4">
        <tr>
          <th class="text-left px-6 py-5">User Name</th>
          <th class="text-left px-6 py-5">Contact Number</th>
          <th class="text-left px-6 py-5">State</th>
          <th class="text-left px-6 py-5">District</th>
          <th class="text-left px-6 py-5">City</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in 4" :key="index" class="border-b">
        <tr>
          <td class="flex items-center px-6 py-5">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              class="w-12 h-12 rounded-full"
              alt
            />
            <span class="ml-4 text-md font-semibold font-mulish">Daily Recmard</span>
          </td>
          <td class="px-6 py-5">
            <span class="text-semibold">9123456789</span>
          </td>
          <td class="px-6 py-5">
            <span class="text-semibold">Andhra Pradesh</span>
          </td>
          <td class="px-6 py-5">
            <span class="text-semibold">Visakhapatnam</span>
          </td>
          <td class="px-6 py-5 flex items-center justify-between">
            <span class="text-semibold">Visakhapatnam</span>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="w-10 h-10 border rounded-full p-2"
              >
                <path
                  d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
                />
              </svg>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {};
</script>
<style >
</style>