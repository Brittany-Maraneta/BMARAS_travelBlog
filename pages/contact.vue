<template>
  <!-- contact box section that links to email after submission -->
  <div
    class="flex justify-center items-center h-[1000px] pt-[600px] pb-[350px] md:pt-0 md:pb-0"
  >
    <div class="w-3/5 px-4 py-8 bg-lightColor rounded-lg shadow-lg">
      <div class="flex justify-center flex-col md:flex-row">
        <div class="w-full md:w-1/2 pr-0 md:pr-4 mb-8 md:mb-0">
          <h2 class="text-2xl font-semibold mb-4 text-center font-display">
            Join the community or Contact us with questions!
          </h2>
          <form @submit.prevent="sendEmail">
            <div class="mb-4">
              <label for="name" class="block text-black font-medium"
                >Name:</label
              >
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:bg-tri"
                required
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-medium"
                >Email:</label
              >
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:bg-tri"
                required
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700 font-medium"
                >Message:</label
              >
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                class="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:bg-tri"
                required
              ></textarea>
            </div>

            <div class="flex justify-between mb-4">
              <div class="w-1/2 pr-2">
                <div class="bg-tri p-4 rounded-lg">
                  <button>
                    <h3 class="text-xl mb-4 text-center font-mono">Photos</h3>
                  </button>
                </div>
              </div>

              <div class="w-1/2 pl-2">
                <div class="bg-tri p-4 rounded-lg">
                  <button>
                    <h3 class="text-xl mb-4 text-center font-mono">
                      Itinerary
                    </h3>
                  </button>
                </div>
              </div>
            </div>

            <div class="flex justify-center md:justify-start mb-4">
              <button
                type="submit"
                class="bg-secondary text-white px-4 py-2 rounded-md hover:bg-tri transition duration-300 font-mono"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class="w-full md:w-1/2 pl-0 md:pl-4">
          <div
            class="flex justify-center md:justify-start items-center h-full flex-col"
          >
            <img
              src="/public/logo.svg"
              alt="logo"
              width="75"
              height="50"
              class="w-40 h-40 mt-8"
            />
            <div class="text-center md:text-left mt-4 font-display">
              <p class="mt-4">
                Thank you for joining WE TRAVEL! We look forward to sharing your
                travel recommendations to the world! Don't forget to share your
                favorite pictures and videos that go with the Itinerary!
              </p>
              <p class="mt-4 font-display">
                If you have any concerns or questions feel free to use the same
                contact area!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
  photos: [],
  Itinerary: null,
});

const sendEmail = () => {
  const { name, email, message } = formData.value;
  const mailtoLink = `mailto:bmaranetaart@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0DEmail:%20${email}%0DMessage:%20${message}`;

  window.location.href = mailtoLink;
};
</script>

<style scoped>
.font-display {
  font-family: "Raleway";
}

.font-display2 {
  font-family: "Lobster";
}
</style>
