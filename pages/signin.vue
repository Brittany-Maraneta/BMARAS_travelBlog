<template>
  <div v-if="user" class="text-center">
    <h1 class="text-3xl font-display2 mb-4 mt-[180px]">
      Welcome {{ user.email }}

      <button
        class="text-sm bg-secondary hover:bg-tri text-white py-2 px-3 rounded-full font-mono"
        @click="signOut"
      >
        Sign Out
      </button>
    </h1>
  </div>
  <h1 class="text-xl font-display mb-4 mt-[100px] text-center">
    You now have access to favourite recommendations to save for future travel!

    <NuxtLink to="/explore">
      <button
        class="text-sm bg-secondary hover:bg-tri text-white py-2 px-3 rounded-full text-center font-mono"
      >
        Explore
      </button>
    </NuxtLink>
  </h1>

  <h1 class="text-2xl mt-[100px] text-center font-display2">My Favourites</h1>
  <div class="w-[95%] mx-auto mt-2 flex justify-center mb-[100px]">
    <div class="flex flex-col md:flex-row md:space-x-4">
      <!-- Card 1 -->
      <div class="bg-lightColor rounded-lg overflow-hidden flex-1/3 relative">
        <img
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/300"
          alt="Card 1 - Canada"
          class="w-full h-[300px] rounded-lg object-cover"
        />
        <div
          class="absolute inset-0 flex flex-col justify-center items-center p-4 bg-opacity-25 bg-white rounded-lg"
        >
          <h2 class="text-white text-xl font-bold font-mono">Explore Canada</h2>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="bg-lightColor rounded-lg overflow-hidden flex-1/3 mt-4 md:mt-0 relative"
      >
        <img
          src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Card 2 - America"
          class="w-full h-[300px] rounded-lg object-cover"
        />
        <div
          class="absolute inset-0 flex flex-col justify-center items-center p-4 bg-opacity-25 bg-white rounded-lg font-serif"
        >
          <h2 class="text-black text-xl font-bold font-mono">
            Explore America
          </h2>
        </div>
      </div>

      <!-- Card 3 -->
      <div
        class="bg-lightColor rounded-lg overflow-hidden flex-1/3 mt-4 md:mt-0 relative"
      >
        <img
          src="https://images.pexels.com/photos/5703115/pexels-photo-5703115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Card 3- Mexico"
          class="w-full h-[300px] rounded-lg object-cover"
        />
        <div
          class="absolute inset-0 flex flex-col justify-center items-center p-4 bg-opacity-25 bg-white rounded-lg"
        >
          <h2 class="text-white text-xl font-bold font-mono">Explore Mexico</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

// Sign out section
async function signOut() {
  try {
    let { error } = await client.auth.signOut();
    if (error) throw error;
    router.push("/login");
  } catch (error) {
    console.error(`signOut error: ${error}`);
  }
}
</script>

<style scoped>
.font-display {
  font-family: "Raleway";
}

.font-display2 {
  font-family: "Lobster";
}
</style>
