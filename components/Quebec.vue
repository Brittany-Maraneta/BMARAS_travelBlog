<template>
  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-center my-28 gap-8 mt-[150px]"
  >
    <h1 class="text-3xl w-40 font-lobster">Activities</h1>
    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/59/Parc_national_de_la_Jacques_Cartier.jpg
        "
        alt="Parc National de la Jacques-Cartier"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Adventure</h2>
        <h3 class="text-xl mb-2 text-black">
          Parc National de la Jacques-Cartier
        </h3>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Embark on an exhilarating outdoor adventure in Quebec by exploring the
          breathtaking landscapes of Parc National de la Jacques-Cartier. With
          its rugged terrain, pristine rivers, and lush forests, this national
          park offers endless opportunities for hiking, kayaking, and wildlife
          spotting.
        </p>
        <p class="text-gray-700">Suggest by Wanderlust Chronicles</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://afar.brightspotcdn.com/dims4/default/670404e/2147483647/strip/true/crop/800x400+0+50/resize/1440x720!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fe3%2Fe1%2Fe93e8c771bfece478f18cad5e66a%2Foriginal-8f6a68d5175eac5d377f8da15dfd8d12.jpg"
        alt="Musée national des beaux-arts du Québec"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Art & Culture</h2>
        <h3 class="text-xl mb-2 text-black">
          Musée national des beaux-arts du Québec
        </h3>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          mmerse yourself in Quebec's vibrant arts and culture scene with a
          visit to the Musée national des beaux-arts du Québec. Home to an
          impressive collection of Canadian and international artwork, this
          museum showcases everything from traditional paintings to contemporary
          sculptures. Explore the galleries, attend special exhibitions, and
          gain insight into Quebec's rich artistic heritage at this renowned
          cultural institution.
        </p>
        <p class="text-gray-700">Suggest by Wanderlust Chronicles</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://marinmagazine.com/wp-content/uploads/data-import/67a2f280/Marin_Journey_Quebec0_0419.jpg"
        alt="Old Quebec"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black font-lobster">
          Attraction
        </h2>
        <h3 class="text-xl mb-2 text-black">UNESCO World Heritage</h3>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Step back in time and discover the historic charm of Old Quebec, a
          UNESCO World Heritage site and one of North America's oldest
          settlements. Wander through cobblestone streets lined with
          centuries-old buildings, explore quaint shops and cafes, and soak in
          the enchanting atmosphere of this picturesque district. Old Quebec
          captivates visitors with its timeless beauty and cultural
          significance.
        </p>
        <p class="text-gray-700">Suggest by Nomadic Ventures</p>
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
        src="https://familyactivities.ca/images/listing/4878/237b2cbd9392b4a79a2c51900a39b94c-la-buche-assiette-de-la-cabane.jpg
        "
        alt="La Buche"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">La Buche</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Experience the flavors of Quebecois cuisine at La Buche, a charming
          eatery celebrating the region's culinary heritage. With dishes
          inspired by traditional Quebec recipes and locally sourced
          ingredients, La Buche offers a modern twist on classic favorites. From
          hearty poutine and savory tourtière to decadent maple desserts, each
          dish at La Buche is a celebration of Quebec's rich culinary culture.
        </p>
        <p class="text-gray-700">Suggested by Journeys Edge</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/1c/dc/37/2a/poitrine-de-pintade-rotie.jpg"
        alt="Chez Muffy"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Chez Muffy</h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Savor the farm-to-table delights of Chez Muffy, located within the
          historic Auberge Saint-Antoine hotel. Set in a beautifully restored
          maritime warehouse, Chez Muffy offers seasonal menus highlighting the
          best of Quebec's local produce and artisanal ingredients. From
          creative small plates to hearty mains and delectable desserts, every
          dish at Chez Muffy is a culinary masterpiece crafted with care and
          passion.
        </p>
        <p class="text-gray-700">Suggested by Normadic Ventures</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://s3-media0.fl.yelpcdn.com/bphoto/uEus-M6owvD_UgMmOm9Img/348s.jpg"
        alt="Restaurant Le Continental"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Restaurant Le Continental
        </h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Indulge in a culinary journey at Restaurant Le Continental, renowned
          for its elegant ambiance and exquisite French cuisine. From classic
          dishes like escargot and foie gras to expertly prepared steak and
          seafood options, every bite at Le Continental is a taste of luxury.
        </p>
        <p class="text-gray-700">Suggested by Wanderlust Chronicles</p>
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
        src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen,f_auto,h_248,q_auto,w_481/hotelier-images/6d/ea/ae858e18230b793f68c3255c7b737005bce5ac9dd77187e8927e1024bba8.jpeg"
        alt="Fairmont Le Château Frontenac"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Fairmont Le Château Frontenac
        </h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience unparalleled luxury at Fairmont Le Château Frontenac, a
          historic icon nestled within Old Quebec. With its stunning
          architecture, regal interiors, and panoramic views of the St. Lawrence
          River, this grand hotel offers a truly majestic experience. Le Château
          Frontenac is infused with opulence and charm, making it a timeless
          destination for discerning travelers.
        </p>
        <p class="text-gray-700">Suggest by Journeys Edge</p>
        <button class="text-gray-700">
          <a ref="https://www.fairmont.com/frontenac-quebec/"> Book Now </a>
        </button>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0b/47/4f/luxe-king-bed-river-view.jpg?w=700&h=-1&s=1"
        alt="Auberge Saint-Antoine"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Auberge Saint-Antoine</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Discover a blend of modern comfort and historic charm at Auberge
          Saint-Antoine, located in the heart of Old Quebec. Housed within a
          beautifully restored maritime warehouse, this boutique hotel offers
          stylish accommodations adorned with artifacts from Quebec's rich past.
          With its acclaimed restaurant, tranquil spa, and personalized service,
        </p>
        <p class="text-gray-700">Suggest by Wanderlust Chronicles</p>
        <button class="text-gray-700">
          <a ref="https://www.hotelarts.ca/"> Book Now </a>
        </button>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/116806294.jpg?k=d94440d8bdba83599bc5c50d22875d3759811e06a0808ea025feda56128519f6&o=&hp=1"
        alt="Hotel Le Germain Quebec
"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Hotel Le Germain Quebec
        </h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience boutique sophistication at Hotel Le Germain Quebec, a sleek
          and stylish retreat in the heart of Quebec City's vibrant downtown.
          Boasting chic design, modern amenities, and personalized service, Le
          Germain offers a contemporary oasis for discerning travelers. From its
          elegant guest rooms to its inviting lobby lounge and rooftop terrace
          with panoramic views.
        </p>
        <p class="text-gray-700">Suggest by Nomadic Ventures</p>
        <button class="text-gray-700">
          <a ref="https://www.germainhotels.com/en/le-germain-hotel/quebec">
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
        src="https://www.intelligenttransport.com/wp-content/uploads/RTC-Quebec.jpg"
        alt="RTC"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Public Transit (Réseau de transport de la Capitale - RTC)
        </h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Explore Quebec City with ease using public transit system operated by
          RTC. RTC offers convenient and affordable transportation for residents
          and visitors alike. Whether you're heading to historic landmarks,
          shopping districts, or cultural attractions, RTC provides reliable
          service and helpful route planning tools to enhance your travel
          experience in Quebec City.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/6/11/bonjour-taxi-1-5942845-1654948724520.jpg"
        alt="Cabs"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Cabs</h2>
        <StarRating :rating="3" />
        <br />
        <p class="text-gray-700 h-[200px]">
          For convenient point-to-point transportation in Quebec City, taxi
          services offer a reliable option for travelers. With numerous taxi
          companies operating in the city, visitors can easily hail a cab or use
          mobile apps to request rides to their desired destinations. Fares can
          vary depending on distance and time of day, so it's advisable to check
          rates and confirm pricing with the driver before starting your
          journey.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://lebaroudeur.ca/wp-content/uploads/2022/09/Voiture-7-places-Lebaroudeur-hiver-1-scaled.jpg"
        alt="Car"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Car Rentals</h2>
        <StarRating :rating="4" />
        <br />
        <p class="text-gray-700 h-[200px]">
          For travelers seeking flexibility and independence, car rentals offer
          the freedom to explore Quebec City and its surrounding regions at your
          own pace. With several car rental agencies located throughout the
          city, visitors can choose from a variety of vehicles to suit their
          needs and preferences.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
