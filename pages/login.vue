<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <div class="bg-lightColor shadow-md rounded px-10 pt-8 pb-8 mb-4">
        <h1 class="text-3xl mb-4 text-center font-display2">WE TRAVEL</h1>
        <form @submit.prevent="signIn">
          <div class="mb-4">
            <label
              for="email"
              class="block text-black font-bold font-display mb-2"
              >Email:</label
            >
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block text-black font-display font-bold mb-2"
              >Password:</label
            >
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              type="submit"
              class="bg-secondary hover:bg-tri text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline font-mono"
            >
              Sign In
            </button>
            <button
              type="button"
              class="bg-tri hover:bg-secondary text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline font-mono"
              @click="signUp"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");

// Sign in info
async function signIn() {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push("/signin");
  } catch (error) {
    console.error(`Login Error: ${error}`);
  }
}

// Sign up info
async function signUp() {
  try {
    const { user, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push("/signin");
  } catch (error) {
    console.error(`Sign Up Error: ${error}`);
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
