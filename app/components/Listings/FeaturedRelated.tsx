"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import slideanimation from "../../../public/slide.json";
import { Divider } from "@mui/material";
import { FeaturedData } from "@/utils/data";
// CAROUSEL DATA

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div>
        <div className="mx-auto max-w-6xl sm:py-2 px-2 lg:px-8  relative">
          <div className="absolute xxxs:left-[40%] lg:left-[50%] lg:bottom-10 xxxs:bottom-0  z-[9999]">
            <div className="flex items-center space-x-2">
              <Lottie
                animationData={slideanimation}
                loop={true}
                width={100}
                height={100}
                className="w-[70px]"
              />
              <h2 className="text-gray-500 relative top-1.5 lg:visible md:visible xxxs:hidden">
                slide...
              </h2>
            </div>
          </div>

          <Slider {...settings}>
            {FeaturedData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 px-0 pt-3 pb-12 my-20 shadow-courses rounded-2xl">
                  <div className="relative rounded-3xl">
                    <Image
                      src={items.images[0]}
                      alt="gaby"
                      width={389}
                      height={262}
                      className="m-auto object-cover h-[270px] w-full rounded-sm clipPath"
                    />
                    <div className="bg-orange-300 absolute rounded-full top-2 left-2">
                      <h2 className="px-3 py-1">{items.type}</h2>
                    </div>
                    <div className="absolute right-5 -bottom-2 bg-Blueviolet rounded-full p-4 cursor-pointer">
                      <h3 className="text-white uppercase text-center text-sm font-medium">
                        <Image
                          src="/icons/heart.png"
                          width={35}
                          height={35}
                          alt="icon"
                        />
                      </h3>
                    </div>
                  </div>

                  <div className="px-3">
                    <h4 className="text-xl font-bold pt-6 text-black">
                      {items.heading1}
                    </h4>

                    <div>
                      <h3 className="text-base font-normal pt-3 opacity-75">
                        {items.heading2}
                      </h3>
                    </div>

                    <div className="flex justify-between items-center py-6">
                      <div className="flex gap-4">
                        <h3 className="text-red text-22xl font-medium">
                          {items.rating}
                        </h3>
                        <div className="flex">
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium">{items.price}</h3>
                      </div>
                    </div>

                    {/* <hr style={{ color: "#C4C4C4" }} /> */}

                    <div className="flex justify-between pt-6 border p-2 items-center h-[55px] overflow-hidden">
                      <div className="text-gray-500 relative top-[-4px] text-[15px] text-center">
                        {items.beds} Beds
                      </div>
                      <Divider className="h-[70px] w-[1px] " />
                      <div className="text-gray-500 relative top-[-4px] text-[15px] text-center">
                        {items.sf}SF
                      </div>
                      <Divider className="h-[70px] w-[1px] " />
                      <div className="text-gray-500 relative top-[-4px] text-[15px] text-center">
                        {items.bath}Baths
                      </div>
                      <Divider className="h-[70px] w-[1px] " />
                      <Link
                        href={`/listing/${items.id}`}
                        className="relative top-[-8px]"
                      >
                        <button className=" h-[40px] cursor-pointer bg-Blueviolet  hover:bg-semiblueviolet  hover:text-white text-Blueviolet font-medium px-1 rounded-full">
                          <h2 className="font-semibold text-white text-[13px] text-center px-3 ">
                            Details
                          </h2>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
