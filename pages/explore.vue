<template>
  <div>
    <header>
      <div class="bg-lightColor py-8">
        <div class="container mx-auto px-2 py-8 rounded-lg">
          <div class="flex flex-col justify-center items-center sm:flex-row">
            <img
              src="https://media1.tenor.com/m/FMmwOqeokKQAAAAC/travel-jet.gif"
              alt="Left"
              class="w-full sm:w-[650px] h-[500px] sm:h-[500px] rounded-lg mr-0 sm:mr-4 my-8"
            />

            <div class="flex flex-col justify-between">
              <div
                class="w-32 sm:w-40 md:w-52 lg:w-64 h-32 sm:h-40 md:h-52 lg:h-64 mb-4 overflow-hidden rounded-lg sm:flex-row"
              >
                <img
                  src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Top Right"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="w-32 sm:w-40 md:w-52 lg:w-64 h-32 sm:h-40 md:h-52 lg:h-64 overflow-hidden rounded-lg sm:flex-row"
              >
                <img
                  src="https://media1.tenor.com/m/si459QCqaQwAAAAd/bag-pack-wanderlust.gif"
                  alt="Bottom Right"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="flex justify-center">
        <div class="flex flex-col items-center">
          <button
            @click="toggleDropdown"
            class="bg-secondary text-white hover:bg-tri px-6 py-4 font-bold text-xl rounded-md focus:outline-none mt-1"
          >
            Discover
          </button>

          <!-- Dropdown menu -->
          <div
            v-if="isDropdownOpen"
            class="absolute top-[calc(100% + 30px)] left-0 w-[500px] bg-white shadow-lg rounded-md z-10 my-16 object-center"
          >
            <!-- Country options -->
            <div v-if="selectedOption === 'country'" class="p-4">
              <select
                v-model="selectedCountry"
                @change="fetchCities"
                class="w-[500px] border-gray-300 rounded-md shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-100 focus:ring-opacity-50"
              >
                <option disabled value="">Select a country</option>
                <option
                  v-for="country in countries"
                  :key="country.id"
                  :value="country.id"
                >
                  {{ country.name }}
                </option>
              </select>
            </div>

            <!-- City options -->
            <div v-else-if="selectedOption === 'city'" class="p-4">
              <select
                v-model="selectedCity"
                class="w-[500px] border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option disabled value="">Select a city</option>
                <option v-for="city in cities" :key="city.id" :value="city.id">
                  {{ city.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createClient } from "@supabase/supabase-js";
const runtimeConfig = useRuntimeConfig();

const supabaseUrl = runtimeConfig.public.supabaseUrl;
const supabaseKey = runtimeConfig.public.supabaseKey;

const supabase = createClient(supabaseUrl, supabaseKey);

const isOpen = ref(false);
const selectedOption = ref("country");
const selectedCountry = ref("");
const selectedCity = ref("");
const countries = ref([]);
const cities = ref([]);
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const fetchCountries = async () => {
  // Make API request to fetch countries data
  const { data, error } = await supabase.from("country").select("country");
  if (error) {
    console.error("Error fetching countries:", error.message);
    return;
  }
  countries.value = data;
};

const fetchCities = async () => {
  // Make API request to fetch cities data based on selected country
  const { data, error } = await supabase
    .from("city")
    .select("city")
    .eq("country", selectedCountry.value);
  if (error) {
    console.error("Error fetching cities:", error.message);
    return;
  }
  cities.value = data;
};
</script>
