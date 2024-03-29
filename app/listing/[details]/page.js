"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FeaturedData } from "@/utils/data";
import FeaturedRelated from "../../components/Listings/FeaturedRelated";
import axios from "axios";
import { base_url } from "@/utils/baseUrl";
import SkeletonCard from "../../ui/SkeletonCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PropertyDetail = ({ params }) => {
  const { details } = params;
  const [currentProduct, setCurrentProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(currentProduct);

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${base_url}products/${details}`);
      // console.log(res.data);
      setCurrentProduct(res.data.findProduct);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="w-screen overflow-x-hidden">
      {isLoading || !currentProduct ? (
        <>
          <div className="lg:mx-[320px] flex-1 grid md:grid-cols-3 xxxs:grid-cols-1 content-center gap-4 mt-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
          <div className="lg:mx-[320px] flex-1 grid md:grid-cols-3 xxxs:grid-cols-1 content-center gap-4 mt-6 xxxs:hidden md:grid">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </>
      ) : (
        currentProduct && (
          <div className="px-3 pb-20 mt-[10px]">
            <div className="relative max-w-6xl  pb-10 mx-auto ">
              <h1 className="md:text-3xl lg:text-3xl  xxxs:text-2xl  leading-10 text-center uppercase font-heading">
                {currentProduct?.title}
              </h1>
              <h1 className="md:text  xxxs:text-[17px] leading-10 text-center  font-heading">
                {currentProduct?.location?.name}
              </h1>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-6 md:flex md:space-x-12 md:justify-between md:space-y-0">
                <div className="flex flex-1 xxxs:space-x-4 md:space-x-8 lg:space-x-8">
                  <div className="flex items-end space-x-4">
                    <div className="flex flex-col">
                      <span className="mb-2 text-sm font-semibold text-gray-600 uppercase">
                        {currentProduct.length > 0 &&
                          currentProduct?.category[0]?.title}
                      </span>
                      <span className="flex items-baseline lg:text-4xl md:text-4xl xxxs:text-xl font-semibold text-red-400">
                        {currentProduct?.price?.toLocaleString()}
                        <sup className="text-xs text-gray-500 -top-0.5 pl-1">
                          /Night
                        </sup>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="xxxs:flex md:hidden">
                  <Carousel
                    autoPlay
                    infiniteLoop
                    autoFocus
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                  >
                    {currentProduct?.images?.map((item, index) => {
                      return (
                        <div key={index}>
                          <Image
                            height={900}
                            width={900}
                            src={item?.url}
                            className="h-[220px] relative top-2.5 w-[300px] rounded-md object-cover p-1"
                            alt="main banner"
                          />
                        </div>
                      );
                    })}
                  </Carousel>
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
              <div className="xxxs:hidden md:flex lg:flex">
                <div className="grid grid-rows-2 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3 aspect-[16/7] flex-1">
                  <div className="relative col-span-2 row-span-2 xxxs:h-[200px] md:h-full">
                    <Carousel
                      autoPlay
                      infiniteLoop
                      autoFocus
                      showArrows={false}
                      showStatus={false}
                      showThumbs={false}
                      showIndicators={false}
                    >
                      {currentProduct?.images?.map((item, index) => {
                        return (
                          <div key={index}>
                            <Image
                              height={900}
                              width={900}
                              src={item?.url}
                              className="h-[510px] w-[300px] rounded-md object-cover p-1"
                              alt="main banner"
                            />
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                  <div className="relative">
                    {currentProduct?.images && (
                      <Image
                        src={currentProduct.images[1].url}
                        alt="Property 6"
                        layout="fill"
                        objectFit="cover"
                      />
                    )}
                  </div>
                  <div className="relative">
                    {currentProduct?.images && (
                      <Image
                        src={currentProduct.images[2].url}
                        alt="Property 9"
                        layout="fill"
                        objectFit="cover"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="md:px-20">
                <div className="pt-20">
                  <h4 className="text-xl uppercase font-heading font-semibold">
                    Overview
                  </h4>
                  <p className="mt-4 leading-9 text-gray-600">
                    {currentProduct?.description}
                  </p>
                </div>
                <div className="pt-10">
                  <h4 className="text-xl uppercase font-heading">Amenities</h4>
                  <div className="grid gap-6 mt-8 md:grid-cols-3">
                    {currentProduct?.amenities?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Image
                            src={item.icon}
                            width={30}
                            height={30}
                            alt="icon"
                          />
                          <span className="text-lg font-semibold text-gray-700">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Description
                  </h2>
                  <p className="mt-2 text-gray-600 text-[14px]">
                    {currentProduct?.richDescription}
                  </p>
                </div>
              </div>
              <div>
                <h4 class="mt-20 text-xl uppercase font-heading font-semibold">
                  gallery
                </h4>
                <h4 class="mt-4  text-[20px] font-serif font-bold underline">
                  Images
                </h4>
                <div className="grid gap-8 mt-5 lg:grid-cols-3  md:grid-cols-3 xxxs:grid-cols-1 place-items-center">
                  {currentProduct?.images?.map((item, index) => {
                    return (
                      <div key={index} className="relative">
                        <Image
                          src={item?.url}
                          alt="Property 1"
                          width={400}
                          height={400}
                          className="object-cover w-[400px] h-[200px]"
                        />
                      </div>
                    );
                  })}
                </div>

                <div>
                  {currentProduct?.videos?.length > 0 && (
                    <div>
                      <h4 class="mt-4  text-[20px] font-serif font-bold underline">
                        Videos
                      </h4>
                      <div className="grid gap-8 mt-5 lg:grid-cols-3  md:grid-cols-3 xxxs:grid-cols-1 place-items-center">
                        {currentProduct?.videos?.map((item, index) => {
                          return (
                            <div key={index} className="relative">
                              <video
                                controls
                                className="object-cover w-[400px] h-[200px]"
                              >
                                <source src={item?.url} />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
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
                    src={currentProduct?.location?.url}
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
                <h4 class="text-xl uppercase font-heading font-semibold">
                  Share:
                </h4>
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
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PropertyDetail;
