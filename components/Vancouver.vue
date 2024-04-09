<template>
  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-center my-28 gap-8 mt-[150px]"
  >
    <h1 class="text-3xl w-40 font-lobster">Activities</h1>
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
        <p class="text-gray-700">Suggested by Bali Bro Travels</p>
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
          promising an unforgettable adventure for wine enthusiasts.
        </p>
        <p class="text-gray-700">Suggested by Bali Bro Travels</p>
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
        <p class="text-gray-700">Suggested by VanCity Derek</p>
      </div>
    </div>
  </div>

  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-center my-28 gap-8 mt-[150px]"
  >
    <h1 class="text-3xl w-40 font-lobster">Food</h1>
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
        <p class="text-gray-700">Suggested by Bali Bro Travels</p>
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
        <p class="text-gray-700">Suggested by VanCity Derek</p>
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
        <p class="text-gray-700">Suggested by VanCity Derek</p>
      </div>
    </div>
  </div>

  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-center my-28 gap-8 mt-[150px]"
  >
    <h1 class="text-3xl w-40 font-lobster">Stays</h1>
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
        <p class="text-gray-700">Suggested by Bali Bro Travels</p>
        <button class="text-gray-700">
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
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/02/8e/21/exterior.jpg?w=700&h=-1&s=1"
        alt="Westlin Bayshore"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">The Westin Bayshore</h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience luxury at The Westin Bayshore, Vancouver. Located in a
          picturesque waterfront setting, this five-star hotel offers
          unparalleled views of the harbor and mountains. With its elegant
          accommodations, exceptional dining options, and rejuvenating spa, The
          Westin Bayshore provides a tranquil retreat in the heart of the city
        </p>
        <p class="text-gray-700">Suggested by VanCity Derek</p>
        <button class="text-gray-700">
          <a
            ref="https://www.booking.com/hotel/ca/the-westin-bayshore-vancouver.html"
          >
            Book Now
          </a>
        </button>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/456089999.jpg?k=24b53957947dd30082ffd76138b6f84cdf26429dc869d75b197c1b47f83cc685&o=&hp=1"
        alt="Douglas, Autograph Collection"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          The Douglas, Autograph Collection
        </h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Indulge in sophistication at The Douglas, Autograph Collection.
          Nestled in the vibrant entertainment district of Vancouver, this
          five-star hotel offers a blend of modern luxury and urban charm. With
          its stylish design, upscale amenities, and personalized service, The
          Douglas provides an unforgettable stay for discerning travelers.
        </p>
        <p class="text-gray-700">Suggested by BMARAS Travel</p>
        <button class="text-gray-700">
          <a
            ref="https://www.marriott.com/en-us/hotels/yvrps-the-douglas-autograph-collection/overview/"
          >
            Book Now
          </a>
        </button>
      </div>
    </div>
  </div>

  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-center my-28 gap-8 mt-[150px]"
  >
    <h1 class="text-3xl w-40 font-lobster">Transport</h1>
    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://www.vmcdn.ca/f/files/via/images/transportation/buses-granville-vancouver-file-photo.jpg"
        alt="Bus"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Buses Transportation</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Exploring Vancouver is made convenient and efficient with its
          extensive bus network. Operated by TransLink, the city's buses offer
          reliable transportation to various neighborhoods, attractions, and
          landmarks. Whether you're commuting to work, heading to the beach, or
          exploring the bustling downtown core, Vancouver buses provide a
          convenient and eco-friendly way to navigate the city's diverse
          landscape.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://smartcdn.gprod.postmedia.digital/vancouversun/wp-content/uploads/2020/01/taxi-uber.jpg"
        alt="Cabs"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Uber/Cabs</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Getting around Vancouver is a breeze with its readily available Uber
          and cab services. Whether you're in need of a quick ride to your next
          destination or prefer the convenience of door-to-door service, Uber
          and cabs offer efficient transportation options. With their
          easy-to-use apps and reliable drivers, navigating the city's streets
          has never been easier.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://vancouver.citynews.ca/wp-content/blogs.dir/sites/9/2022/06/08/spirit-of-vancouver-island.jpg"
        alt="Ferries"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Ferries</h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience the charm of Vancouver's waterfront with its iconic ferry
          services. Connecting various neighborhoods and islands, the city's
          ferries offer a scenic and enjoyable way to travel across the water.
          Whether you're crossing to Granville Island for a day of shopping and
          dining or exploring the natural beauty of nearby islands, Vancouver's
          ferries provide a convenient and picturesque mode of transportation.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
