"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { base_url } from "@/utils/baseUrl";
import SkeletonCard from "../../ui/SkeletonCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import Cookies from "js-cookie";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import PropTypes from "prop-types";

const PropertyDetail = ({ params }) => {
  const { details } = params;
  const [currentProduct, setCurrentProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${base_url}products/${details}`);
      // console.log(res.data);
      setCurrentProduct(res.data.findProduct);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      setAuthenticated(true);
    } else {
      console.log("Token not found in cookie");
    }

    getProduct();
  }, []);

  const emails = ["username@gmail.com", "user02@gmail.com"];
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
      onClose(selectedValue);
    };

    const handleWhatsAppClick = () => {
      const phoneNumber = "254701374731"; // Replace with your WhatsApp number
      const message = `Hello, I would like to book room ${currentProduct.title}.`; // Your pre-filled message
      const encodedMessage = encodeURIComponent(message);
      window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    };

    const handleWhatsAppClick2 = () => {
      const phoneNumber = "254717808035"; // Replace with your WhatsApp number
      const message = `Hello, I would like to book room ${currentProduct.title}.`; // Your pre-filled message
      const encodedMessage = encodeURIComponent(message);
      window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    };

    const handleGmailClick = () => {
      const email = "ellaholidayhomeskenya@gmail.com";
      const subject = encodeURIComponent("Room Booking Inquiry");
      const body = encodeURIComponent(
        `Hello, I would like to book  ${currentProduct.title}.`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    const handlePhoneClick = () => {
      const phoneNumber = "+254701374731";
      window.location.href = `tel:${phoneNumber}`; //
    };
    const handlePhoneClick2 = () => {
      const phoneNumber = "+254717808035";
      window.location.href = `tel:${phoneNumber}`; //
    };

    const handleSMSClick = () => {
      const phoneNumber = "+254701374731"; // Replace with your phone number
      const message = encodeURIComponent(
        `Hello, I would like to book room  ${currentProduct.title}.`
      );
      window.location.href = `sms:${phoneNumber}?body=${message}`;
    };

    const handleSMSClick2 = () => {
      const phoneNumber = "+254717808035"; // Replace with your phone number
      const message = encodeURIComponent(
        `Hello, I would like to book room  ${currentProduct.title}.`
      );
      window.location.href = `sms:${phoneNumber}?body=${message}`;
    };

    return (
      <Dialog onClose={handleClose} open={open}>
        <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <ListItemButton onClick={() => handleWhatsAppClick()}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={"Contact via WhatsApp1"} />
            </ListItemButton>
          </ListItem>

          <ListItem disableGutters>
            <ListItemButton onClick={() => handleWhatsAppClick2()}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={"Contact via WhatsApp2"} />
            </ListItemButton>
          </ListItem>

          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={() => handlePhoneClick()}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Contact via Phone1" />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={() => handlePhoneClick2()}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Contact via Phone2" />
            </ListItemButton>
          </ListItem>

          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={() => handleSMSClick()}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Contact via SMS1" />
            </ListItemButton>
          </ListItem>

          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={() => handleSMSClick2()}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Contact via SMS2" />
            </ListItemButton>
          </ListItem>

          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={() => handleGmailClick()}>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Contact via Gmail" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    );
  }

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  return (
    <div className="w-screen overflow-x-hidden">
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />

      {isLoading || !currentProduct ? (
        <>
          <div className="lg:mx-[320px] flex-1 grid md:grid-cols-3 xxxs:grid-cols-1 content-center gap-4 mt-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
          <div className="lg:mx-[320px] flex-1 grid md:grid-cols-3 xxxs:grid-cols-1 content-center gap-4 mt-6 xxxs:hidden md:grid">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </>
      ) : (
        currentProduct && (
          <div className="px-3 pb-20 mt-[20px]">
            <div className="relative max-w-6xl  pb-10 mx-auto ">
              <h1 className="md:text-3xl lg:text-3xl  xxxs:text-2xl  leading-10 text-center uppercase font-heading font-bold">
                {currentProduct?.title}
              </h1>
              <h1 className="md:text  xxxs:text-[17px] leading-10 text-center  font-heading">
                {currentProduct?.location?.name}
              </h1>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-6 md:flex md:space-x-12 md:justify-between md:space-y-0">
                <div className="flex flex-1 xxxs:space-x-4 md:space-x-8 lg:space-x-8">
                  <div className="flex items-end space-x-4">
                    <div className="flex flex-col">
                      <span className="mb-2 text-sm font-semibold text-gray-600 uppercase">
                        {currentProduct.length > 0 &&
                          currentProduct?.category[0]?.title}
                      </span>
                      <span className="flex items-baseline lg:text-4xl md:text-4xl xxxs:text-xl font-semibold text-red-400">
                        {currentProduct?.price?.toLocaleString()}
                        <sup className="text-xs text-gray-500 -top-0.5 pl-1">
                          /Night
                        </sup>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="xxxs:flex md:hidden">
                  <Carousel
                    autoPlay
                    infiniteLoop
                    autoFocus
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                  >
                    {currentProduct?.images?.map((item, index) => {
                      return (
                        <div key={index}>
                          <Image
                            height={900}
                            width={900}
                            src={item?.url}
                            className="h-[220px] relative top-2.5 w-[300px] rounded-md object-cover p-1"
                            alt="main banner"
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>

                <div className="flex flex-col space-y-6 md:space-x-6 md:items-end md:flex-row md:space-y-0">
                  <Link
                    href={`/contact`}
                    className="px-8 py-4 font-medium rounded-full text-cyan-500 bg-cyan-100 focus:outline-none"
                  >
                    Request Callback
                  </Link>
                  <div>
                    {authenticated ? (
                      // <Link href={`/payment/${details}`}>
                      <button
                        className="px-8 py-4 font-medium text-white rounded-full bg-lime-500 focus:outline-none w-full"
                        onClick={handleClickOpen}
                      >
                        Book Now
                      </button>
                    ) : (
                      // </Link>
                      // <Link href="/auth/login">
                      <button
                        className="px-8 py-4 font-medium text-white rounded-full bg-lime-500 focus:outline-none w-full"
                        onClick={handleClickOpen}
                      >
                        Book Now
                      </button>
                      // {/* </Link> */}
                    )}
                  </div>
                </div>
              </div>
              <div className="xxxs:hidden md:flex lg:flex">
                <div className="grid grid-rows-2 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3 aspect-[16/7] flex-1">
                  <div className="relative col-span-2 row-span-2 xxxs:h-[200px] md:h-full">
                    <Carousel
                      autoPlay
                      infiniteLoop
                      autoFocus
                      showArrows={false}
                      showStatus={false}
                      showThumbs={false}
                      showIndicators={false}
                    >
                      {currentProduct?.images?.map((item, index) => {
                        return (
                          <div key={index}>
                            <Image
                              height={900}
                              width={900}
                              src={item?.url}
                              className="h-[510px] w-[300px] rounded-md object-cover p-1"
                              alt="main banner"
                            />
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                  <div className="relative">
                    {currentProduct?.images && (
                      <Image
                        src={currentProduct.images[1].url}
                        alt="Property 6"
                        layout="fill"
                        objectFit="cover"
                      />
                    )}
                  </div>
                  <div className="relative">
                    {currentProduct?.images && (
                      <Image
                        src={currentProduct.images[2].url}
                        alt="Property 9"
                        layout="fill"
                        objectFit="cover"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="md:px-20 md:pt-10 lg:pt-0">
                <div className="pt-20">
                  <h4 className="text-xl uppercase font-heading font-semibold">
                    Overview
                  </h4>
                  <p className="mt-4 leading-9 text-gray-600">
                    {currentProduct?.description}
                  </p>
                </div>

                <div className="pt-1">
                  <div className="">
                    {currentProduct?.points?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <svg
                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span className="text-sm  text-gray-700">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-10">
                  <h4 className="text-xl uppercase font-heading">Amenities</h4>
                  <div className="grid gap-6 mt-8 md:grid-cols-3">
                    {currentProduct?.amenities?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Image
                            src={item.icon}
                            width={30}
                            height={30}
                            alt="icon"
                          />
                          <span className="text-lg font-semibold text-gray-700">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Description
                  </h2>
                  <p className="mt-2 text-gray-600 text-[14px]">
                    {currentProduct?.richDescription}
                  </p>
                </div>
              </div>
              <div>
                <h4 class="mt-20 text-xl uppercase font-heading font-semibold">
                  gallery
                </h4>
                <h4 class="mt-4  text-[20px] font-serif font-bold underline">
                  Images
                </h4>
                <div className="grid gap-8 mt-5 lg:grid-cols-3  md:grid-cols-3 xxxs:grid-cols-1 place-items-center">
                  {currentProduct?.images?.map((item, index) => {
                    return (
                      <div key={index} className="relative">
                        <Image
                          src={item?.url}
                          alt="Property 1"
                          width={400}
                          height={400}
                          className="object-cover w-[400px] h-[200px]"
                        />
                      </div>
                    );
                  })}
                </div>

                <div>
                  {currentProduct?.videos?.length > 0 && (
                    <div>
                      <h4 class="mt-4  text-[20px] font-serif font-bold underline">
                        Videos
                      </h4>
                      <div className="grid gap-8 mt-5 lg:grid-cols-3  md:grid-cols-3 xxxs:grid-cols-1 place-items-center">
                        {currentProduct?.videos?.map((item, index) => {
                          return (
                            <div key={index} className="relative">
                              <video
                                controls
                                className="object-cover w-[400px] h-[200px]"
                              >
                                <source src={item?.url} />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div class="pt-20">
                <div class="">
                  <h4 class="text-xl uppercase font-heading font-semibold">
                    Location Map
                  </h4>
                </div>
                <div class="relative mt-6 aspect-video">
                  <iframe
                    src={currentProduct?.location?.url}
                    width="1152"
                    height="648"
                    class="w-full h-full border-0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div class="pt-20">
                <h4 class="text-xl uppercase font-heading font-semibold">
                  Share:
                </h4>
                <div class="mt-5">
                  <div class="flex space-x-6 md:order-2">
                    <a
                      href="https://www.facebook.com/profile.php?id=100063639368925&mibextid=ZbWKwL"
                      class="text-gray-400 hover:text-gray-300"
                    >
                      <span class="sr-only">Facebook</span>
                      <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/ellahomes_?utm_source=qr&igsh=cTE3ZTFsejhsN2lj"
                      class="text-gray-400 hover:text-gray-300"
                    >
                      <span class="sr-only">Instagram</span>
                      <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://vm.tiktok.com/ZMMkWBf2D/"
                      target="_blank"
                      rel="noopener"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <span className="sr-only">TikTok</span>
                      <Image
                        src={"/icons/tiktok-icon.png"}
                        alt="icon"
                        width={25}
                        height={25}
                      />
                    </a>
                    <a
                      href="https://twitter.com/"
                      class="text-gray-400 hover:text-gray-300"
                    >
                      <span class="sr-only">Twitter</span>
                      <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PropertyDetail;
