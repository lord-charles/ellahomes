"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ForRent, ForSale, RecentOffers } from "../../utils/data";

const Gallery = () => {
  const [data, setdata] = useState([...RecentOffers, ...ForSale, ...ForRent]);

  return (
    <main className="flex flex-col flex-1">
      <div className="pb-0">
        <div className="absolute xxxs:top-[9vh] lg:top-[11vh] z-[1]">
          <Image
            src="/banners/bg1.jpeg"
            width={3000}
            height={3000}
            alt="bg"
            className="object-cover w-screen lg:h-[27rem] md:h-[27rem] xxxs:h-[25rem] blur-[0px]"
          />
        </div>

        <section className="px-6 py-12 mt-[400px]">
          <h1 className="text-3xl leading-10 text-center uppercase font-heading font-semibold">
            Gallery
          </h1>
          <div className="relative max-w-6xl mx-auto">
            <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
              {/* Repeat the following code block for each item */}
              {data.map((listing, index) => (
                <div key={index}>
                  <div className="relative rounded-sm group aspect-square">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "100%", // Set to '100%' to fill the parent container
                        height: "100%", // Set to '100%' to fill the parent container
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <Image
                        src={listing.images[0]}
                        alt="Property 10"
                        layout="fill"
                        objectFit="cover"
                      />
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                      <div className="space-x-4">
                        <button className="p-5 text-red-400 bg-white rounded-full focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-medium">{listing.heading1}</h4>
                    <span className="text-sm text-gray-500">
                      {listing.heading2}
                    </span>
                  </div>
                </div>
              ))}
              {/* End of code block */}
            </div>

            {/* Pagination */}
            <div className="mt-12">
              <div className="flex items-center justify-center space-x-2 md:space-x-5">
                <button className="flex items-center justify-center w-10 h-10 rounded-md bg-cyan-200 text-cyan-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="space-x-2 md:space-x-2.5 flex items-center">
                  <button className="flex items-center justify-center w-10 h-10 text-white rounded-md bg-lime-500 focus:outline-none">
                    1
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-md text-lime-500 bg-lime-200 focus:outline-none">
                    2
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-md text-lime-500 bg-lime-200 focus:outline-none">
                    3
                  </button>
                  <span className="flex items-center justify-center w-5 h-10 rounded-md">
                    …
                  </span>
                  <button className="flex items-center justify-center w-10 h-10 rounded-md text-lime-500 bg-lime-200 focus:outline-none">
                    18
                  </button>
                </div>
                <button className="flex items-center justify-center w-10 h-10 rounded-md bg-cyan-200 text-cyan-500 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Gallery;
