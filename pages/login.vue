<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-xl font-semibold mb-4">WE TRAVEL</h1>
        <form @submit.prevent="signIn">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2"
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
            <label for="password" class="block text-gray-700 font-bold mb-2"
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
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <button
              type="button"
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
// import { useSupabaseClient } from "@/composables/useSupabaseClient";
import { ref } from "vue";

const router = useRouter();
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");

// Sign in info
async function signIn() {
  try {
    const { error } = await supabase.auth.signIn({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push("/index");
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
    router.push("/index");
  } catch (error) {
    console.error(`Sign Up Error: ${error}`);
  }
}
</script>
