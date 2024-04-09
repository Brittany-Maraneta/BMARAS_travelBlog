<template>
  <footer class="bg-[#977A71] text-white py-8 flex flex-col items-center">
    <div class="container mx-auto flex justify-between items-center w-full">
      <img
        src="/public/logo.svg"
        alt="logo"
        class="text-center w-[100px] h-[100px]"
      />
    </div>

    <div class="flex space-x-12">
      <div class="flex flex-col">
        <div class="font-semibold mb-2">Company</div>
        <a href="/about" class="hover:text-black">About</a>
        <a href="/contact" class="hover:text-black">Contact</a>
      </div>

      <div class="flex flex-col">
        <div class="font-semibold mb-2">Policies</div>
        <a href="#" class="hover:text-black">Cookies & Privacy</a>
        <a href="#" class="hover:text-black">Terms of Use</a>
      </div>

      <div class="flex flex-col">
        <div class="font-semibold mb-2">Help</div>
        <a href="/contact" class="hover:text-black">Support</a>
        <a href="/login" class="hover:text-black">Sign In</a>
      </div>
    </div>

    <div class="flex items-center space-x-4">
      <a href="#">
        <HiFacebook class="h-6 w-auto text-white" />
      </a>
      <a href="#">
        <HiInstagram class="h-6 w-auto text-white" />
      </a>
      <a href="#">
        <HiOutlineExternalLink class="h-6 w-auto text-white" />
      </a>
    </div>

    <div class="mt-14">&copy; 2024: WE TRAVEL</div>
  </footer>
</template>

<script setup></script>
