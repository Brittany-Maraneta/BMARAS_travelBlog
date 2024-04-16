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
          <span class="mr-2 font-mono">{{ selectedOption }}</span>
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
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-lightColor w-full text-left font-mono"
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
      <h2 class="text-5xl font-bold text-center font-display2">
        Calgary, Alberta
      </h2>
      <p class="mt-2 max-w-4xl mx-auto text-center font-display text-xl">
        Calgary is a city in the western Canadian province of Alberta. It's
        known for the Calgary Stampede, a massive outdoor rodeo, and festival.
      </p>
      <Card citySelected="Calgary" />
    </div>

    <div v-else-if="selectedCity === 'Vancouver'">
      <h2 class="text-5xl font-bold text-center font-display2">
        Vancouver, British Columbia
      </h2>
      <p class="mt-2 max-w-4xl mx-auto text-center font-display text-xl">
        Vancouver, a bustling west coast seaport in British Columbia, is among
        Canada's densest, most ethnically diverse cities.
      </p>
      <Card citySelected="Vancouver" />
    </div>

    <div v-if="selectedCity === 'Quebec City'">
      <h2 class="text-5xl font-bold text-center font-display2">Quebec City</h2>
      <p class="mt-2 max-w-4xl mx-auto text-center font-display text-xl">
        Quebec City, a UNESCO World Heritage site located in the heart of
        French-speaking Canada, captivates visitors with its rich history,
        cobblestone streets, and iconic landmarks such as the historic Château
        Frontenac.
      </p>
      <Card citySelected="Quebec City" />
    </div>

    <div v-else-if="selectedCity === 'Victoria'">
      <h2 class="text-5xl font-bold text-center font-display2">Victoria</h2>
      <p class="mt-2 max-w-4xl mx-auto text-center font-display text-xl">
        Victoria, the capital city of British Columbia, Canada, is renowned for
        its charming blend of historic architecture, picturesque gardens, and
        stunning coastal views.
      </p>
      <Card citySelected="Victoria" />
    </div>
  </div>

  <div v-if="selectedCity === 'Toronto'">
    <h2 class="text-5xl font-bold text-center font-display2">
      Toronto, Ontario
    </h2>
    <p class="mt-2 max-w-4xl mx-auto text-center font-display text-xl">
      Toronto, the vibrant and multicultural metropolis of Canada, is celebrated
      for its towering skyscrapers, diverse neighborhoods, world-class cuisine,
      and bustling arts and entertainment scene.
    </p>
    <Card citySelected="Toronto" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  citySearched: {
    required: true,
  },
});

let citySearched = ref(props.citySearched);

const isOpen = ref(false);
const selectedOption = ref("Choose a City");
const desiredCities = [
  "Calgary",
  "Vancouver",
  "Victoria",
  "Quebec City",
  "Toronto",
];
let selectedCity = ref("");
console.log("Debug", citySearched);
if (citySearched != null) {
  selectedCity = citySearched;
}

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

<style scoped>
.font-display {
  font-family: "Raleway";
}

.font-display2 {
  font-family: "Lobster";
}
</style>
