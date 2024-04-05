<template>
  <h1 class="text-2xl my-[100px]">Hello About</h1>
  <div class="relative inline-block text-left">
    <div>
      <button
        @click="toggleDropdown"
        type="button"
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 mx-[100px]"
      >
        {{ selectedOption }}
        <svg
          class="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10.707 12.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <template v-for="(option, index) in options" :key="index">
        <div
          v-if="option.submenu"
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            @click="selectOption(option.text)"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            role="menuitem"
          >
            {{ option.text }}
          </button>
          <div
            v-if="option.submenuOpen"
            class="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              v-for="(subOption, subIndex) in option.submenu"
              :key="subIndex"
              @click="selectOption(subOption.text)"
              class="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              {{ subOption.text }}
            </button>
          </div>
        </div>
        <div
          v-else
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <button
            @click="selectOption(option.text)"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            role="menuitem"
          >
            {{ option.text }}
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedOption: "Choose a Country",
      options: [
        {
          text: "Canada",
          submenu: [
            { text: "Alberta" },
            { text: "British Columbia" },
            { text: "Saskatchewan" },
          ],
          submenuOpen: false,
        },

        {
          text: "United States",
          submenu: [
            { text: "California" },
            { text: "Florida" },
            { text: "Ohio" },
          ],
          submenuOpen: false,
        },

        {
          text: "Japan",
          submenu: [{ text: "Tokyo" }, { text: "Osaka" }, { text: "Kyoto" }],
          submenuOpen: false,
        },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.options.forEach((opt) => {
        if (opt.text === option && opt.submenu) {
          opt.submenuOpen = !opt.submenuOpen;
        }
      });
    },
  },
};
</script>
