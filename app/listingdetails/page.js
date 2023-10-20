import React from "react";
import Image from "next/image";

const PropertyDetail = () => {
  const property = {
    title: "Luxury Villa with Ocean View",
    price: "$2,500,000",
    location: "Los Angeles, CA",
    bedrooms: 4,
    bathrooms: 5,
    area: "3,500 sqft",
    heating: true,
    airConditioning: true,
    internet: true,
    tvCable: false,
    laundry: true,
    description:
      "This luxurious villa features stunning ocean views, spacious living areas, a gourmet kitchen, and a private pool. Perfect for those seeking the ultimate in luxury living.",
  };
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="bg-brand-accent relative mt-0">
        <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
          <h1 className="md:text-3xl lg:text-3xl  xxxs:text-2xl  leading-10 text-center uppercase font-heading">
            1 BHK Independent House
          </h1>
          <p className="mt-2 text-center text-gray-700">New York, USA</p>
        </div>

        <div
          className="w-full h-24 bg-bottom bg-cover"
          style={{ backgroundImage: 'url("/subhero-bg.jpg")' }}
        ></div>
      </div>
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 md:flex md:space-x-12 md:justify-between md:space-y-0">
            <div className="flex flex-1 xxxs:space-x-4 md:space-x-8 lg:space-x-8">
              <div className="flex items-end space-x-4">
                <div className="flex flex-col">
                  <span className="mb-2 text-sm font-semibold text-gray-600 uppercase">
                    RENT
                  </span>
                  <span className="flex items-baseline lg:text-4xl md:text-4xl xxxs:text-xl font-semibold text-red-400">
                    <span> $600 </span>
                    <sup className="text-xs text-gray-500 -top-0.5 pl-1">
                      /MO
                    </sup>
                  </span>
                </div>
                <div className="flex items-end h-full text-xl">+</div>
                <div className="flex flex-col font-semibold">
                  <span className="mb-2 text-sm font-semibold text-gray-600 uppercase">
                    Maintenance
                  </span>
                  <span className="lg:text-4xl md:text-4xl xxxs:text-xl text-red-400">
                    <span>$75</span>
                    <sup className="text-xs text-gray-500 -top-0.5 pl-1">
                      /MO
                    </sup>
                  </span>
                </div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="mb-2 text-sm font-semibold text-gray-600 uppercase">
                  Deposit
                </span>
                <span className="lg:text-4xl md:text-4xl xxxs:text-xl font-semibold text-gray-800">
                  <span>$2000</span>
                  <sup className="text-xs text-gray-500 -top-0.5 pl-1">
                    /YEAR
                  </sup>
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-6 md:space-x-6 md:items-end md:flex-row md:space-y-0">
              <button className="px-8 py-4 font-medium rounded-full text-cyan-500 bg-cyan-100 focus:outline-none">
                Request Callback
              </button>
              <button className="px-8 py-4 font-medium text-white rounded-full bg-lime-500 focus:outline-none">
                Book Now
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-rows-2 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3 aspect-[16/7]">
              <div className="relative col-span-2 row-span-2">
                <Image
                  src="/assets/listings/l1.webp"
                  alt="Property 5"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/assets/listings/l2.webp"
                  alt="Property 6"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/assets/listings/l3.webp"
                  alt="Property 9"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="md:px-20">
            <div className="pt-20">
              <h4 className="text-xl uppercase font-heading font-semibold">
                Overview
              </h4>
              <p className="mt-4 leading-9 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries.
              </p>
            </div>
            <div className="pt-24">
              <h4 className="text-xl uppercase font-heading">Amenities</h4>
              <div className="grid gap-6 mt-8 md:grid-cols-3">
                <div className="flex items-center space-x-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-red-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z"></path>
                  </svg>
                  <span className="text-lg font-semibold text-gray-700">
                    2 bedrooms
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-red-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z"></path>
                  </svg>
                  <span className="text-lg font-semibold text-gray-700">
                    Bathroom
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-red-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V15l.001 5H6v-9.585l6-6.001z"></path>
                    <path d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
                  </svg>
                  <span className="text-lg font-semibold text-gray-700">
                    Internet
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 2.983a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h16zM4 1a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3H4zm9 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-lg font-semibold text-gray-700">
                    TV Cable
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-red-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19.003" cy="6.002" r="2.002"></circle>
                    <path d="M18.875 13.219c-.567.453-.978.781-1.878.781-.899 0-1.288-.311-1.876-.781-.68-.543-1.525-1.219-3.127-1.219-1.601 0-2.445.676-3.124 1.219-.588.47-.975.781-1.875.781-.898 0-1.286-.311-1.873-.78C4.443 12.676 3.6 12 2 12v2c.897 0 1.285.311 1.872.78.679.544 1.523 1.22 3.123 1.22s2.446-.676 3.125-1.22c.587-.47.976-.78 1.874-.78.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219 1.602 0 2.447-.676 3.127-1.219.588-.47.977-.781 1.876-.781v-2c-1.601 0-2.446.676-3.125 1.219zM16.997 19c-.899 0-1.288-.311-1.876-.781-.68-.543-1.525-1.219-3.127-1.219-1.601 0-2.445.676-3.124 1.219-.588.47-.975.781-1.875.781-.898 0-1.286-.311-1.873-.78C4.443 17.676 3.6 17 2 17v2c.897 0 1.285.311 1.872.78.679.544 1.523 1.22 3.123 1.22s2.446-.676 3.125-1.22c.587-.47.976-.78 1.874-.78.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219 1.602 0 2.447-.676 3.127-1.219.588-.47.977-.781 1.876-.781v-2c-1.601 0-2.446.676-3.125 1.219-.567.453-.978.781-1.878.781zM11 5.419l2.104 2.104-2.057 2.57c.286-.056.596-.093.947-.093 1.602 0 2.447.676 3.127 1.219.588.47.977.781 1.876.781.9 0 1.311-.328 1.878-.781.132-.105.274-.217.423-.326l-2.096-2.09.005-.005-5.5-5.5a.999.999 0 0 0-1.414 0l-4 4 1.414 1.414L11 5.419z"></path>
                  </svg>
                  <span className="text-lg font-semibold text-gray-700">
                    Central Heating
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-red-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 5.5C13 3.57 11.43 2 9.5 2 7.466 2 6.25 3.525 6.25 5h2c0-.415.388-1 1.25-1 .827 0 1.5.673 1.5 1.5S10.327 7 9.5 7H2v2h7.5C11.43 9 13 7.43 13 5.5zm2.5 9.5H8v2h7.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5c-.862 0-1.25-.585-1.25-1h-2c0 1.475 1.216 3 3.25 3 1.93 0 3.5-1.57 3.5-3.5S17.43 15 15.5 15z"></path>
                    <path d="M18 5c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2H2v2h16c2.206 0 4-1.794 4-4s-1.794-4-4-4zM2 15h4v2H2z"></path>
                  </svg>
                  <span className="text-lg font-semibold text-gray-700">
                    Laundry
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-red-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m20.772 10.156-1.368-4.105A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.105A2.003 2.003 0 0 0 2 12v5c0 .753.423 1.402 1.039 1.743-.013.066-.039.126-.039.195V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.062c0-.069-.026-.13-.039-.195A1.993 1.993 0 0 0 22 17v-5c0-.829-.508-1.541-1.228-1.844zM4 17v-5h16l.002 5H4zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6z"></path>
                    <circle cx="6.5" cy="14.5" r="1.5"></circle>
                    <circle cx="17.5" cy="14.5" r="1.5"></circle>
                  </svg>
                  <span className="text-lg font-semibold text-gray-700">
                    Car Parking
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Description
              </h2>
              <p className="mt-2 text-gray-600">{property.description}</p>
            </div>
          </div>
          <div>
            <h4 class="mt-20 text-xl uppercase font-heading font-semibold">
              gallery
            </h4>

            <div className="grid gap-8 mt-5 lg:grid-cols-3  md:grid-cols-3 xxxs:grid-cols-1 place-items-center">
              <div className="relative">
                <Image
                  src="/assets/listings/l5.webp"
                  alt="Property 1"
                  width={400}
                  height={400}
                  className="object-contain w-[400px] h-auto"
                />
              </div>
              <div className="relative">
                <Image
                  src="/assets/listings/l4.webp"
                  alt="Property 3"
                  width={400}
                  height={400}
                  className="object-contain w-[400px] h-auto"
                />
              </div>
              <div className="relative">
                <Image
                  src="/assets/listings/l6.webp"
                  alt="Property 2"
                  width={400}
                  height={400}
                  className="object-contain w-[400px] h-auto"
                />
              </div>
            </div>
          </div>
          <div class="pt-20">
            <div class="">
              <h4 class="text-xl uppercase font-heading font-semibold">
                Location Map
              </h4>
            </div>
            <div class="relative mt-6 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37633.65975720456!2d-73.88896464710062!3d40.67982311122512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c445213731d%3A0x19566ced90a1b555!2sCypress%20Hills%2C%20Brooklyn%2C%20NY%2011233%2C%20USA!5e0!3m2!1sen!2sin!4v1654532259365!5m2!1sen!2sin"
                width="1152"
                height="648"
                class="w-full h-full border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div class="pt-20">
            <h4 class="text-xl uppercase font-heading font-semibold">Share:</h4>
            <div class="mt-5">
              <div class="flex space-x-6 md:order-2">
                <a href="#" class="text-gray-400 hover:text-gray-300">
                  <span class="sr-only">Facebook</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-300">
                  <span class="sr-only">Instagram</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-300">
                  <span class="sr-only">Twitter</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-300">
                  <span class="sr-only">GitHub</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-300">
                  <span class="sr-only">Dribbble</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="px-0 py-20 ">
            <div className="max-w-6xl mx-auto">
              <div>
                <h4 className="text-xl uppercase font-heading font-semibold">
                  Related properties
                </h4>
              </div>
              <div className="grid gap-8 mt-6 md:grid-cols-3">
                {/* Property 1 */}
                <div className="overflow-hidden transition-all duration-150 ease-out bg-white border rounded hover:shadow-xl hover:shadow-gray-200">
                  <div className="relative cursor-zoom-in">
                    <div className="relative z-auto">
                      {/* Use Next.js Image component */}
                      <Image
                        src="/assets/listings/l2.webp"
                        alt="Property Photo"
                        width={400}
                        height={200}
                        className="object-contain"
                        layout="responsive"
                      />
                      <button
                        aria-label="Zoom image"
                        data-rmiz-btn-open="true"
                      ></button>
                    </div>
                    {/* Rest of your content */}
                  </div>
                </div>

                {/* Property 2 */}
                <div className="overflow-hidden transition-all duration-150 ease-out bg-white border rounded hover:shadow-xl hover:shadow-gray-200">
                  <div className="relative cursor-zoom-in">
                    <div className="relative z-auto">
                      {/* Use Next.js Image component */}
                      <Image
                        src="/assets/listings/l2.webp"
                        alt="Property Photo"
                        width={400}
                        height={200}
                        className="object-contain"
                        layout="responsive"
                      />
                      <button
                        aria-label="Zoom image"
                        data-rmiz-btn-open="true"
                      ></button>
                    </div>
                    {/* Rest of your content */}
                  </div>
                </div>

                {/* Property 3 */}
                <div className="overflow-hidden transition-all duration-150 ease-out bg-white border rounded hover:shadow-xl hover:shadow-gray-200">
                  <div className="relative cursor-zoom-in">
                    <div className="relative z-auto">
                      {/* Use Next.js Image component */}
                      <Image
                        src="/assets/listings/l2.webp"
                        alt="Property Photo"
                        width={400}
                        height={200}
                        className="object-contain"
                        layout="responsive"
                      />
                      <button
                        aria-label="Zoom image"
                        data-rmiz-btn-open="true"
                      ></button>
                    </div>
                    {/* Rest of your content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
