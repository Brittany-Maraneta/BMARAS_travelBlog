<template>
  <div
    class="container mx-auto flex flex-col md:flex-row justify-center items-center my-28 gap-8 mt-[150px]"
  >
    <h1 class="text-3xl w-40 font-lobster">Activities</h1>
    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://www.travelingislanders.com/wp-content/uploads/2015/05/Adrenaline_Zipline_Adventure_Tours_Kids_Family_mini.jpg
        "
        alt="Zip Lining"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Adventure</h2>
        <h3 class="text-xl mb-2 text-black">Zip lining at Adrena LINE</h3>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Embark on an adrenaline-pumping adventure at Adrena LINE with prices
          starting at $75 per person. Zip through Victoria's lush forests and
          enjoy panoramic views for an unforgettable experience.
        </p>
        <p class="text-gray-700">Suggested by JourneyJunkie</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://royalbcmuseum.bc.ca/sites/default/files/styles/basic_page_feature_image/public/2022-04/12240051876_9f05ac9481_k_1.jpg?itok=yCufgex6"
        alt="Royal BC Museum"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Art & Culture</h2>
        <h3 class="text-xl mb-2 text-black">Royal BC Museum</h3>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Delve into BC's history at the Royal BC Museum, with admission prices
          around $20 for adults. Explore diverse exhibits showcasing natural
          history, Indigenous cultures, and modern art, offering an engaging and
          educational experience for all.
        </p>
        <p class="text-gray-700">Suggested by ExploreEpic</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://www.vancouverplanner.com/wp-content/uploads/2022/05/butchart-gardens-victoria.jpg"
        alt="Butchart Gardens"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Attraction</h2>
        <h3 class="text-xl mb-2 text-black">Butchart Gardens</h3>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Discover the botanical wonder of Butchart Gardens with admission
          prices starting at $30 per person. Lose yourself in the beauty of
          vibrant floral displays, serene water features, and meticulously
          manicured landscapes for a peaceful retreat in Victoria.
        </p>
        <p class="text-gray-700">Suggested by Roaming Nomad Adventures</p>
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
        src="https://images.squarespace-cdn.com/content/v1/5693335a05f8e207078c4bc5/1590520563516-DYFB3NNZVIF5MY7S8W3D/image-asset.jpeg
        "
        alt="Red Fish Blue Fish"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Red Fish Blue Fish</h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Indulge in fresh, sustainable seafood at Red Fish Blue Fish. Located
          in a scenic waterfront setting, this casual eatery offers
          mouthwatering fish tacos and other delights that keep locals and
          visitors coming back for more.
        </p>
        <p class="text-gray-700">Suggested by ExploreEpic</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://jamcafes.com/new/wp-content/uploads/sb-instagram-feed-images/402671051_1456584008241351_6992890467998518723_nfull.jpg"
        alt="Jam Cafe"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Jam Cafe</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Start your day right with a hearty brunch at Jam Cafe. Known for its
          generous portions and inventive dishes like chicken and waffles, this
          bustling spot is a favorite among locals. Be prepared for a wait, but
          trust us, it's worth it!
        </p>
        <p class="text-gray-700">Suggested by ExploreEpic</p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://s3-media0.fl.yelpcdn.com/bphoto/7WHUkMzzlFctLB81WyHwAw/348s.jpg"
        alt="Il Terrazzo Ristorante"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Il Terrazzo Ristorante
        </h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience the flavors of Italy at Il Terrazzo Ristorante. Nestled in
          a charming courtyard, this upscale restaurant serves authentic Italian
          cuisine with a modern twist. From handmade pasta to delectable
          desserts, every dish is a culinary delight.
        </p>
        <p class="text-gray-700">Suggested by JourneyJunkie</p>
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
        src="https://enersolv.ca/wp-content/uploads/2021/06/fairmont_web.jpg"
        alt="Fairmont Empress"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Fairmont Empress</h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience luxury at its finest at the iconic Fairmont Empress.
          Overlooking the picturesque Inner Harbour, this historic hotel offers
          elegant accommodations, impeccable service, and a timeless charm.
        </p>
        <p class="text-gray-700">Suggested by ExploreEpic</p>
        <button class="text-gray-700">
          <a ref="https://www.fairmont.com/"> Book Now </a>
        </button>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/bf/04/50/relax-and-let-our-team.jpg?w=700&h=-1&s=1"
        alt="Magnolia Hotel & Spa"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Magnolia Hotel & Spa</h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Discover tranquility and sophistication at the Magnolia Hotel & Spa.
          Situated in the heart of downtown Victoria, this boutique hotel exudes
          warmth and comfort, with plush amenities and personalized service.
        </p>
        <p class="text-gray-700">Suggested by Roaming Nomad Adventures</p>
        <button class="text-gray-700">
          <a ref="https://www.magnoliahotel.com/"> Book Now </a>
        </button>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://content.r9cdn.net/rimg/himg/67/5d/0c/expediav2-11353-eeafb9-568602.jpg?width=1200&height=630&crop=true"
        alt="Hotel Grand Pacific"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Hotel Grand Pacific</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Enjoy waterfront luxury at the Hotel Grand Pacific. With stunning
          views of the Inner Harbour and spacious rooms, this hotel offers a
          perfect blend of elegance and comfort. Indulge in fine dining at the
          Pacific Restaurant and unwind at the spa.
        </p>
        <p class="text-gray-700">Suggested by JourneyJunkie</p>
        <button class="text-gray-700">
          <a ref="https://www.hotelgrandpacific.com/"> Book Now </a>
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
        src="https://sightseeingvictoria.com/wp-content/uploads/2022/03/fa.jpg"
        alt="Bus"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">Buses Transportation</h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Explore Victoria with ease using the BC Transit bus system. With
          extensive routes covering the city and surrounding areas, buses are a
          convenient and affordable way to get around.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3 mb-8 md:mb-0"
    >
      <img
        src="https://images.squarespace-cdn.com/content/v1/5a28b984bff20052a885a052/1525443239959-UAGTKS4EBXGEBHVVV1WJ/6-S2-0052-Northern-Expedition.jpg"
        alt="BC Ferries"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">BC Ferries</h2>
        <StarRating :rating="5" />
        <p class="text-gray-700 h-[200px]">
          Experience scenic journeys across the Salish Sea with BC Ferries.
          Offering reliable service to nearby destinations like Vancouver and
          the Gulf Islands, ferries provide a unique and picturesque way to
          travel.
        </p>
      </div>
    </div>

    <div
      class="bg-lightColor shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
    >
      <img
        src="https://cdn.cheknews.ca/wp-content/uploads/2020/06/29173218/Victoria-Harbour-Ferry-1-1024x683.jpg"
        alt="Victoria Harbour Ferry"
        class="w-full h-[300px] object-cover"
      />
      <div class="p-4">
        <h2 class="text-xl font-bold mb-2 text-black">
          Victoria Harbour Ferry
        </h2>
        <StarRating :rating="4" />
        <p class="text-gray-700 h-[200px]">
          Hop aboard a charming water taxi with Victoria Harbour Ferry.
          Navigating the Inner Harbour and Gorge Waterway, these colorful
          ferries offer a delightful and scenic mode of transportation.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
