<template>
  <div>
    <!-- Navigation bar -->
    <nav
      class="fixed top-0 left-0 w-full bg-[#977A71] text-white p-4 z-50 opacity-100 flex justify-between items-center"
    >
      <div class="flex items-center">
        <button
          @click="toggleMenu"
          class="p-2 text-white rounded-lg hover:bg-[#F6EEEE] hover:text-black"
        >
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
      </div>

      <!-- Logo -->
      <div class="flex-grow flex justify-center items-center ml-24">
        <NuxtLink to="/">
          <img src="/public/logo.svg" alt="logo" class="w-20 h-20" />
        </NuxtLink>
      </div>

      <!-- Search input -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search"
        class="ml-2 p-2 rounded-lg text-black"
      />

      <NuxtLink :to="`/explore?query=${searchQuery}`" class="flex items-center">
        <button
          class="bg-secondary hover:bg-lightColor hover:text-black text-white font-bold py-2 px-3 rounded-2xl font-mono ml-3"
        >
          Go
        </button>
      </NuxtLink>
    </nav>

    <!-- Side menu -->
    <div
      class="fixed top-20 left-0 w-64 h-full bg-[#977A71] text-white p-4 z-40 transform transition-transform ease-in-out duration-300 opacity-100 font-mono"
      :class="{ '-translate-x-full': !isOpen }"
    >
      <ul class="pt-4 space-y-4">
        <li>
          <NuxtLink
            to="/"
            class="block px-4 py-2 rounded-lg hover:bg-[#F6EEEE] hover:text-black"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/explore"
            class="block px-4 py-2 rounded-lg hover:bg-[#F6EEEE] hover:text-black"
            >Explore</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="block px-4 py-2 rounded-lg hover:bg-[#F6EEEE] hover:text-black"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="block px-4 py-2 rounded-lg hover:bg-[#F6EEEE] hover:text-black"
            >Contact</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/login"
            class="block px-4 py-2 rounded-lg hover:bg-[#F6EEEE] hover:text-black"
            >Login</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const isOpen = ref(false);
const darkMode = ref(false);
const searchQuery = ref("");
const router = useRouter();

// Function to toggle the side menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Function to clear the search query when input is clicked
const clearSearch = () => {
  searchQuery.value = "";
};

watch(router.currentRoute, () => {
  // Close the menu when route changes
  isOpen.value = false;
});
</script>

<style scoped></style>
