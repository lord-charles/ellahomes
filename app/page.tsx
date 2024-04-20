"use client";
import Banner from "./components/Banner/index";
import Companies from "./components/Companies/Companies";
import Listings from "./components/Listings/featured";
import Mentor from "./components/Mentor/index";
import Testimonials from "./components/Testimonials/index";
import Newsletter from "./components/Newsletter/Newsletter";
import HomeListings from "./components/Home/index";
import { Looking, FooterBanner } from "./components/";
import { Toaster } from "react-hot-toast";
import { base_url } from "../utils/baseUrl";
import axios from "axios";
import { useEffect, useState } from "react";
import SkeletonCard from "./ui/SkeletonCard";

export default function Home() {
  const [featuredData, setFeaturedData] = useState([]);
  const [airbBnbs, setAirbBnbs] = useState([]);


  const fetchFeaturedListings = async () => {
    try {
      const res = await axios.get(`${base_url}products?isFeatured=true`);
      setFeaturedData(res.data.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAirBnbs = async () => {
    try {
      const res = await axios.get(`${base_url}products`);
      setAirbBnbs(res.data.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeaturedListings();
    fetchAirBnbs();
  }, []);

  return (
    <main>
      <Toaster />
      <Banner />
      {featuredData.length > 0 ? (
        <Listings featuredData={featuredData} />
      ) : (
        <div className="flex lg:mx-[340px] xl:mx-[200px] md:mx-[10px] xxxs:mx-[5px] xxl:mx-[340px] justify-center gap-4 mt-[50px]">
          <SkeletonCard />
          <div className="flex xxxs:hidden md:flex gap-4">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      )}
      {airbBnbs.length > 0 ? (
        <HomeListings airbBnbs={airbBnbs} />
      ) : (
        <div className="flex lg:mx-[340px] xl:mx-[200px] md:mx-[10px] xxxs:mx-[5px] xxl:mx-[340px] justify-center gap-4 mt-[50px]">
          <SkeletonCard />
          <div className="flex xxxs:hidden md:flex gap-4">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      )}
      <Looking />
      {/* <Mentor /> */}
      <Testimonials />
      <FooterBanner />
      {/* <Newsletter /> */}
      {/* <Companies /> */}
    </main>
  );
}
