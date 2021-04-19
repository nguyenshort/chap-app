<template>
  <div
    class="flex antialiased h-screen overflow-hidden text-gray-800 bg-gray-100"
  >
    <div class="flex flex-row h-full w-full overflow-x-hidden">
      <div
        class="flex flex-col pb-8 pt-6 pl-6 pr-2 w-64 bg-white flex-shrink-0"
      >
        <div class="flex flex-row items-center h-12 w-full">
          <div
            class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </div>
          <div class="ml-2 font-bold text-2xl">QuickChat</div>
        </div>
        <div class="flex flex-col mt-8">
          <div class="flex flex-row items-center justify-between text-xs">
            <span class="font-bold">Ghim</span>
          </div>
          <lazy-sticky-room />
          <div class="flex flex-row items-center justify-between text-xs mt-6">
            <span class="font-bold">Đã Từng</span>
          </div>
          <div class="flex flex-col space-y-1 mt-4 -mx-2">
            <button
              class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
            >
              <div
                class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
              >
                H
              </div>
              <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
            </button>
          </div>
        </div>
      </div>
      <div class="w-full">
        <lazy-site-nav />
        <div class="pt-6 pr-6 pl-6" style="height: calc(100% - 4rem)">
          <div
            class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-white h-full p-4"
          >
            <nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>

<style></style>
