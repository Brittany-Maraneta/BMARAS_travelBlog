<template>
  <div>
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
        <button @click="toggleMode" class="ml-2 text-white">
          <span v-if="!darkMode">🌞</span>
          <span v-else>🌜</span>
        </button>
      </div>

      <img
        src="/public/logo.svg"
        alt="logo"
        width="75"
        height="50"
        class="flex-grow text-center w-6 h-11"
      />

      <button>
        <NuxtLink
          to="/login"
          class="block px-4 py-2 rounded-lg hover:bg-[#F6EEEE] hover:text-black font-bold"
          >Sign In
        </NuxtLink>
      </button>
    </nav>

    <div
      class="fixed top-20 left-0 w-64 h-full bg-[#977A71] text-white p-4 z-40 transform transition-transform ease-in-out duration-300 opacity-100"
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
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const isOpen = ref(false);
const darkMode = ref(false);
const router = useRouter();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const toggleMode = () => {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

onMounted(() => {
  isOpen.value = false;
});

router.afterEach(() => {
  isOpen.value = false;
});
</script>

<style>
.dark {
  background-color: #111;
  color: white;
}
</style>
