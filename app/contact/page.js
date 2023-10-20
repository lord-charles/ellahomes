import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <main className="flex flex-col flex-1">
      <div className="pb-0">
        <div className="absolute xxxs:top-[9vh] lg:top-[11vh] z-[1]">
          <Image
            src="/banners/bg4.jpeg"
            width={3000}
            height={3000}
            alt="bg"
            className="object-cover w-screen lg:h-[27rem] md:h-[27rem] xxxs:h-[25rem] blur-[0px]"
          />
        </div>
        <div className="px-6 py-12 mt-[340px]">
          <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
            <h1 className=" font-semibold text-3xl leading-10 text-center uppercase font-heading">
              Contact Us
            </h1>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="mt-6 space-y-5 md:flex md:items-center md:space-y-0 md:space-x-5">
              {/* Address */}
              <div className="flex flex-col items-center justify-center space-y-4 text-center md:w-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <div>
                  <h4 className="text-2xl uppercase font-heading">Address</h4>
                  <p className="mt-2 leading-9 text-black">
                    Atto Digi Mall <br />
                    2nd Floor, Kiamunyi <br />
                    Nakuru city
                  </p>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col items-center justify-center space-y-4 text-center md:w-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
                <div>
                  <h4 className="text-2xl uppercase font-heading">
                    Email Address
                  </h4>
                  <p className="mt-2 leading-8 text-gray-700">
                    info@ellahomeske.com <br />
                    support@ellahomeske.com
                  </p>
                </div>
              </div>

              {/* CALL US */}
              <div className="flex flex-col items-center justify-center space-y-4 text-center md:w-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                  ></path>
                </svg>
                <div>
                  <h4 className="text-2xl uppercase font-heading">CALL US</h4>
                  <p className="mt-2 leading-8 text-gray-700">+254740315545</p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-2xl leading-10 text-center uppercase font-heading">
                Message Us
              </h2>
              <form className="mt-8">
                <input
                  type="checkbox"
                  id=""
                  className="hidden"
                  name="botcheck"
                  style={{ display: "none" }}
                />
                <div className="grid gap-8 md:grid-cols-2">
                  <input
                    type="text"
                    className="px-1 outline-none border p-2 rounded-md border-b focus:ring-0 border-gray-300 focus:border-green-500 "
                    placeholder="Name*"
                    name="name"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="px-1 outline-none border p-2 border-b focus:ring-0 border-gray-300 focus:border-green-500 rounded-md"
                    name="email"
                  />
                  <input
                    type="text"
                    className="px-1 outline-none border p-2 border-b focus:ring-0 border-gray-300 focus:border-green-500 rounded-md"
                    placeholder="Phone*"
                    name="phone"
                  />
                  <select
                    id="type"
                    className="px-1 outline-none border p-2 border-b focus:ring-0 border-gray-300 focus:border-green-500 rounded-md"
                    name="type"
                  >
                    <option>Buy</option>
                    <option>Sell</option>
                  </select>
                  <textarea
                    className="h-44 px-1 outline-none border rounded-md border-gray-300 md:col-span-2 focus:ring-0  focus:border "
                    placeholder="Message*"
                    name="message"
                  ></textarea>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <button
                    type="submit"
                    className="py-3 font-medium text-white rounded-full bg-lime-600 px-7 w-44"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
