<template>
  <div>
    <nav class="fixed top-0 left-0 w-full bg-[#977A71] text-white p-4 z-10">
      <button @click="toggleMenu" class="block px-3 py-1 text-white">
        <svg
          class="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </nav>

    <div
      class="lg:w-64 lg:bg-[#977A71] lg:flex lg:flex-col lg:justify-between lg:fixed lg:h-full lg:pt-0 lg:overflow-y-auto lg:pt-4 lg:pb-8 lg:shadow-lg lg:z-0 lg:transition-all lg:duration-300"
      :class="{ '-left-64': !isOpen, 'left-0': isOpen }"
      style="margin-top: 64px"
    >
      <nav class="lg:overflow-y-auto">
        <ul class="pt-4 lg:flex lg:flex-col lg:items-stretch lg:space-y-1">
          <li>
            <a
              href="#"
              class="block lg:px-4 py-2 lg:py-1 lg:hover:bg-[#F6EEEE] lg:rounded lg:text-white hover:text-black"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block lg:px-4 py-2 lg:py-1 lg:hover:bg-[#F6EEEE] lg:rounded lg:text-white hover:text-black"
              >Explore</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block lg:px-4 py-2 lg:py-1 lg:hover:bg-[#F6EEEE] lg:rounded lg:text-white hover:text-black"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block lg:px-4 py-2 lg:py-1 lg:hover:bg-[#F6EEEE] lg:rounded lg:text-white hover:text-black"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.lg\:hidden {
  display: none;
}
</style>
