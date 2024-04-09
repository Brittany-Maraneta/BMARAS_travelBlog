<template>
  <div class="container">
    <div class="card">
      <h1>Sign up to Roaming Routes</h1>
      <form @submit.prevent="signIn">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" v-model="email" />
          <div>{{ email }}</div>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
          />
          <div>{{ password }}</div>
        </div>
        <button class="button" @click="signIn">Sign In</button>
        <button class="button" @click="signUp">Sign Up</button>
      </form>
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
