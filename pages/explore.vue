<template>
  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-centre my-28 gap-8 mt-[150px]"
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
        <h2 class="text-xl font-bold mb-2 text-black">Explore Calgary</h2>
        <p class="text-gray-700">
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
        <h2 class="text-xl font-bold mb-2 text-black">Explore Vancouver</h2>
        <p class="text-gray-700">
          Vancouver, located in British Columbia, Canada, offers stunning
          natural beauty, diverse cultural experiences, and exciting outdoor
          adventures. Discover Stanley Park, explore Granville Island, and enjoy
          panoramic views of the city from Grouse Mountain.
        </p>
       
      </div>
    </div>
  </div>
  <br />


  <div class="w-[95%] mx-auto">
      <main class="flex justify-center items-center  ">
        <div class="bg-lightColor rounded-lg p-8 lg:w-3/4 xl:w-2/3">
          <div class="flex flex-col lg:flex-row items-center justify-center">
            <div class="mb-8 lg:mb-0 flex justify-center">
            <img src="https://images.pexels.com/photos/6942435/pexels-photo-6942435.jpeg?auto=compress&cs=tinysrgb&w=600" class="max-w-[300px] rounded-lg"></img>
          </div>
          <div>
              <h1 class="text-black text-2xl text-center">
                Explore through the suggestions below from food to stays and many
              more! Click on a city below and start expanding your horizons!
              </h1>
              <div class="text-center lg:text-left">
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  


  <DropDown class="mt-[-50px]" />
  
</template>

<script setup></script>
