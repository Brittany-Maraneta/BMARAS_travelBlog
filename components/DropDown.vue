<template>
  <div class="flex justify-center">
    <div class="relative inline-block text-left">
      <!-- Dropdown button -->
      <div>
        <button
          @click="toggleDropdown"
          type="button"
          class="bg-secondary hover:bg-tri text-white font-bold py-6 px-12 rounded-2xl mt-[18px] flex items-center"
        >
          <span class="mr-2">{{ selectedOption }}</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.707 12.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- Dropdown menu -->
      <div
        v-if="isOpen"
        class="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-secondary"
        style="left: 50%; transform: translateX(-50%)"
      >
        <div v-for="city in city" :key="city">
          <button
            @click="selectOption(city.city)"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            role="menuitem"
          >
            {{ city.city }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const selectedOption = ref("Choose a City");

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
};

const client = useSupabaseClient();
const { data: city } = await useAsyncData("city", async () => {
  try {
    let { data, error } = await client.from("city").select();
    return data;
  } catch (error) {
    console.error(error);
  }
});
</script>
