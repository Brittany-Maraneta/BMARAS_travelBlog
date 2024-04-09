<template>

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
