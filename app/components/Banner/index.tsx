
"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CorouselImages } from "@/utils/data";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative top-[10px]">
      <div className="lg:mx-[340px] xl:mx-[200px] md:mx-[10px] xxxs:mx-[5px] xxl:mx-[340px] ">
        <div className="flex justify-between items-center lg:flex-row xxxs:flex-col space-y-4">
          <div className="lg:w-[50%] h-fit xxxs:w-[100%] rounded-md">
            <Carousel
              autoPlay
              infiniteLoop
              autoFocus
              showArrows={false}
              showStatus={false}
              showThumbs={false}
            >
              {CorouselImages.map((item, index) => {
                return (
                  <div key={index}>
                    <Image
                      height={900}
                      width={900}
                      src={item.image}
                      className="md:h-[420px] relative top-2.5 xl:w-[400px] xxxs:h-[200px] w-[450px] rounded-md object-cover p-1"
                      alt="main banner"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>

          <div className="grid grid-cols-2 md:gap-2 xxxs:gap-1 xl:w-[48%]">
            <div>
              <Image
                src="/assets/banner/5432848.jpg"
                height={600}
                width={600}
                className="lg:w-[270px] xxxs:w-[250px] md:w-[430px] md:h-[200px] xxxs:h-[150px]  object-cover rounded-md"
                alt="image"
              />
            </div>
            <div>
              <Image
                src="/assets/banner/5432929.jpg"
                height={600}
                width={600}
                className="lg:w-[270px] xxxs:w-[250px] md:w-[430px] md:h-[200px] xxxs:h-[150px]  object-cover rounded-md"
                alt="image"
              />
            </div>
            <div>
              <Image
                src="/assets/banner/6165194.jpg"
                height={600}
                width={600}
                className="lg:w-[270px] xxxs:w-[250px] md:w-[430px] md:h-[200px] xxxs:h-[150px]  object-cover rounded-md"
                alt="image"
              />
            </div>
            <div>
              <Image
                src="/assets/banner/5432848.jpg"
                height={600}
                width={600}
                className="lg:w-[270px] xxxs:w-[250px] md:w-[430px] md:h-[200px] xxxs:h-[150px]  object-cover rounded-md"
                alt="image"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between relative top-[40px] space-x-5 lg:mx-[200px] md:mx-[200px] xxxs:mx-[15px] pb-10">
          <div className="flex gap-2">
            <Image
              src="/assets/banner/check-circle.svg"
              alt="check-image"
              width={30}
              height={30}
              className="smallImage"
            />
            <p className="text-sm sm:text-lg font-semibold text-black text-center">
              Vacation Ready
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/banner/check-circle.svg"
              alt="check-image"
              width={30}
              height={30}
              className="smallImage"
            />
            <p className="text-sm sm:text-lg font-semibold text-black text-center">
              Memorable Stays
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/banner/check-circle.svg"
              alt="check-image"
              width={30}
              height={30}
              className="smallImage"
            />
            <p className="text-sm sm:text-lg font-semibold text-black text-center">
              Prime Locations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;




