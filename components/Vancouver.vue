<template>
  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-center my-28 gap-8 mt-[150px]"
  >
    <h1 class="text-3xl w-40">Activities</h1>
    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://wandervancouver.com/wp-content/uploads/2019/07/grouse-grind-wander-vancouver-5847.jpg
        "
        alt="Grouse Grind Hike"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Adventure</h2>
        <h3 class="text-xl mb-2 text-black">Grouse Grind Hike</h3>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Free to see! Embark on an exhilarating adventure with the Grouse Grind
          hike in Vancouver, a must-do for outdoor enthusiasts seeking a
          challenge. Ascend the steep trail amidst lush forest, rewarding your
          efforts with breathtaking views of the city skyline below. With each
          step, you'll feel the exhilaration of conquering nature's staircase,
          making it a memorable experience for hikers of all levels.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://www.insidevancouver.ca/wp-content/uploads/2020/08/Wine-hop-2.jpg"
        alt="Wine Tour"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Art & Culture</h2>
        <h3 class="text-xl mb-2 text-black">Wine Tour</h3>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Ranging from $100-$300. Discover Vancouver's wine scene with top picks
          like the Naramata Bench Wine Tour in the Okanagan Valley, known for
          its award-winning wines amidst stunning vineyards. Alternatively,
          escape to the Fraser Valley Wine Tour, offering a serene retreat just
          outside the city. Each sip unveils the region's rich flavors,
          promising an unforgettable adventure for wine enthusiasts."
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://curiocity.com/wp-content/uploads/2022/02/voc1.jpg"
        alt="Olympic Torch"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Attraction</h2>
        <h3 class="text-xl mb-2 text-black">Olympic Torch</h3>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Free to see! The Olympic Torch, a symbol of unity and athletic
          prowess, played a pivotal role during the 2010 Winter Olympics in
          Vancouver, BC. Its journey across Canada sparked enthusiasm for the
          games and symbolized hope and inspiration. Witnessing its warm glow as
          it lit up the city streets left an indelible mark, reminding us of the
          greatness within.
        </p>
      </div>
    </div>
  </div>

  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-center my-28 gap-8 mt-[150px]"
  >
    <h1 class="text-3xl w-40">Food</h1>
    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750,f_auto/f_auto/Vancouver-Food-1-phpE1usTk
        "
        alt="Chicken Burger"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Downlow Chicken Shack</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          DownLow Chicken Shack in Vancouver is a popular spot known for its
          delicious fried chicken and cozy ambiance. Offering crispy fried
          chicken sandwiches and flavorful sides, it's a go-to destination for
          comfort food lovers. With its bold flavors and friendly atmosphere,
          DownLow Chicken Shack is a must-visit eatery in the city.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750,f_auto/f_auto/Vancouver-Food-6-phpQWE5Ek"
        alt="Sushi"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Sushi at Miku Vancouver
        </h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience exquisite Japanese cuisine at Miku Vancouver. Located by
          the waterfront, Miku offers innovative sushi dishes crafted with fresh
          ingredients and Aburi-style techniques. With its elegant ambiance and
          flavorful menu, Miku promises a memorable dining experience that's
          perfect for sushi enthusiasts and newcomers alike.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750,f_auto/f_auto/Vancouver-Food-9-phpwhoAYg"
        alt="Cake"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Purebread Bakery</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Experience the delectable treats of Purebread Bakery in Vancouver.
          Situated in the heart of the city, Purebread offers a diverse
          selection of artisanal baked goods, from indulgent cakes to savory
          pastries. With its premium ingredients and handcrafted techniques,
          Purebread delivers a delightful experience that keeps customers
          returning.
        </p>
      </div>
    </div>
  </div>

  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-center my-28 gap-8 mt-[150px]"
  >
    <h1 class="text-3xl w-40">Stays</h1>
    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://media.cntraveler.com/photos/61eb8a0afe18edcbd885cb0d/16:9/w_1920,c_limit/FairmontPacificRim-Vancouver-Canada.jpg"
        alt="Fairmont Pacific Rim"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Fairmont Pacific Rim Hotel
        </h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Discover luxury at the Fairmont Pacific Rim in Vancouver. Situated in
          a prime waterfront location, this five-star hotel offers impeccable
          service and stunning views. With its elegant rooms, world-class
          dining, and upscale amenities, the Fairmont Pacific Rim provides an
          unforgettable stay in the heart of the city
        </p>
        <button>
          <a ref="https://www.fairmont.com/pacific-rim-vancouver/">
            Book Now
          </a>
        </button>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750,f_auto/f_auto/Vancouver-Food-6-phpQWE5Ek"
        alt="Sushi"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Sushi at Miku Vancouver
        </h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience exquisite Japanese cuisine at Miku Vancouver. Located by
          the waterfront, Miku offers innovative sushi dishes crafted with fresh
          ingredients and Aburi-style techniques. With its elegant ambiance and
          flavorful menu, Miku promises a memorable dining experience that's
          perfect for sushi enthusiasts and newcomers alike.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750,f_auto/f_auto/Vancouver-Food-9-phpwhoAYg"
        alt="Cake"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Purebread Bakery</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Experience the delectable treats of Purebread Bakery in Vancouver.
          Situated in the heart of the city, Purebread offers a diverse
          selection of artisanal baked goods, from indulgent cakes to savory
          pastries. With its premium ingredients and handcrafted techniques,
          Purebread delivers a delightful experience that keeps customers
          returning.
        </p>
      </div>
    </div>
  </div>
  <h1>hello</h1>
</template>

<script setup></script>
