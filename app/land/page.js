"use client";
import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import slideanimation from "../../public/nodata.json";

const Land = () => {
  return (
    <main className="flex flex-col flex-1">
      <div className="pb-0">
        <div className="absolute xxxs:top-[9vh] lg:top-[11vh] z-[1]">
          <Image
            src="/banners/bg5.jpeg"
            width={3000}
            height={3000}
            alt="bg"
            className="object-cover w-screen lg:h-[27rem] md:h-[27rem] xxxs:h-[25rem] blur-[0px]"
          />
        </div>
        <div className="px-6 py-12 mt-[340px]">
          <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
            <h1 className=" font-semibold text-3xl leading-10 text-center uppercase font-heading">
              Land for Sale
            </h1>
          </div>

          <div className="max-w-6xl mx-auto ">
            <div className="flex justify-center">
              <Lottie
                animationData={slideanimation}
                loop={true}
                width={400}
                height={400}
                className="w-[400px]"
              />
              <p className="absolute top-[65rem] text-gray-500 text-[15px] py-2 text-center">
                Please come back later
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Land;
