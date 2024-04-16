<template>
  <div
    class="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-[150px]"
  >
    <h1 class="text-4xl w-40 font-display2">Activities</h1>
    <div v-for="city in filterTravel" :key="city" class="flex justify-evenly">
      <div class="bg-lightColor shadow-md rounded-lg mb-8 w-[410px] h-[600px]">
        <img
          :src="city.url"
          alt="title"
          class="h-[300px] w-full bg-cover rounded-t-lg object-cover"
        />

        <div class="p-4">
          <h3 class="text-xl mb-2 text-black font-display">
            {{ city.activity }}
          </h3>
          <StarRating :rating="city.activity_star" />

          <p class="text-gray-700 h-[200px] text-sm font-serif">
            {{ city.activity_description }}
          </p>
          <p class="text-gray-700 h-[200px] text-sm font-serif">
            {{ city.suggest_activity }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-[150px]"
  >
    <h1 class="text-4xl w-40 font-display2">Food</h1>
    <div v-for="city in filterTravel" :key="city" class="flex justify-evenly">
      <div class="bg-lightColor shadow-md rounded-lg mb-8 w-[410px] h-[600px]">
        <img
          :src="city.food_url"
          :alt="title"
          class="h-[300px] w-full bg-cover rounded-t-lg object-cover"
        />
        <div class="p-4">
          <h3 class="text-xl mb-2 text-black font-display">
            {{ city.food_places }}
          </h3>
          <StarRating :rating="city.food_star" />
          <p class="text-gray-700 h-[200px] text-sm font-serif">
            {{ city.food_description }}
          </p>
          <p class="text-gray-700 h-[200px] text-sm font-serif">
            {{ city.suggest_food }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-[150px]"
  >
    <h1 class="text-4xl font-display2 w-40">Stays</h1>
    <div v-for="city in filterTravel" :key="city" class="flex justify-evenly">
      <div class="bg-lightColor shadow-md rounded-lg mb-8 w-[410px] h-[600px]">
        <img
          :src="city.stay_url"
          alt="Ha Ling Peak Hike"
          class="h-[300px] w-full bg-cover rounded-t-lg object-cover"
        />
        <div class="p-4">
          <h3 class="text-xl mb-2 text-black font-display">
            {{ city.stays }}
          </h3>
          <StarRating :rating="city.stays_star" />
          <p class="text-gray-700 h-[200px] text-sm font-serif">
            {{ city.stays_description }}
          </p>
          <p class="text-gray-700 h-[200px] text-sm font-serif">
            {{ city.suggest_stay }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-[150px] mb-20"
  >
    <h1 class="text-4xl font-display2 w-40">Transport</h1>
    <div v-for="city in filterTravel" :key="city" class="flex justify-evenly">
      <div class="bg-lightColor shadow-md rounded-lg mb-8 w-[410px] h-[600px]">
        <img
          :src="city.transport_url"
          alt="Ha Ling Peak Hike"
          class="h-[300px] w-full bg-cover rounded-t-lg object-cover"
        />
        <div class="p-4">
          <h3 class="text-xl mb-2 text-black font-display">
            {{ city.transport }}
          </h3>
          <StarRating :rating="city.transport_stars" />
          <p class="text-gray-700 h-[200px] text-sm font-serif">
            {{ city.transport_description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import StarRating from "./StarRating.vue";
import { ref, defineProps } from "vue";

const props = defineProps({
  citySelected: {
    required: true,
  },
});

let IDS;

let citySelected = ref(props.citySelected);

const title = "Title";
const description = `Description`;
const suggestedBy = "Suggested by Suggester";
const imageSrc = "Image Source";
const altText = "Alt Text";
const bookNowLink = "Booking Link";

const { data: travel } = await useAsyncData("we_travel", async () => {
  const client = useSupabaseClient();

  try {
    let { data, error } = await client.from("we_travel").select();
    console.log();
    return data;
  } catch (error) {
    console.error(error);
  }
});

const filterTravel = travel.value.filter(
  (item) => item.city_id === citySelected.value
);
</script>

<style scoped>
.font-display {
  font-family: "Raleway";
}

.font-display2 {
  font-family: "Lobster";
}
</style>
