<template>
  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-center my-28 gap-8 mt-[150px]"
  >
    <h1 class="text-3xl w-40">Activities</h1>
    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://hikebiketravel.com/wp-content/uploads/2016/04/Ha-Ling.jpg
        "
        alt="Ha Ling Peak Hike"
        class="w-full h-[300px] object-cover"
      />

      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black font-;lobster">
          Adventure
        </h2>
        <h3 class="text-xl mb-2 text-black">Ha Ling Peak Hike - Canmore</h3>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Discover the iconic Ha Ling Peak, Canmore's most popular hike,
          offering stunning vistas just a short drive from Calgary. Ascend
          through rugged terrain to reach the summit, where panoramic views
          await. Whether you're a seasoned hiker seeking a challenge or a nature
          enthusiast craving breathtaking scenery, Ha Ling Peak promises an
          unforgettable adventure amid the majestic Canadian Rockies
        </p>
        <p class="text-gray-700">Suggest by BMARAS Travel</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://az837918.vo.msecnd.net/publishedimages/listings/3271/en-CA/images/7/calgary-stampede-L-28.jpg"
        alt="Calgary Stampede"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Art & Culture</h2>
        <h3 class="text-xl mb-2 text-black">Stampede</h3>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Celebrate the spirit of the Wild West at the Calgary Stampede, a
          world-renowned event that captures the heart and soul of Western
          Canada. From exhilarating rodeo competitions to thrilling chuckwagon
          races and captivating live performances, the Stampede offers a unique
          blend of excitement and entertainment for visitors of all ages.
          Tickets range from $30 to $150.
        </p>
        <p class="text-gray-700">Suggest by MomsTravel</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://dht7q8fif4gks.cloudfront.net/2023-01/WICZ_Penguin%2520Walk_2023_0.png"
        alt="Calgary Zoo"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Attraction</h2>
        <h3 class="text-xl mb-2 text-black">Calgary Zoo</h3>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Discover wildlife wonders at the Calgary Zoo, where adventure awaits
          around every corner. From majestic lions to playful penguins, explore
          diverse habitats and learn about conservation efforts. Tickets are
          priced at $25 for adults and $15 for children. Enjoy a day of family
          fun and education at this beloved attraction.
        </p>
        <p class="text-gray-700">Suggest by MomsTravel</p>
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
        src="https://tb-static.uber.com/prod/image-proc/processed_images/1ac522c57f2398f6b76e27f4e1486355/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg
        "
        alt="Monki Breakfast Club & Bistro"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Monki Breakfast Club & Bistro
        </h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Indulge in breakfast bliss at Monki Breakfast Club & Bistro, a cozy
          spot in Calgary known for its delectable morning offerings. From
          fluffy pancakes to savory omelets, every dish is crafted with care and
          creativity. With its friendly atmosphere and mouthwatering menu, Monki
          promises a delightful start to your day.
        </p>
        <p class="text-gray-700">Suggest by MomsTravel</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/20/65/6e/c7/chateaubriand-for-2-carved.jpg"
        alt="Caesars Steakhouse"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Caesars Steakhouse</h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Savor the finest cuts at Caesars Steakhouse, a premier dining
          destination in Calgary. With its elegant ambiance and impeccable
          service, Caesars offers a dining experience unlike any other. Indulge
          in perfectly cooked steaks and decadent sides, accompanied by an
          extensive wine list. Treat yourself to an unforgettable culinary
          journey at Caesars Steakhouse.
        </p>
        <p class="text-gray-700">Suggest by BMARAS Travel</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://www.avenuecalgary.com/wp-content/uploads/2021/09/PieJunkie-1500x1000.3.jpg"
        alt="Pie"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Pie Junkie</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Indulge your sweet tooth at Pie Junkie, a hidden gem in Calgary
          offering delectable pies that will tantalize your taste buds. From
          classic apple pie to innovative flavors like salted caramel pecan,
          each pie is made with love and attention to detail. With its cozy
          atmosphere and friendly staff, Pie Junkie is the perfect spot to
          satisfy your dessert cravings.
        </p>
        <p class="text-gray-700">Suggest by Breeze Explorer</p>
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
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/253253465.jpg?k=7caa56a50db1b531ce58b158320b27bb350a4ad07e021e90d3f4a85ea1e3d3af&o=&hp=1"
        alt="Fairmont Palliser"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Fairmont Palliser</h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Immerse yourself in luxury at the historic Fairmont Palliser, located
          in the heart of downtown Calgary. With its elegant decor, impeccable
          service, and modern amenities, the Fairmont Palliser offers a truly
          unforgettable stay. Indulge in fine dining at the on-site restaurants,
          unwind in the spa, or explore nearby attractions.
        </p>
        <p class="text-gray-700">Suggest by Breeze Explorer</p>
        <button class="text-gray-700">
          <a ref="https://www.fairmont.com/palliser-calgary"> Book Now </a>
        </button>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://s3.amazonaws.com/downloads.cvent.com/CSN/f1fd570e-22e2-4dd5-85c8-c86ca685ed69/images/9af55ff1b96e4d7290846d251b2ec9ad_LARGE.jpg"
        alt="Hotel Arts"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Hotel Arts</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Experience contemporary chic at Hotel Arts, a stylish boutique hotel
          in Calgary's vibrant Beltline district. Boasting sleek design, upscale
          amenities, and personalized service, Hotel Arts offers a sophisticated
          urban retreat. Relax by the rooftop pool, dine at the award-winning
          restaurants, or explore the nearby galleries and shops.
        </p>
        <p class="text-gray-700">Suggest by BMARAS Travel</p>
        <button class="text-gray-700">
          <a ref="https://www.hotelarts.ca/"> Book Now </a>
        </button>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://cache.marriott.com/content/dam/marriott-renditions/YYCWI/yycwi-business-5234-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
        alt="The Westin Calgary"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">The Westin Calgary</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Discover comfort and convenience at The Westin Calgary, ideally
          situated in the heart of downtown. With spacious rooms, modern
          facilities, and thoughtful amenities, The Westin offers a relaxing
          stay for business and leisure travelers alike. Rejuvenate at the
          fitness center, dine at the on-site restaurants, or explore the city's
          attractions just steps away.
        </p>
        <p class="text-gray-700">Suggest by MomsTravel</p>
        <button class="text-gray-700">
          <a ref="https://www.marriott.com/"> Book Now </a>
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
        src="https://www.sprawlcalgary.com/imager/images/699/1Vlo0qN_5ufpkDVkLB9Qqyg_cc03389bb209eba449394a0dfd22765f_fbf21108a28b9dc81ac5453960a870e1.jpeg"
        alt="Bus"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Buses Transportation</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Navigate the city with ease aboard Calgary Transit buses, offering a
          convenient and affordable way to explore Calgary's attractions. With
          an extensive network of routes covering the city and surrounding
          areas, Calgary Transit provides reliable service for commuters and
          visitors alike. Hop on board and enjoy the sights of Calgary from the
          comfort of a transit bus.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://i.cbc.ca/1.3314914.1456171869!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/calgary-uber-driver-says-city-crackdown-heavy-handed.jpg"
        alt="Uber"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Uber/Cabs</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Travel with convenience and comfort using Calgary's cab and Uber
          services, providing reliable transportation options for getting around
          the city. Whether you need a quick ride to your destination or prefer
          the convenience of booking through a mobile app, Calgary's cab and
          Uber drivers are ready to assist you. Sit back, relax, and enjoy
          hassle-free travel in Calgary.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://lrt.daxack.ca/Cities/Calgary/hires-lrt.jpg"
        alt="Calgary Train"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Trains</h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience efficient and eco-friendly transportation with Calgary's
          CTrain system, offering a convenient way to navigate the city. With
          frequent service, clean and modern trains, and easy connections to key
          destinations, the CTrain is a popular choice for commuters and
          tourists alike. Whether you're exploring downtown or venturing to the
          outskirts of Calgary.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
