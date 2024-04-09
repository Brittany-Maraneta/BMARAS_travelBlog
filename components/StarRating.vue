<template>
  <div class="flex items-center text-black">
    <template v-for="n in 5" :key="n">
      <span v-if="n <= rating">&#9733;</span>
      <span v-else>&#9734;</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
