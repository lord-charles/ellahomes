"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
  {
    name: "Sarah Smith",
    profession: "Satisfied Renter",
    comment:
      "I've rented from Ella Homes for the past three years. They have a wide range of rental properties to choose from, and their service is top-notch. I highly recommend them to anyone in search of a comfortable and well-maintained place to live",
    imgSrc: "/assets/testimonial/user.svg",
  },
  {
    name: "Linda Parker",
    profession: "Happy Homeowner",
    comment:
      "Buying our dream home through Ella Homes was a breeze. Their team was incredibly helpful throughout the entire process, from property selection to closing the deal. We couldn't be happier with our new home!",
    imgSrc: "/assets/mentor/user2.png",
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "Living in a Ella Homes apartment has been a pleasure. The amenities are great, and the location is convenient. The management is responsive to any concerns, making it a worry-free living experience.",
    imgSrc: "/assets/mentor/user3.png",
  },
  {
    name: "Robert Fox",
    profession: "Vacation Renter",
    comment:
      "My family and I had an amazing vacation thanks to Ella Homes. We rented a beautiful vacation property through them, and it exceeded our expectations. The property was clean, well-equipped, and in a perfect location for our getaway.",
    imgSrc: "/assets/mentor/user1.png",
  },
  {
    name: "Leslie Alexander",
    profession: "Repeat Customer",
    comment:
      "I keep coming back to Ella Homes because of their consistency in providing quality properties. Whether it's for a rental, an apartment, or a property purchase, I know I can count on them to meet my housing needs.",
    imgSrc: "/assets/mentor/user2.png",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
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
      <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
          <h2 className="text-2xl text-center font-heading font-semibold text-black pb-4">
            HAPPY CLIENTS
          </h2>
          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div
                  className={`bg-white m-4 p-5 my-20 relative ${
                    i % 2 ? "middleDiv" : "testimonial-shadow"
                  }`}
                >
                  <div className="absolute top-[-45px]">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={100}
                      height={100}
                      className="inline-block"
                    />
                  </div>
                  <h4 className="text-base font-normal text-darkgray my-4">
                    {items.comment}
                  </h4>
                  <hr style={{ color: "#D7D5D5" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2">
                        {items.name}
                      </h3>
                      <h3 className="text-sm font-normal text-lightgray pb-2">
                        {items.profession}
                      </h3>
                    </div>
                    <div className="flex">
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-lightgray" />
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
