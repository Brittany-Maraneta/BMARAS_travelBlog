<template>
  <!-- Welcome section with signout  -->
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

  <!-- Comment Section to post on html and database -->
  <h1 class="text-2xl font-display2 mb-4 mt-[100px] text-center">
    Comment Section!
  </h1>

  <h2 class="text-xl font-display mb-4 text-center">
    Comment below what you want to see on this website!
  </h2>
  <div class="flex flex-col items-center">
    <textarea
      v-model="commentText"
      rows="4"
      cols="50"
      placeholder="Enter your comment here"
      class="bg-lightColor"
    ></textarea>
    <button @click="submitComment" class="mb-[200px]">Submit</button>
  </div>
  <div class="bg-lightColor rounded-lg p-8 lg:items-center lg:justify-between">
    <h1 class="text-2xl font-display2 mb-4 mt-[80px] text-center">Comments!</h1>
    <div
      v-for="comment in comments"
      :key="comment.id"
      class="text-center mt-[70px]"
    >
      <p>{{ comment.comments }}</p>
      <p class="mb-[50px]">{{ comment.created_at }}</p>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />

  <!-- Favourites Section -->
  <div class="bg-tri rounded-lg p-8 lg:items-center lg:justify-between">
    <h1 class="text-xl font-display mb-4 mt-[130px] text-center">
      You now have access to favourite recommendations to save for future
      travel!

      <NuxtLink to="/explore">
        <button
          class="text-sm bg-secondary hover:bg-tri text-white py-2 px-3 rounded-full text-center font-mono"
        >
          Explore
        </button>
      </NuxtLink>
    </h1>
    <h1 class="text-2xl mt-[20px] text-center font-display2">My Favourites</h1>
    <h2 class="text-2xl mt-[20px] text-center font-display">
      Coming Soon ... You will be able to favourite recommendations with your
      account!
    </h2>

    <div class="w-[95%] mx-auto mt-2 flex justify-center mb-[100px]">
      <div class="flex flex-col md:flex-row md:space-x-4">
        <!-- Card 1 -->
        <div class="bg-lightColor rounded-lg overflow-hidden flex-1/3 relative">
          <img
            src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Card 1 - Mountains"
            class="w-full h-[300px] rounded-lg object-cover"
          />
        </div>

        <!-- Card 2 -->
        <div
          class="bg-lightColor rounded-lg overflow-hidden flex-1/3 mt-4 md:mt-0 relative"
        >
          <img
            src="https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Card 2 - Building"
            class="w-full h-[300px] rounded-lg object-cover"
          />
        </div>

        <!-- Card 3 -->
        <div
          class="bg-lightColor rounded-lg overflow-hidden flex-1/3 mt-4 md:mt-0 relative"
        >
          <img
            src="https://images.pexels.com/photos/3767837/pexels-photo-3767837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Card 3- Japan"
            class="w-full h-[300px] rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const commentText = ref("");
const comments = ref([]);

const submitComment = async () => {
  try {
    const createdAt = new Date().toISOString();
    const { data, error } = await supabase
      .from("we_travel_users")
      .insert([{ comments: commentText.value, created_at: createdAt }]);
    if (error) {
      console.error("Error submitting comment:", error.message);
      return;
    }
    console.log("Comment submitted successfully");
    commentText.value = "";
    fetchComments();

    // Reload the page after successful comment submission
    window.location.reload();
  } catch (error) {
    console.error("Error submitting comment:", error.message);
  }
};

const fetchComments = async () => {
  try {
    const { data, error } = await supabase.from("we_travel_users").select("*");
    if (error) {
      console.error("Error fetching comments:", error.message);
      return;
    }
    comments.value = data;
  } catch (error) {
    console.error("Error fetching comments:", error.message);
  }
};

onMounted(fetchComments);

async function signOut() {
  try {
    let { error } = await supabase.auth.signOut();
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
