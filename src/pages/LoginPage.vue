<template >
    <div class="bg-red-400 h-screen flex items-center w-full">
        <div class="container mx-auto max-w-md">
        <div class="bg-white rounded-md py-6">
           <h1 class="text-3xl font-extrabold text-center">
            Admin Login
           </h1>
           <div class="px-5">
            <form action="">
               <div class="my-4">
                 <label for="username" class="text-xl block text-gray-700 font-bold mb-2">Username: </label>
                <input type="text" name="" id="" class="border border-gray-400 rounded-2xl text-xl font-semibold  w-full py-3 px-6 outline-green-600 appearance-none" placeholder="Enter Username">
               </div>
               <div class="my-6">
                 <label for="username" class="text-xl block text-gray-700 font-bold mb-2">Password: </label>
                <input type="text" name="" id="" class="border outline-green-600  border-gray-400 rounded-2xl  text-xl font-semibold  w-full py-3 px-6 appearance-none" placeholder="Enter Password">
               </div>
               <div class="my-7">
                 <button  class="border border-gray-400 rounded-full font-bold  bg-green-700 text-xl text-white w-full py-3  px-6 appearance-none capitalize hover:bg-green-800" >Sign Up</button>
               </div>
            </form>
           </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'LoginPage'
}
</script>
<style >
    
</style>