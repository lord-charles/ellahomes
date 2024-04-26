import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <section className="bg-cyan-600 mb-20">
      <div className="px-6">
        <div className="max-w-6xl py-10 mx-auto lg:py-0 lg:flex">
          <div className="relative flex items-center justify-center flex-shrink-0 lg:w-[30rem] h-96">
            <div className="relative w-full h-full border-8 border-white shadow-2xl lg:scale-125 ring-1 ring-gray-100">
              <Image
                alt="Featured Villa"
                src="https://res.cloudinary.com/dn3q6mcwp/image/upload/v1709099459/betty%20Airbnb/villa/vieew7z7bwqxaxs2vqtb.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute flex lg:w-40 lg:h-40 xxxs:w-[120px] xxxs:h-[120px] p-1.5 bg-white rounded-full inset-auto lg:-right-32 md:right-[30px] md:top-[200px] xxxs:top-[250px] xxxs:right-[20px]">
              <div className="flex flex-col items-center justify-center w-full h-full border border-red-600 border-dashed rounded-full font-heading">
                <span className="font-medium text-red-600 uppercase">
                  STARTING AT
                </span>
                <span className="text-[15px] f text-red-600">Ksh 30,000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full lg:ml-20">
            <div className="max-w-sm pt-20 pb-10 text-center text-white lg:pt-10">
              <h3 className="text-4xl font-medium uppercase">
                STAND ALONE VILLA
                <br />
                <a className="text-center text-white  text-[17px] font-normal">
                  Nyali, Mombasa
                </a>
              </h3>

              <div className="mt-4">
                <button className="inline-flex px-5 py-3 text-white border rounded-full border-cyan-200 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-1"
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
                  <span>+254721636368</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
