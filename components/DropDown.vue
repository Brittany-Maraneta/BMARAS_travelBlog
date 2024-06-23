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
  <div v-if="selectedCity === 'Edmonton'">
    <h2 class="text-5xl font-bold text-center font-display2">
      Edmonton, Alberta
    </h2>
    <p class="mt-2 max-w-4xl mx-auto text-center font-display text-xl">
      Edmonton, the vibrant capital of Alberta, is known for its rich cultural
      scene, picturesque river valley, and vibrant festivals.
    </p>
    <Card citySelected="Edmonton" />
  </div>
  <div v-if="selectedCity === 'Montreal'">
    <h2 class="text-5xl font-bold text-center font-display2">
      Montreal, Quebec
    </h2>
    <p class="mt-2 max-w-4xl mx-auto text-center font-display text-xl">
      Montreal, in Quebec, Canada, is a vibrant city blending history,
      architecture, and diverse culture. Wander Old Montreal's cobblestone
      streets, visit iconic landmarks like Notre-Dame Basilica, and savor the
      city's renowned culinary scene. With bustling nightlife and cultural
      offerings, Montreal offers an unforgettable urban experience.
    </p>
    <Card citySelected="Montreal" />
  </div>
  <div v-if="selectedCity === 'Saskatoon'">
    <h2 class="text-5xl font-bold text-center font-display2">
      Saskatoon, Saskatchewan
    </h2>
    <p class="mt-2 max-w-4xl mx-auto text-center font-display text-xl">
      Saskatoon, set along the picturesque South Saskatchewan River,
      harmoniously blends urban sophistication with prairie serenity. This
      vibrant city boasts a rich tapestry of culture, from Indigenous heritage
      sites to diverse culinary offerings, all set amidst stunning natural
      landscapes. With its welcoming atmosphere and diverse attractions,
      Saskatoon promises an unforgettable experience that captivates the senses
      and celebrates the essence of Saskatchewan.
    </p>
    <Card citySelected="Saskatoon" />
  </div>
  <div v-if="selectedCity === 'Regina'">
    <h2 class="text-5xl font-bold text-center font-display2">
      Regina, Saskatchewan
    </h2>
    <p class="mt-2 max-w-4xl mx-auto text-center font-display text-xl">
      Regina, the capital city of Saskatchewan, is known for its rich cultural
      heritage and vibrant community spirit. Home to the Royal Saskatchewan
      Museum and the iconic RCMP Heritage Centre, it offers a blend of
      historical and modern attractions. With its expansive Wascana Centre park
      and diverse culinary scene, Regina provides both residents and visitors
      with a unique and enjoyable urban experience.
    </p>
    <Card citySelected="Regina" />
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
  "Edmonton",
  "Montreal",
  "Quebec City",
  "Toronto",
  "Vancouver",
  "Victoria",
  "Saskatoon",
  "Regina",
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
