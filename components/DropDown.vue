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
        class="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-tri"
        style="left: 50%; transform: translateX(-50%)"
      >
        <div v-for="city in city" :key="city">
          <template v-if="isDesiredCity(city.city)">
            <button
              @click="selectOption(city.city)"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-lightColor w-full text-left"
              role="menuitem"
            >
              {{ city.city }}
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>

  <!-- Dynamic area for city details -->
  <div class="mt-10">
    <div v-if="selectedCity === 'Calgary'">
      <!-- Change condition based on selected city -->
      <h2 class="text-4xl font-bold text-center">Calgary</h2>
      <p class="mt-2 text-center">
        Calgary is a city in the western Canadian province of Alberta. It's
        known for the Calgary Stampede, a massive outdoor rodeo, and festival.
      </p>
    </div>
    <div v-else-if="selectedCity === 'Vancouver'">
      <!-- Change condition based on selected city -->
      <h2 class="text-4xl font-bold text-center">
        Vancouver, British Columbia
      </h2>
      <p class="mt-2 text-center">
        Vancouver, a bustling west coast seaport in British Columbia, is among
        Canada's densest, most ethnically diverse cities.
      </p>
      <Vancouver />
    </div>
    <div v-if="selectedCity === 'Quebec City'">
      <!-- Change condition based on selected city -->
      <h2 class="text-4xl font-bold text-center">Quebec City</h2>
      <p class="mt-2 text-center">
        Quebec City, a UNESCO World Heritage site located in the heart of
        French-speaking Canada, captivates visitors with its rich history,
        cobblestone streets, and iconic landmarks such as the historic Château
        Frontenac.
      </p>
    </div>
    <div v-else-if="selectedCity === 'Victoria'">
      <!-- Change condition based on selected city -->
      <h2 class="text-4xl font-bold text-center">Victoria</h2>
      <p class="mt-2 text-center">
        Victoria, the capital city of British Columbia, Canada, is renowned for
        its charming blend of historic architecture, picturesque gardens, and
        stunning coastal views.
      </p>
    </div>
  </div>
  <div v-if="selectedCity === 'Toronto'">
    <!-- Change condition based on selected city -->
    <h2 class="text-4xl font-bold text-center">Toronto</h2>
    <p class="mt-2 text-center">
      Toronto, the vibrant and multicultural metropolis of Canada, is celebrated
      for its towering skyscrapers, diverse neighborhoods, world-class cuisine,
      and bustling arts and entertainment scene.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const selectedOption = ref("Choose a City");
const desiredCities = [
  "Calgary",
  "Vancouver",
  "Victoria",
  "Quebec City",
  "Toronto",
];
const selectedCity = ref("");

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
  selectedCity.value = option;
};

const isDesiredCity = (city) => {
  return desiredCities.includes(city);
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
