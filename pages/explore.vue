<template>
  <!-- Header Section -->
  <h1 class="text-4xl text-center mt-[180px] font-display2">
    Welcome to the Explore section! Go through our recommendations of our
    favourite places within Canada!
  </h1>
  <h1 class="text-3xl text-center mt-4 font-display2">Happy traveling!</h1>
  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-centre my-28 gap-8 mt-[70px]"
  >
    <!-- Left Card -->
    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/2 mb-8 md:mb-0"
    >
      <img
        src="https://images.pexels.com/photos/13234849/pexels-photo-13234849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Calgary"
        class="w-full h-[400px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black font-display2">
          Explore Calgary
        </h2>
        <p class="text-gray-700 font-display">
          Calgary is a vibrant city in Alberta, Canada, known for its beautiful
          landscapes, lively arts scene, and rich cultural heritage. Explore the
          breathtaking Rockies, visit the Calgary Stampede, and indulge in
          delicious local cuisine.
        </p>
      </div>
    </div>
    <!-- Right Card -->
    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/2"
    >
      <img
        src="https://images.pexels.com/photos/63332/science-world-false-creek-vancouver-british-columbia-63332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Vancouver"
        class="w-full h-[400px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black font-display2">
          Explore Vancouver
        </h2>
        <p class="text-gray-700 font-display">
          Vancouver, located in British Columbia, Canada, offers stunning
          natural beauty, diverse cultural experiences, and exciting outdoor
          adventures. Discover Stanley Park, explore Granville Island, and enjoy
          panoramic views of the city from Grouse Mountain.
        </p>
      </div>
    </div>
  </div>

  <DropDown class="mt-[-50px] mb-[50px]" :citySearched="searchString" />
</template>

<script setup>
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const route = useRequestURL();
let searchString = route.search;
searchString = searchString.replace("?query=", "");
searchString = capitalizeFirstLetter(searchString);
</script>

<style scoped>
.font-display {
  font-family: "Raleway";
}

.font-display2 {
  font-family: "Lobster";
}
</style>
