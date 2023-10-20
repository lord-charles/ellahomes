"use client";
import { useEffect } from "react";
import { useState } from "react";
import ListingItem from "../Listings/ListingItem";
import ListingItem2 from "../Listings/ListingItem2";
import ListingItem1 from "../Listings/ListingItem1";

import Link from "next/link";
import { ForRent, ForSale, RecentOffers } from "../../../utils/data";

export default function HomeListings() {
  // Offers

  useEffect(() => {}, []);
  // Places for rent
  useEffect(() => {}, []);
  // Places for rent
  useEffect(() => {}, []);
  return (
    <div>
      <div className="max-w-6xl mx-auto pt-4  relative">
        {RecentOffers.length > 0 && (
          <div className="m-2 mb-10">
            <div className="sm:flex justify-between items-center pb-4">
              <h3 className="text-midnightblue text-2xl lg:text-[25px] font-semibold mb-0 xxxs:text-[20px]">
                Upcoming
              </h3>
              <Link
                href={"/upcoming"}
                className="text-Blueviolet text-[16px] font-medium space-links"
              >
                View more&nbsp;&gt;&nbsp;
              </Link>
            </div>
            <ul className="grid xxxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {RecentOffers.map((listing, index) => (
                <ListingItem key={index} listing={listing} />
              ))}
            </ul>
          </div>
        )}
        {ForRent && ForRent.length > 0 && (
          <div className="m-2 relative top-[20px]">
            <div className="sm:flex justify-between items-center  pb-4">
              <h3 className="text-midnightblue text-2xl lg:text-[25px] font-semibold mb-0 xxxs:text-[20px]">
                Rentals
              </h3>
              <Link
                href={"/listing"}
                className="text-Blueviolet text-[16px] font-medium space-links"
              >
                View more&nbsp;&gt;&nbsp;
              </Link>
            </div>
            <ul className="grid xxxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {ForRent.slice(0, 8).map((listing, index) => (
                <ListingItem1 key={index} listing={listing} />
              ))}
            </ul>
          </div>
        )}
        {ForSale && ForSale.length > 0 && (
          <div className="m-2 mb-9 relative top-[40px]">
            <div className="sm:flex justify-between items-center  pb-4">
              <h3 className="text-midnightblue text-2xl lg:text-[25px] font-semibold mb-0 xxxs:text-[20px]">
                For Sale
              </h3>
              <Link
                href={"/sale"}
                className="text-Blueviolet text-[16px] font-medium space-links"
              >
                View more&nbsp;&gt;&nbsp;
              </Link>
            </div>
            <ul className="grid xxxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {ForSale.map((listing, index) => (
                <ListingItem2 key={index} listing={listing} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
