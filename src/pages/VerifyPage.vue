<template >
  <div class="bg-white px-4 py-7 rounded-md shadow my-4 mx-9">
    <div class="font-extrabold text-4xl text-center">Withdrawl Request Verfication</div>
    <div class="container mx-auto max-w-4xl bg-red-200 rounded-lg border border-red-500 mt-20">
      <div class="flex flex-col w-full items-center justify-center bg-grey-lighter p-20">
        <label
          class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue text-black"
        >
          <svg
            class="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
            />
          </svg>
          <span class="mt-2 text-base leading-normal">Select a file</span>
          <input type="file" class="hidden" />
        </label>
        <h1 class="mt-9 text-xl">file size megabyte 2mb maximum or less than</h1>
      </div>
    </div>
    <div class="flex justify-end container mx-auto max-w-4xl mt-4">
      <button
        class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
      >Verify</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "VerifyComp"
};
</script>
<style >
</style>