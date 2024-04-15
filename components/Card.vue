<template>
  <div
    class="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-[150px]"
  >
    <h1 class="text-4xl w-40 font-display2">Activities</h1>
    <div v-for="city in filterTravel" :key="city" class="flex justify-evenly">
      <div class="bg-lightColor shadow-md rounded-lg mb-8 w-[410px] h-[600px]">
        <img
          src="https://hikebiketravel.com/wp-content/uploads/2016/04/Ha-Ling.jpg
        "
          alt="Ha Ling Peak Hike"
          class="w-full h-[300px] bg-cover rounded-t-lg"
        />
        <div class="p-4">
          <h3 class="text-xl mb-2 text-black font-display">
            {{ city.activity }}
          </h3>
          <StarRating :rating="city.activity_star" />

          <p class="text-gray-700 h-[200px] text-sm">
            {{ city.activity_description }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-[150px]"
  >
    <h1 class="text-4xl w-40 font-display2">Food</h1>
    <div v-for="city in filterTravel" :key="city">
      <div class="bg-lightColor shadow-md rounded-lg w-[410px]">
        <img
          src="https://hikebiketravel.com/wp-content/uploads/2016/04/Ha-Ling.jpg
        "
          alt="Ha Ling Peak Hike"
          class="h-[300px] bg-cover rounded-t-lg"
        />
        <div class="p-4">
          <h3 class="text-xl mb-2 text-black font-display">
            {{ city.food_places }}
          </h3>
          <StarRating :rating="city.food_star" />
          <p class="text-gray-700 h-[200px] text-sm">
            {{ city.food_description }}
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
      <div class="bg-lightColor shadow-md rounded-lg mb-8 w-[410px]">
        <img
          src="https://hikebiketravel.com/wp-content/uploads/2016/04/Ha-Ling.jpg
        "
          alt="Ha Ling Peak Hike"
          class="h-[300px] bg-cover rounded-t-lg"
        />
        <div class="p-4">
          <h3 class="text-xl mb-2 text-black font-display">
            {{ city.stays }}
          </h3>
          <StarRating :rating="city.stays_star" />
          <p class="text-gray-700 h-[200px] text-sm">
            {{ city.stays_description }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="container mx-auto flex flex-col md:flex-row items-center gap-8 mt-[150px] mb-10"
  >
    <h1 class="text-4xl font-display2 w-40">Transport</h1>
    <div v-for="city in filterTravel" :key="city" class="flex justify-evenly">
      <div class="bg-lightColor shadow-md rounded-lg mb-8 w-[410px] h-[600px]">
        <img
          src="https://hikebiketravel.com/wp-content/uploads/2016/04/Ha-Ling.jpg
        "
          alt="Ha Ling Peak Hike"
          class="h-[300px] bg-cover rounded-t-lg"
        />
        <div class="p-4">
          <h3 class="text-xl mb-2 text-black font-display">
            {{ city.transport }}
          </h3>
          <StarRating :rating="city.transport_stars" />
          <p class="text-gray-700 h-[200px] text-sm">
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
const rating = 4;
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
console.log("travel", travel, citySelected);

const filterTravel = travel.value.filter(
  (item) => item.city_id === citySelected.value
);

console.log("filterTravel", filterTravel, citySelected);
</script>

<style scoped>
.font-display {
  font-family: "Raleway";
}

.font-display2 {
  font-family: "Lobster";
}
</style>
