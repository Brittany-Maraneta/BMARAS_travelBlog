<template>
  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-center my-28 gap-8 mt-[150px]"
  >
    <h1 class="text-3xl w-40 font-lobster">Activities</h1>
    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://www.tripshepherd.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsee-sight-tours%2Fimage%2Fupload%2Fv1581436470%2Fcn-tower-night.jpg&w=1080&q=70
        "
        alt="CN Tower EdgeWalk"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Adventure</h2>
        <h3 class="text-xl mb-2 text-black">CN Tower EdgeWalk</h3>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience the thrill of a lifetime with the CN Tower EdgeWalk.
          Perched 356 meters above the ground, this heart-pounding adventure
          allows you to walk along the edge of one of the world's tallest
          free-standing structures. Feel the adrenaline rush as you take in
          breathtaking views of Toronto's skyline. Price: Starting from $225.
        </p>
        <p class="text-gray-700">Suggested by Wanderlust Wonders</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://libeskind.com/wp-content/uploads/rom.jpg"
        alt=" Museum"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Art & Culture</h2>
        <h3 class="text-xl mb-2 text-black">Royal Ontario Museum (ROM)</h3>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Immerse yourself in art, culture, and natural history at the Royal
          Ontario Museum (ROM). Explore world-renowned collections spanning
          ancient civilizations, art masterpieces, and fascinating exhibits.
          From Egyptian mummies to dinosaur fossils, the ROM offers a
          captivating journey through time. Price: Adult admission starts at
          $23.
        </p>
        <p class="text-gray-700">Suggested by Urban Explorer</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://www.toniagara.com/blog/wp-content/uploads/2019/01/half-day-tours-niagara-falls-toronto.jpg"
        alt="Niagara Falls"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Attraction</h2>
        <h3 class="text-xl mb-2 text-black">Niagara Falls Day Trip</h3>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Embark on an unforgettable day trip to Niagara Falls from Toronto.
          Witness the awe-inspiring beauty of one of the world's most famous
          natural wonders as you marvel at the cascading waterfalls. Enjoy boat
          tours, scenic viewpoints, and optional attractions like the Journey
          Behind the Falls. Price: Starting from $99.
        </p>
        <p class="text-gray-700">Suggested by Adventure Seeker</p>
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
        src="https://resizer.otstatic.com/v2/photos/wide-xlarge/3/47117350.jpg
        "
        alt="Canoe Restaurant"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Canoe</h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Indulge in exquisite Canadian cuisine with a modern twist at Canoe.
          Located atop the TD Bank Tower, this upscale restaurant offers
          stunning views of the city skyline along with a seasonal menu
          featuring locally sourced ingredients. Enjoy culinary delights such as
          Ontario lamb and Quebec foie gras.
        </p>
        <p class="text-gray-700">Suggested by Adventure Seeker</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/0e/35/ee/b6/one-of-the-local-best.jpg"
        alt=" Cafe Food"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Café: Fahrenheit Coffee
        </h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Savor expertly crafted coffee and espresso drinks at Fahrenheit
          Coffee. Tucked away in a cozy corner of downtown Toronto, this hidden
          gem is a favorite among coffee aficionados. With a focus on quality
          and precision, each cup is brewed to perfection, making it the ideal
          spot for caffeine connoisseurs.
        </p>
        <p class="text-gray-700">Suggested by Wanderlust Wonders.</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/4/6d/46d8f8e1-89db-59bb-b0c2-b2eb3e2d1f14/63ea27f831357.image.jpg?crop=1067%2C800%2C66%2C0&resize=1200%2C900&order=crop%2Cresize"
        alt="Bakery: Dufflet Pastries"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Bakery: Dufflet Pastries
        </h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Treat your taste buds to delectable sweets at Dufflet Pastries. This
          beloved bakery has been delighting Torontonians for decades with its
          mouthwatering selection of cakes, pastries, and desserts. From
          decadent chocolate truffles to delicate macarons, every bite is a
          heavenly delight.
        </p>
        <p class="text-gray-700">Suggested by Urban Explorer</p>
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
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/448684774.jpg?k=aa5a93e74ee84aecefa25473e3795b05217190862030442b2e16f3d7b048dbdc&o=&hp=1"
        alt="The Ritz-Carlton, Toronto"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          The Ritz-Carlton, Toronto
        </h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience unparalleled luxury at The Ritz-Carlton, Toronto. Situated
          in the heart of downtown, this five-star hotel offers opulent
          accommodations, impeccable service, and breathtaking views of the CN
          Tower. Indulge in world-class dining at the on-site restaurant, TOCA,
          or rejuvenate at the lavish spa.
        </p>
        <p class="text-gray-700">Suggested by Urban Explorer</p>
        <button class="text-gray-700">
          <a
            ref="https://www.ritzcarlton.com/en/hotels/yyzrz-the-ritz-carlton-toronto/rooms/"
          >
            Book Now
          </a>
        </button>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/8b/94/9e/fairmont-gold-room.jpg?w=700&h=-1&s=1"
        alt="The Fairmont Royal York"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          The Fairmont Royal York
        </h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Step into elegance and grandeur at The Fairmont Royal York. With its
          iconic architecture and rich history, this historic hotel exudes charm
          and sophistication. Enjoy luxurious rooms, fine dining options, and
          unparalleled hospitality in the heart of Toronto's vibrant
          entertainment district.
        </p>
        <p class="text-gray-700">Suggested by Wanderlust Wonders</p>
        <button class="text-gray-700">
          <a ref="https://www.fairmont.com/royal-york-toronto/"> Book Now </a>
        </button>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://media.blogto.com/articles/20200304-gladstone-hotel.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
        alt="The Gladstone Hotel"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">The Gladstone Hotel</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Immerse yourself in art and culture at The Gladstone Hotel. As
          Toronto's oldest continuously operating hotel, The Gladstone blends
          historic charm with contemporary flair. Each uniquely designed room
          showcases the work of local artists, creating a one-of-a-kind stay.
          Explore the hotel's art galleries, live music events, and trendy bars.
        </p>
        <p class="text-gray-700">Suggested by Adventure Seeker</p>
        <button class="text-gray-700">
          <a ref="https://www.gladstonehouse.ca/"> Book Now </a>
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
        src="https://www.intelligenttransport.com/wp-content/uploads/shutterstock_725889448.jpg.jpg"
        alt="TTC Toronto Transit"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Toronto Transit Commission (TTC)
        </h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Navigate Toronto with ease using the efficient Toronto Transit
          Commission (TTC) network. With a comprehensive subway, streetcar, and
          bus system, TTC provides convenient access to all corners of the city.
          Purchase a day pass for unlimited rides and explore Toronto's diverse
          neighborhoods and attractions hassle-free.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/aa/UPXatMimico.jpg"
        alt="UP Express"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Union Pearson Express (UP Express)
        </h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience seamless travel between Toronto Pearson International
          Airport and Union Station aboard the Union Pearson Express (UP
          Express). With quick and reliable service, UP Express offers a
          stress-free journey, whisking passengers downtown in just 25 minutes.
          Enjoy spacious seating, onboard Wi-Fi, and stunning views along the
          way.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://cdn.skyrisecities.com/sites/default/files/images/articles/2019/03/36130/36130-121507.jpg"
        alt="Toronto Bike Share"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Toronto Bike Share</h2>
        <StarRating :rating="3" />
        <p class="text-gray-700 h-[200px]">
          Discover Toronto's sights and sounds on two wheels with Toronto Bike
          Share. With numerous docking stations throughout the city, renting a
          bike is convenient and affordable. Pedal along scenic waterfront
          trails, explore bustling neighborhoods, and soak up the vibrant
          atmosphere of Toronto's streets. Note: Availability may vary
          seasonally.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
