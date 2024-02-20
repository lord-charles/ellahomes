import { Disclosure, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}
const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CustomLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} passHref>
      <span onClick={onClick} className="px-3 py-4 text-lg font-normal">
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [currentLink, setCurrentLink] = useState("/");

  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
  };

  return (
    <Disclosure
      as="nav"
      className="navbar bg-white"
      // style={{ backgroundColor: "#ffd21f" }}
    >
      <>
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8 ">
          <div className="relative flex h-12 md:h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <Image
                    src={"/assets/logo/ellahomeslogo.jpeg"}
                    alt="Logo"
                    width={300}
                    height={300}
                    className="block object-contain w-[80px] lg:hidden relative left-[-20px]"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  />
                  <Image
                    src={"/assets/logo/ellahomeslogo.jpeg"}
                    alt="Logo"
                    width={300}
                    height={300}
                    className=" hidden object-contain w-[130px] mt-0 lg:block"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  />
                </Link>
              </div>

              {/* LINKS */}

              <div className="hidden lg:block m-auto relative left-[160px]">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <CustomLink
                      key={item.name}
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      <span
                        className={classNames(
                          item.href === currentLink
                            ? "underline-links"
                            : "text-black",
                          "px-1 py-4 text-lg font-bold font-serif text-[22px] opacity-75 hover:opacity-100"
                        )}
                        aria-current={item.href ? "page" : undefined}
                      >
                        {item.name}
                      </span>
                    </CustomLink>
                  ))}

                  <Link
                    href={"/contact"}
                    className="opacity-75 block text-lg font-bold  hover:opacity-100 text-black font-serif text-[22px] px-2"
                  >
                    <h1>Contact</h1>
                  </Link>

                  <div>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="flex gap-3 items-center">
                          <h2 className="opacity-75 block text-lg font-bold  hover:opacity-100 text-black font-serif text-[22px]">
                            For Sale
                          </h2>
                          <ChevronDownIcon
                            className="-mr-1 h-6 w-6 text-yellow-500 font-bold"
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
                        <Menu.Items className="absolute left-[5px] mt-2 w-[80px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/sale"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Home
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/land"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Land
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  <div>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="flex gap-3 items-center">
                          <h2 className="opacity-75 block text-lg font-bold  hover:opacity-100 text-black font-serif text-[22px]">
                            More
                          </h2>
                          <ChevronDownIcon
                            className="-mr-1 h-6 w-6 text-yellow-500 font-bold"
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
                        <Menu.Items className="absolute left-[5px] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/Agents"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Agents
                                </Link>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/blog"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Blog
                                </Link>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/faq"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  FAQ
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/about"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  About us
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
            {/* SIGNIN DIALOG */}
            {/* <Signdialog /> */}
            {/* REGISTER DIALOG */}
            {/* <Registerdialog /> */}
            {/* DRAWER FOR MOBILE VIEW */}
            {/* DRAWER ICON */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-8 w-8"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>
            {/* DRAWER LINKS DATA */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
