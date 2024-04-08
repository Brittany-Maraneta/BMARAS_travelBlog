<template>
  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-cente my-28 gap-8"
  >
    <!-- Left Card -->
    <div
      class="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/2 mb-8 md:mb-0"
    >
      <img
        src="https://images.pexels.com/photos/13234849/pexels-photo-13234849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Calgary"
        class="w-full h-[400px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">Explore Calgary</h2>
        <p class="text-gray-700">
          Calgary is a vibrant city in Alberta, Canada, known for its beautiful
          landscapes, lively arts scene, and rich cultural heritage. Explore the
          breathtaking Rockies, visit the Calgary Stampede, and indulge in
          delicious local cuisine.
        </p>
      </div>
    </div>
    <!-- Right Card -->
    <div class="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/2">
      <img
        src="https://images.pexels.com/photos/63332/science-world-false-creek-vancouver-british-columbia-63332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Vancouver"
        class="w-full h-[400px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">Explore Vancouver</h2>
        <p class="text-gray-700">
          Vancouver, located in British Columbia, Canada, offers stunning
          natural beauty, diverse cultural experiences, and exciting outdoor
          adventures. Discover Stanley Park, explore Granville Island, and enjoy
          panoramic views of the city from Grouse Mountain.
        </p>
      </div>
    </div>
  </div>
  <h2
    class="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl text-black mx-["
  >
    Explore through the suggestions below from food to stays and many more!
  </h2>
  <br />
  <h2
    class="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl text-black mx-["
  >
    Click on a city below and start expanding your horizons!
  </h2>

  <DropDown class="my-6" />

  <h1 class="text-5xl text-center my-11">Hello</h1>
</template>

<script setup></script>
