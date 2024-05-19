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
    name: "Eva",
    profession: "2 years on Airbnb",
    comment:
      "Betty was very friendly and helped us with all our questions also she even let us check out later, which was very kind.The location is very good, the sea is just across the street and there is also an supermarket very close.",
    imgSrc: "/assets/testimonial/eva.webp",
  },

  {
    name: "FaberCollins",
    profession: "Johannesburg, South Africa",
    comment:
      "The apartment was great, spacious and in a good location. Access was easy and space for parking was provided. We just had some small issues, which Betty immediately attended to, so we really enjoyed our stay.",
    imgSrc: "/assets/testimonial/FaberCollins.webp",
  },
  {
    name: "With",
    profession: "United Kingdom",
    comment:
      "I had an amazing stay at this charming B&B! The host was incredibly friendly and welcoming, making me feel right at home. The place was spotlessly clean, and the cozy atmosphere added to the overall experience. ",
    imgSrc: "/assets/testimonial/with.webp",
  },
  {
    name: "Kari",
    profession: "Davis, California",
    comment:
      "Betty's place was fantastic. The rooms were spotless & cute. The air conditioners were great - really helped us sleep well in steamy Mombasa. Betty was so nice. She checked on us & let us leave luggage so we didn't have to carry it around.",
    imgSrc: "/assets/testimonial/kari.webp",
  },
  {
    name: "Otto Bryne",
    profession: "Bamako, Mali",
    comment:
      "Great Accommodation and Host. Neat apartment and well situated.Will recommend to anyone traveling to Mombasa",
    imgSrc: "/assets/testimonial/OttoBryne.webp",
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
                      width={80}
                      height={80}
                      className="inline-block rounded-full"
                    />
                  </div>
                  <h4 className="text-[14px] font-normal text-darkgray my-4">
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
