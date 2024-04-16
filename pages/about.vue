<script setup></script>

<template>
  <div>
    <div class="w-[90%] mx-auto mt-[150px] relative">
      <header>
        <img src="https://images.pexels.com/photos/382177/pexels-photo-382177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="h-[700px] w-full rounded-3xl object-cover" alt="Header img"></img>
        <div class="absolute top-[40px] inset-x-0 text-white flex flex-col items-center">
          <h1 class="text-5xl font-display2 text-center
          ">Who is WE TRAVEL?</h1>
          <h1 class="text-2xl font-display text-center font-bold mt-8 max-w-4xl mx-auto">We are travel enthusiasts that love to blog and share our experiences! Explore through the many places travelers have shared about from activities, to food, to stays!</h1>

          <div class="flex justify-center items-center h-screen">
          <button
            class="bg-secondary hover:bg-tri text-white py-1 px-2 rounded-2xl "
            @click="scrollWin"
            v-if="showButton">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
          </button>
          </div>
  </div>
    </header>
     </div>
        </div>
 
    <div class="w-[95%] mx-auto">
      <div class="flex justify-center items-center mt-32 my-32 relative">
        <div class="bg-lightColor rounded-lg p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div class="lg:w-1/2 mb-8 lg:mb-0 flex items-center justify-center">
            <iframe
            class="h-[500px] w-full rounded-3xl object-cover"
            src="https://www.youtube.com/embed/TknrmpS4GOg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          </div>
            <div class="lg:w-1/2">
              <div class="z-10">
                <h1 class="text-black text-4xl text-center font-display2">Join WE TRAVEL!</h1>
                <h1 class="text-black text-3xl text-center my-3 font-display2 mt-11">Why?</h1>
                <p class="text-black text-lg leading-relaxed text-center font-display">
                You enjoy blogging! </p>
                <p class="text-black text-lg leading-relaxed text-center font-display">
                You love to share your creations, ideas and plans!
                </p>
                  
                  <div class="text-center mt-8">
                  <h1 class="text-black text-3xl text-center my-3 font-display2">The Steps</h1>
                  <p class="text-black text-lg leading-relaxed text-center font-display">
                  Go on a trip!</p>  
                  <p class="text-black text-lg leading-relaxed text-center font-display">Take lots of pictures and note recommendations!</p>
                  <p class="text-black text-lg leading-relaxed text-center font-display">Go to the Contact page and leave your travel location and recommendations you have for that place!</p> 
                  <p class="text-black text-lg leading-relaxed text-center font-display">Wait and see your recommendation/review! &#128512;</p>

<br />

                  <p class="text-black text-lg leading-relaxed text-center font-display">Also create an account to be able to save recommendations from other bloggers!</p>

<br />
                  <p>&#129321; &#127796; &#127775;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- Cards -->
     <div class="w-[95%] mx-auto mt-[100px] mb-[100px] flex justify-center">
      <div class="flex flex-col md:flex-row md:space-x-4">

        <!-- Card 1 -->
        <div class="bg-lightColor rounded-lg overflow-hidden flex-1/3 relative">
          <img src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card 1 - Canada" class="w-[450px] h-[300px] rounded-lg object-cover">
        </div>

        <!-- Card 2 -->
        <div class="bg-lightColor rounded-lg overflow-hidden flex-1/3 mt-4 md:mt-0 relative">
          <img src="https://media1.tenor.com/m/9tqO1rFlHCIAAAAd/waterfall-nature.gif" alt="Card 2 - Waterfall" class="w-[350px] h-[300px] rounded-lg object-cover">
        </div>

        <!-- Card 3 -->
        <div class="bg-lightColor rounded-lg overflow-hidden flex-1/3 mt-4 md:mt-0 relative">
          <img src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card 3- Mexico" class="w-[450px] h-[300px] rounded-lg object-cover">
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

function scroll() {
  window.scrollBy(0, 600);
  showButton.value = false;
}

function handleScroll() {
  const scrollPosition = window.scrollY;
  showButton.value = scrollPosition === 0;
}

function scrollWin() {
  window.scrollBy(0, 660);
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.font-display {
  font-family: 'Raleway'
}

.font-display2 {
  font-family:'Lobster'
}
</style>