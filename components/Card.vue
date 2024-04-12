<template>
  <div
    class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
  >
    <img :src="imageSrc" :alt="altText" class="w-full h-[300px] object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-bold mb-2 text-black">{{ category }}</h2>
      <h3 class="text-xl mb-2 text-black">{{ title }}</h3>
      <StarRating :rating="rating" />
      <p class="text-gray-700 h-[200px]">{{ description }}</p>
      <p class="text-gray-700">{{ suggestedBy }}</p>
      <button class="text-gray-700">
        <a :href="bookNowLink">Book Now</a>
      </button>
    </div>
  </div>
</template>

<script setup>
import StarRating from "./StarRating.vue";

const category = "Category";
const title = "Title";
const rating = 4;
const description = `Description`;
const suggestedBy = "Suggested by Suggester";
const imageSrc = "Image Source";
const altText = "Alt Text";
const bookNowLink = "Booking Link";
</script>
