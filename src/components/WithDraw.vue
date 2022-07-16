 <template >
  <div class="mb-10">
    <div class="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4">
      <div class="bg-white px-4 py-7 rounded-lg shadow">
        <div class="flex justify-between items-center">
          <div>
            <div class="font-bold font-mulish text-[19px] tracking-[0.4px] my-3">WITHDRAW REQUESTS</div>
          </div>
          <div class="font-thin text-md text-[#3751FF]">View details</div>
        </div>
        <span class="font-semibold font-mulish text-[#9FA2B4] text-[16px] mr-1">Group:</span>
        <span class="ml-2">Support</span>
        <div class="overflow-x-scroll md:w-full">
          <table class="my-2 w-full border-t" v-for="(index) in 4" :key="index">
            <tr>
              <td class="flex items-center py-4">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  class="w-9 h-9 rounded-full"
                  alt
                />
                <span
                  class="ml-4 text-[14px] leading-[20px] font-semibold font-mulish"
                >Daily Recmard</span>
              </td>
              <td>
                <span class="text-gray-400">Bank of India</span>
              </td>
              <td>
                <span class="text-gray-400">4238</span>
              </td>
              <td>
                <span class="text-gray-600 px-6 py-1 rounded-full bg-green-300">Paid</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="bg-white px-4 py-7 rounded-lg shadow">
        <div class="flex justify-between items-center">
          <div>
            <div class="font-bold font-mulish text-[19px] tracking-[0.4px] my-3">TOP ADS WATCHED</div>
          </div>
          <div class="font-thin text-md text-blue-600">View details</div>
        </div>
        <div class="text-center place-items-center">No Ads Available to show</div>
      </div>
    </div>
  </div>
</template>
 <script>
export default {};
</script>
 <style >
</style>