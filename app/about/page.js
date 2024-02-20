import React from "react";
import Image from "next/image";

const About = () => {
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
              About Us
            </h1>
          </div>

          <div className="max-w-6xl mx-auto ">
            <div>
              <p
                className="text-lg text-black lg:px-[100px]
              md:px-[100px] xxxs:px-[0px] py-4"
              >
                EllaHomes is Mombasa&apos;s premier real estate and property
                marketing company. We specialize in staying up-to-date with all
                things related to real estate in Mombasa. We&apos;re experts in
                finding the best homes and delivering the latest updates right
                to you. Whether you&apos;re looking to rent or buy, we have you
                covered with a wide selection of available properties.
              </p>
              <p
                className="text-lg text-black lg:px-[100px]
              md:px-[100px] xxxs:px-[0px] py-4"
              >
                If you&apos;re searching for vacant land to build your dream
                home, we&apos;ve got you covered. Our dedicated team is
                constantly on the lookout for properties for sale. Simply browse
                our location listings, select your preferred area, and schedule
                a site visit. We&apos;re committed to a transparent and thorough
                property acquisition process.
              </p>
              <p
                className="text-lg text-black lg:px-[100px]
              md:px-[100px] xxxs:px-[0px] py-4"
              >
                Are you a landlord or landlady looking to fill your properties
                with tenants quickly? Contact us at 0731636368, and we&apos;ll
                help you connect with potential renters. We&apos;re your go-to
                real estate experts in Mombasa, dedicated to providing the best
                solutions for your real estate needs.
              </p>
            </div>

            <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
              <h1 className=" font-semibold text-3xl leading-10 text-center uppercase font-heading">
                How we Work
              </h1>
            </div>
            <div
              className="lg:px-[150px]
              md:px-[100px] xxxs:px-[0px] pb-2"
            >
              <p className="text-black text-[17px]">
                We market rental apartments, homes, and property for sale to a
                wide audience across various online channels. Our content
                reaches out to people from across the country and beyond, and
                with that you can rest assured with us finding interested
                tenants and clients for your homes and property.
              </p>
            </div>

            <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
              <h1 className=" font-semibold text-3xl leading-10 text-center uppercase font-heading">
                what we do
              </h1>
            </div>
            <div
              className="lg:px-[100px]
              md:px-[100px] xxxs:px-[0px]"
            >
              <div>
                <p className="text-purple-400 text-[20px] font-semibold py-1">
                  Real estate marketing
                </p>
                <p className="text-black">
                  The more the number of eyes that see your real estate
                  business, the higher the chances of conversions. Take
                  advantage of our ability to reach out to millions of people
                  through our growing social media channels, and obtain clients
                  from the comfort of your seat. With the ‘delivery culture’
                  dictating affairs in the modern world, Ella Homes will do the
                  product delivery to potential clients and eventually bear
                  results.
                </p>
              </div>

              <div>
                <p className="text-purple-400 text-[20px] font-semibold py-1">
                  Property management
                </p>
                <p className="text-black">
                  Ella Homes are proud to step into this field due to public
                  demand. We have built trust with property developers and home
                  owners, and we are ready to take these relationships to the
                  next level. Allow us to manage your rental apartment or home
                  and take care of affairs regarding your real estate business.
                </p>
              </div>

              <div>
                <p className="text-purple-400 text-[20px] font-semibold py-1">
                  Consultancy services
                </p>
                <p className="text-black">
                  Ella Homes are up to date with real estate trends to help you
                  navigate the complexities of the real estate market. With a
                  passion for matching individuals and families with their dream
                  homes or investment properties, Ella Homes provides
                  comprehensive consultancy services to ensure a seamless and
                  successful real estate journey. Whether you&apos;re buying,
                  selling, or investing, we are here to provide expert guidance
                  and support every step of the way.
                </p>
              </div>

              <div>
                <p className="text-purple-400 text-[20px] font-semibold py-1">
                  House Hunting
                </p>
                <p className="text-black">
                  With our vast knowledge of Mombasa, at Ella Homes we make the
                  process of finding your new home easier and faster. With a
                  wide range of houses and properties to choose from, house
                  hunting could not get more fun than at Ella Homes.
                </p>
              </div>

              <div>
                <p className="text-purple-400 text-[20px] font-semibold py-1">
                  Furnished Homes Management
                </p>
                <p className="text-black">
                  From maintenance to tenant or owner relations, Ella Homes
                  ensures smooth operations and as a property owner that all
                  your clients get beyond five star experience.
                </p>
              </div>

              <div>
                <p className="text-purple-400 text-[20px] font-semibold py-1">
                  Sale of property (commercial and residential)
                </p>
                <p>
                  At Ella Homes we take care of the real estate investors as
                  well. We will save you from the hustle of property showing,
                  negotiations, repairs , the crazy paperwork and everything
                  else that comes with the selling of a property.
                </p>
              </div>
            </div>

            <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
              <h1 className=" font-semibold text-3xl leading-10 text-center uppercase font-heading">
                Our Services
              </h1>
            </div>
            <div className="justify-center flex">
              <ol className="custom-list ml-10 text-[17px]">
                <li>Real estate marketing</li>
                <li>Consultancy Services</li>
                <li>Property Management</li>
                <li>House Hunting</li>
                <li>Furnished homes Management</li>
                <li>Sale of property</li>
                <li>Real Estate</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
