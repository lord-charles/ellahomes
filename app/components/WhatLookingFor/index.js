import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 mt-[100px]">
      <h2 className="text-2xl text-center font-heading font-semibold">
        DISCOVER YOUR DESIRE
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 h-[35rem] gap-5 mt-10">
        <div className="md:row-span-2">
          <div className="relative h-full">
            <Image
              src="/assets/listings/l2.webp"
              alt="Homes"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              className="rounded-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 rounded-sm">
              <h4 className="text-3xl font-bold">150</h4>
              <p className="font-semibold uppercase opacity-90">
                Independent Homes
              </p>
            </div>
          </div>
        </div>
        <div className="md:row-span-1">
          <div className="relative h-full">
            <Image
              src="/assets/listings/l3.webp"
              alt="Homes"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              className="rounded-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 rounded-sm">
              <h4 className="text-3xl font-bold">23</h4>
              <p className="font-semibold uppercase opacity-90">Townships</p>
            </div>
          </div>
        </div>
        <div className="md:row-span-2">
          <div className="relative h-full">
            <Image
              src="/assets/listings/l7.webp"
              alt="Homes"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              className="rounded-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 rounded-sm">
              <h4 className="text-3xl font-bold">456</h4>
              <p className="font-semibold uppercase opacity-90">
                Office Spaces
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-full">
            <Image
              src="/assets/listings/l8.webp"
              alt="Homes"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              className="rounded-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 rounded-sm">
              <h4 className="text-3xl font-bold">260</h4>
              <p className="font-semibold uppercase opacity-90">Apartments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
