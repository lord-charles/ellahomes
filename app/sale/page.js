"use client";
import React, { useState } from "react";
import ListingItem2 from "../components/Listings/ListingItem2";
import { ForSale } from "@/utils/data";
import Image from "next/image";
import { Pagination, Stack } from "@mui/material";
import Lottie from "lottie-react";
import slideanimation from "../../public/nodata.json";

export default function PropertyListing() {
  const [listings, setListings] = useState(ForSale);
  const listingsPerPage = 6;
  const [show, setShow] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    propertyType: "",
    beds: null,
  });

  // Function to apply filters and update the listings
  const applyFilters = () => {
    let filteredListings = ForSale;

    if (filters.propertyType) {
      filteredListings = filteredListings.filter(
        (listing) => listing.propertyType === filters.propertyType
      );
    }

    if (filters.beds !== null) {
      filteredListings = filteredListings.filter(
        (listing) => listing.beds === filters.beds
      );
    }

    setListings(filteredListings);
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value,
    });
  };

  // Handle reset filters
  const handleResetFilters = () => {
    setFilters({
      propertyType: "",
      beds: null,
    });
    setListings(ForSale);
  };

  // Pagination logic
  const totalListings = listings.length;
  const totalPages = Math.ceil(totalListings / listingsPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  const startIndex = (currentPage - 1) * listingsPerPage;
  const endIndex = startIndex + listingsPerPage;
  const listingsToDisplay = listings.slice(startIndex, endIndex);

  return (
    <main className="flex flex-col flex-1">
      <div className="">
        <div className="bg-brand-accent relative">
          <div className="relative max-w-6xl pt-16 pb-10 mx-auto md:pt-20">
            <h1 className="text-3xl leading-10 text-center uppercase font-heading font-semibold">
              Property Listing
            </h1>
          </div>
        </div>
        <div className="px-2 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center">
              <div className="flex justify-center">
                <h2 className="text-xl text-center leading-10 uppercase font-heading">
                  Home For Sale
                </h2>
              </div>
            </div>

            <div className="mt-8 lg:flex w-full">
              <div className="w-full lg:pr-8 lg:w-4/12">
                <div className="bg-white border rounded-sm shadow-lg mb-7">
                  <div className="px-6 py-4 border-b">
                    <h3 className="flex text-lg text-red-400 uppercase font-heading">
                      <span> Filter Section</span>
                      <button
                        className="ml-auto text-sm text-gray-600 lg:hidden"
                        onClick={() => setShow(!show)}
                      >
                        {show ? "Show" : "Hide"}
                      </button>
                    </h3>
                  </div>
                  <div
                    className={`px-6 py-10 space-y-10 ${
                      show ? "xxxs:hidden lg:block" : "visible"
                    }`}
                  >
                    <div>
                      <h3 className="uppercase font-heading">Property Type</h3>
                      <select
                        id="type"
                        name="type"
                        className="w-full px-6 py-3 mt-4 border-gray-200 rounded-sm"
                        value={filters.propertyType}
                        onChange={(e) =>
                          handleFilterChange("propertyType", e.target.value)
                        }
                      >
                        <option value="">All</option>
                        <option value="apartment">Appartments</option>
                        <option value="owncompound">Own Compound</option>
                      </select>
                    </div>

                    <div>
                      <h3 className="uppercase font-heading">
                        Number of Bedrooms
                      </h3>
                      <select
                        id="bedrooms"
                        name="bedrooms"
                        className="w-full px-6 py-3 mt-4 border-gray-200 rounded-sm"
                        value={filters.beds}
                        onChange={(e) =>
                          handleFilterChange("beds", parseInt(e.target.value))
                        }
                      >
                        <option value={null}>All</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                    </div>

                    {/* Other filter options go here */}
                    {/* ...

                    <div>
                      <h3 className="uppercase font-heading">Swimming Pool</h3>
                      <div className="mt-4 space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="pool"
                            value="yes"
                            className="mr-2"
                          />
                          Yes
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="pool"
                            value="no"
                            className="mr-2"
                          />
                          No
                        </label>
                      </div>
                    </div>

                    ... */}

                    <div className="mt-10">
                      <button
                        className="w-full px-6 py-3 bg-red-400 text-black uppercase font-heading rounded-full bg-kellygreen"
                        onClick={applyFilters}
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-8/12">
                {listingsToDisplay && listingsToDisplay.length > 0 ? (
                  <div className="m-2 mb-9 relative top-[40px]">
                    <ul className="grid xxxs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
                      {listingsToDisplay.map((listing, index) => (
                        <ListingItem2 key={index} listing={listing} />
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <Lottie
                      animationData={slideanimation}
                      loop={true}
                      width={400}
                      height={400}
                      className="w-[400px]"
                    />
                  </div>
                )}

                <div className=" p-8 flex justify-center">
                  <Stack spacing={2} justifyContent="center" mt={2}>
                    <Pagination
                      count={totalPages}
                      page={currentPage}
                      onChange={handlePageChange}
                      variant="outlined"
                      color="primary"
                    />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
