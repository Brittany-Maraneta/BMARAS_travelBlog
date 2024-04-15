<template>
  <div>
    <div class="w-[90%] mx-auto mt-[150px] relative">
      <header>
        <img src="https://images.pexels.com/photos/7009459/pexels-photo-7009459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="h-[700px] w-full rounded-3xl object-cover "></img>
        <div class="absolute top-[100px] left-8 text-white">
          <h1 class="text-6xl font-display2">The Idea</h1>
          <br>
          <h2 class="text-lg md:text-xl lg:text-2xl xl:text-2xl text-black font-display">To explore the world with other travel enthusiasts.</h2>
          <h3 class="text-lg md:text-xl lg:text-2xl xl:text-2xl text-black font-display">To be inspired and to inspire.</h3>
          <NuxtLink to="/explore">
            <button
    class="bg-secondary hover:bg-tri text-white font-bold py-3 px-5 rounded-2xl mt-[18px] font-mono"
  >Explore</button>
        </NuxtLink>
        </div>
      </header>
    </div>

    <!-- Cards -->
    <div class="w-[95%] mx-auto mt-[100px] flex justify-center">
      <div class="flex flex-col md:flex-row md:space-x-4">

        <!-- Card 1 -->
        <div class="bg-lightColor rounded-lg overflow-hidden flex-1/3 relative">
          <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/300" alt="Card 1 - Canada" class="w-full h-[300px] rounded-lg object-cover">
          <div class="absolute inset-0 flex flex-col justify-center items-center p-4 bg-opacity-25 bg-white rounded-lg">
            <h2 class="text-white text-xl font-bold font-mono">Explore Canada</h2>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-lightColor rounded-lg overflow-hidden flex-1/3 mt-4 md:mt-0 relative">
          <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card 2 - America" class="w-full h-[300px] rounded-lg object-cover">
          <div class="absolute inset-0 flex flex-col justify-center items-center p-4 bg-opacity-25 bg-white rounded-lg font-mono">
            <h2 class="text-black text-xl font-bold">Explore America</h2>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-lightColor rounded-lg overflow-hidden flex-1/3 mt-4 md:mt-0 relative">
          <img src="https://images.pexels.com/photos/5703115/pexels-photo-5703115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card 3- Mexico" class="w-full h-[300px] rounded-lg object-cover">
          <div class="absolute inset-0 flex flex-col justify-center items-center p-4 bg-opacity-25 bg-white rounded-lg">
            <h2 class="text-white text-xl font-bold font-mono">Explore Mexico</h2>
          </div> 
        </div>
      </div>
    </div>

    <div class="w-[95%] mx-auto">
      <main class="flex justify-center items-center mt-32 my-32 relative">
        <div class="bg-lightColor rounded-lg p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div class="lg:w-1/2 mb-8 lg:mb-0 flex items-center justify-center">
            <img src="https://media1.tenor.com/m/vqO5lvzV0OsAAAAC/travel.gif" class="max-w-full rounded-lg"></img>
          </div>
          <div class="lg:w-1/2">
            <div class="z-10">
         
              <h1 class="text-black text-5xl text-center my-3 font-display2">The Why</h1>
              <p class="text-black text-lg leading-relaxed text-center font-display">
                We are travel enthusiasts that love to blog and share our experiences! <br />
                Explore through the many places travelers have shared about from activities, to food, to stays!
              </p>
              <div class="text-center mt-8">
                <NuxtLink to="/about">
            <button
    class="bg-secondary hover:bg-tri text-white font-bold py-2 px-4 rounded-2xl mt-[18px] font-mono"
  >Get to Know Us!</button>
        </NuxtLink>
        <img
        src="/public/logo.svg"
        alt="logo"
        class="text-center w-[100px] h-[100px] mx-[220px]"
      />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

</template>



<style scoped>
.font-display {
  font-family: 'Raleway'
}

.font-display2 {
  font-family:'Lobster'
}
</style>