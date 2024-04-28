"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/image";
import { IconButton } from "@mui/material";
import MyDropdown from "./Menu";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import Divider from "@mui/material/Divider";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}
const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
];
type JwtPayload = {
  firstname?: string;
  // Other properties...
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("KSH");
  const [authenticated, setAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState<String>("");
  const pathname = usePathname();
  // console.log(pathname);

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const decodedToken = jwtDecode(token) as JwtPayload;
      setAuthenticated(true);
      setFirstName(decodedToken?.firstname || "");
      console.log(decodedToken);
    } else {
      console.log("Token not found in cookie");
    }
  }, [pathname]);

  return (
    <Disclosure as="nav">
      <>
        <div
          className=" bg-gray-900
py-3 text-[13px]"
        >
          <div className="lg:mx-[340px] xl:mx-[200px] xxl:mx-[340px] md:mx-[10px] xxs:mx-[1px] flex justify-between">
            <div className="text-white md:flex xxxs:hidden">
              EllaHomes & Property Realtors
            </div>

            <div className="flex xxxs:justify-between mx-2 xxxs:w-full md:w-fit md:space-x-7">
              <div>
                <span className=" text-white">
                  Hotline:
                  <Link className="text-white" href="tel:+254 721636368s">
                    +254 721636368
                  </Link>
                </span>
              </div>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="flex gap-1 items-center">
                    <h2 className="text-white">{language}</h2>
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                            onClick={() => setLanguage("English")}
                          >
                            English
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <Menu
                as="div"
                className="relative inline-block text-left md:flex xxxs:hidden z-[9999]"
              >
                <div>
                  <Menu.Button className="flex gap-1 items-center">
                    <h2 className="text-white">{currency}</h2>
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-6 w-26 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                            onClick={() => setCurrency("KSH")}
                          >
                            KHS
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <Divider className="bg-black h-[0.5px]" />

        <div className="bg-gray-900 py-3">
          <div className="flex justify-between lg:mx-[340px] xl:mx-[200px] xxl:mx-[340px] md:mx-[10px] items-center">
            <IconButton>
              <Link
                className="text-white font-bold text-[30px]  ml-[-90px] h-[80px]"
                href=""
              >
                <Image
                  width={300}
                  height={200}
                  src="/ella-homes-logo.png"
                  alt="logo"
                  className="md: w-[300px] h-[100px] object-contain"
                />
              </Link>
            </IconButton>

            {/* links */}
            <div className="flex flex-col items-center space-y-2 relative top-2 xxxs:flex md:hidden">
              <div className="block lg:hidden">
                <Bars3Icon
                  className="block h-8 w-8 text-white"
                  aria-hidden="true"
                  onClick={() => setIsOpen(true)}
                />
              </div>
              <MyDropdown
                setAuthenticated={setAuthenticated}
                authenticated={authenticated}
                firstName={firstName}
                setFirstName={setFirstName}
              />
            </div>

            <div className="flex space-x-10 items-center xxxs:hidden md:flex">
              <Link href="/faq" className="flex flex-col items-center">
                <Image
                  width={300}
                  height={200}
                  src="/icons/faq.png"
                  alt="logo"
                  className="w-[50px] h-[50px] object-contain"
                />
                <h2 className="text-white">FAQS</h2>
              </Link>
              <Link href="/about" className="flex flex-col items-center">
                <Image
                  width={300}
                  height={200}
                  src="/icons/about.png"
                  alt="logo"
                  className="w-[50px] h-[50px] object-contain"
                />
                <h2 className="text-white">About Us</h2>
              </Link>
              <div>
                <MyDropdown
                  setAuthenticated={setAuthenticated}
                  authenticated={authenticated}
                  firstName={firstName}
                  setFirstName={setFirstName}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800">
          <div className="lg:mx-[340px] xl:mx-[200px] md:mx-[20px] xxl:mx-[340px] flex justify-between py-4">
            <div className="flex items-center gap-x-8">
              <Menu as="div" className="relative inline-block ">
                <div>
                  <Menu.Button className="flex gap-3 items-center">
                    <Image
                      src="/icons/menu.svg"
                      width={40}
                      height={40}
                      alt="menu"
                    />
                    <h2 className="font-serif text-[17px] text-white">
                      CATEGORY
                    </h2>
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-[150px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            AirBnb
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <div className="flex space-x-3 font-serif text-white ">
                <div className="text-white text-[14px] rounded-md">
                  <Link href="/">HOME</Link>
                </div>
                <div className="text-white text-[14px] rounded-md">
                  <Link href="/blog">BLOGS</Link>
                </div>
                <div className="text-white text-[14px] rounded-md">
                  <Link href="/contact">CONTACT</Link>
                </div>
              </div>
            </div>

            <div className="xxxs:hidden md:flex">
              <h2 className="text-white text-[24px] custom-font-p animate-pulse rounded-md">
                STAY. RELAX. REPEAT.
              </h2>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between">
          {/* DRAWER LINKS DATA */}
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata />
          </Drawer>
        </div>
      </>
    </Disclosure>
  );
};

export default dynamic(() => Promise.resolve(Navbar), {
  ssr: false,
});
