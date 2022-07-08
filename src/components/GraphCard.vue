<template >
  <div class="bg-white px-4 py-7 rounded-md shadow my-5">
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <div class="col-span-2 w-full">
        <div class="font-semibold text-2xl mb-3">Ads Watch Average on Users</div>
        <div>
          <apexchart type="line" height="400" :options="options" :series="series"></apexchart>
        </div>
      </div>
      <div class="text-center">
        <div class="my-3">
          <div class="font-bold text-md font-mulish text-gray-400">Ads Watched Users</div>
          <div class="font-bold text-2xl my-3 font-mulish">449</div>
        </div>
        <div class="my-9">
          <div class="font-bold text-md font-mulish text-gray-400">Spend Amount all users</div>
          <div class="font-bold text-2xl my-3 font-mulish">Rs.1030050600</div>
        </div>
        <div class="my-9">
          <div class="font-bold text-md font-mulish text-gray-400">Average first response time</div>
          <div class="font-bold text-2xl my-3 font-mulish">33m</div>
        </div>
        <div class="my-9">
          <div class="font-bold text-md font-mulish text-gray-400">Average response time</div>
          <div class="font-bold text-2xl my-3 font-mulish">3h 8m</div>
        </div>
        <div class="my-9">
          <div class="font-bold text-md font-mulish text-gray-400">Resolution within SLA</div>
          <div class="font-bold text-2xl my-3 font-mulish">94%</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "GraphCard",
  data: function() {
    return {
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
};
</script>
<style >
</style>