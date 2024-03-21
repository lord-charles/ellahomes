"use client";
import { useEffect } from "react";
import { useState } from "react";
import ListingItem from "../Listings/ListingItem";
import ListingItem2 from "../Listings/ListingItem2";
import ListingItem1 from "../Listings/ListingItem1";

import Link from "next/link";
import {
  FeaturedData,
  ForRent,
  ForSale,
  RecentOffers,
} from "../../../utils/data";

export default function HomeListings({ airbBnbs }) {
  return (
    <div>
      <div className="max-w-6xl mx-auto pt-4  relative">
        {FeaturedData.length > 0 && (
          <div className="m-2 mb-10">
            <div className="sm:flex justify-between items-center pb-4">
              <h3 className="text-midnightblue text-2xl lg:text-[25px] font-semibold mb-0 xxxs:text-[20px]">
                AirbBnbs
              </h3>
            </div>
            <ul className="grid xxxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {airbBnbs.map((listing, index) => (
                <ListingItem key={index} airbBnb={listing} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
