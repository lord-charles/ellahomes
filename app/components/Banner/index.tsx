
'use client'
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider, IconButton } from "@mui/material";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Banner = () => {
  const [navigation, setnavigation] = useState("");

  const router = useRouter();

  const handleNavigation = () => {
    if (navigation.length < 2) {
      toast.error(
        "Please select at least one option to search(must include rent or buy)"
      );
    }
    router.push(navigation);
  };

  return (
    <div
      id="home-section"
      className="relative  z-[1] md:h-[35rem] lg:h-[50rem] xxxs:h-[48rem]"
      // style={{ backgroundColor: "#ffd21f" }}
    >
      <div className="absolute bottom-[1vh] z-[-1]">
        <Image
          src="/banners/bgmain.jpeg"
          width={3000}
          height={3000}
          alt="bg"
          className=" object-cover w-screen lg:h-[50rem] md:h-[35rem] xxxs:h-[48rem] blur-[0px] "
        />
      </div>
      <div className="mx-auto max-w-6xl lg:pt-20 xxxs:pt-5 md:pt-20 xxxs:pb-24 px-6 z-[99999999] relative lg:top-0 md:top-0 xxxs:top-[50px]">
        <div className="col-span-6 flex flex-col justify-evenly items-center space-y-4 lg:space-y-[80px] ">
          <div className="items-center flex flex-col">
            <div
              style={{
                backgroundColor: "#ffd21f",
              }}
              className="rounded-md"
            >
              <h1 className=" lg:text-[40px] xxxs:text-[20px]  font-semibold text-center text-black  px-2 rounded-md custom-font-p">
                ELLAHOMES & PROPERTY REALTORS <br />
              </h1>
            </div>

            <div className="rounded-md bg-black mt-4">
              <h1
                className="underline lg:text-[40px] xxxs:text-[20px]  font-semibold text-center text-white  px-2  relative top-[-4px] custom-font-p w-fit "
                // style={{ fontFamily: "Helvetica, sans-serif" }}
              >
                Stay. Relax. Repeat.
              </h1>
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row xxxs:flex-col lg:space-x-[1px] py-4 z-[999999]">
            <div className="flex justify-between space-x-2 md:w-[110px]  lg:w-[110px] xxxs:w-[90vw] bg-white p-6 cursor-pointer lg:rounded-l-md  md:rounded-l-md  xxxs:rounded-l-none">
              <div className="">
                <Menu as="div" className="relative text-left ">
                  <div>
                    <Menu.Button className="flex gap-3 items-center xxxs:w-[78vw] md:w-auto lg:w-auto justify-between">
                      <h2 className="font-semibold block text-black">AirBnb</h2>
                      <ExpandMoreIcon />
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
                    <Menu.Items className="absolute left-[-9px]  mt-7 w-[90px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
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
                              onClick={() => setnavigation("/listing")}
                            >
                              AirBnb
                            </a>
                          )}
                        </Menu.Item>
                      </div>
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
                              onClick={() => setnavigation("/sale")}
                            >
                              Buy
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <Divider />

            <div className="flex justify-between space-x-2 md:w-[130px]  lg:w-[130px] xxxs:w-[90vw] bg-white p-6 cursor-pointer">
              <div className="">
                <Menu as="div" className="relative text-left ">
                  <div>
                    <Menu.Button className="flex gap-3 items-center xxxs:w-[78vw] md:w-auto lg:w-auto justify-between">
                      <h2 className="font-semibold block text-black">
                        Location
                      </h2>
                      <ExpandMoreIcon />
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
                    <Menu.Items className="absolute left-[-9px]  mt-7 w-[170px] h-[25vh] overflow-scroll origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
                      <div className="py-1 ">
                        {locations.map((location, index) => (
                          <Menu.Item key={index}>
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
                                {location}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <Divider />

            <div className="flex justify-between space-x-2 md:w-[200px]  lg:w-[200px] xxxs:w-[90vw] bg-white p-6 cursor-pointer">
              <div className="">
                <Menu as="div" className="relative text-left ">
                  <div>
                    <Menu.Button className="flex gap-3 items-center xxxs:w-[78vw] md:w-auto lg:w-auto justify-between">
                      <h2 className="font-semibold block text-black">
                        Property Type
                      </h2>
                      <ExpandMoreIcon />
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
                    <Menu.Items className="absolute left-[-9px]  mt-7 w-[150px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
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
                              Apartment
                            </a>
                          )}
                        </Menu.Item>
                      </div>
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
                              Own Compound
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <Divider />

            <div className="flex justify-between space-x-2 md:w-[120px]  lg:w-[120px] xxxs:w-[90vw] bg-white p-6 cursor-pointer">
              <div className="">
                <Menu as="div" className="relative text-left ">
                  <div>
                    <Menu.Button className="flex gap-3 items-center xxxs:w-[78vw] md:w-auto lg:w-auto justify-between">
                      <h2 className="font-semibold block text-black">Budget</h2>
                      <ExpandMoreIcon />
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
                    <Menu.Items className="absolute left-[-9px]  mt-7 w-[170px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
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
                              ksh 4,500 - 7,500
                            </a>
                          )}
                        </Menu.Item>
                      </div>
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
                              ksh 8,000 - 15,000
                            </a>
                          )}
                        </Menu.Item>
                      </div>
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
                              ksh 15,000 - 25,000
                            </a>
                          )}
                        </Menu.Item>
                      </div>
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
                              ksh 25,000 - 35,000
                            </a>
                          )}
                        </Menu.Item>
                      </div>
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
                              ksh 35,000 - 50,000
                            </a>
                          )}
                        </Menu.Item>
                      </div>
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
                              ksh 50,000 -&gt;
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <Divider />

            <div className="bg-white flex justify-center items-center md:w-[170px]  lg:w-[170px] xxxs:w-[90vw] py-3">
              <button
                className=" h-[50px] cursor-pointer bg-Blueviolet  hover:bg-semiblueviolet  hover:text-white text-Blueviolet font-medium px-4 rounded-full"
                onClick={() => handleNavigation()}
              >
                <h2 className="font-semibold text-white text-[16px] text-center px-7 ">
                  Search
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


const locations = [
  "Section 58",
  "Naka",
  "Free Area",
  "Lanet",
  "Blankets / Hyrax",
  "Barnabas",
  "Pipeline",
  "Mwariki",
  "Mzee Wanyama",
  "Mutaita",
  "Elmentaita",
  "Mbaruk / Kingdom City",
  "Kiratina",
  "White House",
  "Teachers",
  "Mawanga",
  "Heshima",
  "Maili Sita",
  "London",
  "Kiamunyi",
  "Kabarak",
  "Mangu",
  "Shabab",
  "Kaptembwa",
  "Kapkures / Ngambo",
  "Ponda Mali",
  "Rhonda",
  "Langalanga",
  "Racecourse",
  "Freehold",
  "Kivumbini",
  "Ngata",
  "Soilo",
  "Bangladesh",
  "Milimani",
  "Naivasha",
  "Gilgil",
  "Njoro",
  "Bahati",
  "Sobea",
];



