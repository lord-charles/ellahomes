import React, { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "Rentals", href: "/listing", current: false },
  { name: "Airbnbs", href: "/Airbnbs", current: false },
  { name: "Home for sale", href: "/sale", current: false },
  { name: "Land for sale", href: "/land", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Agents", href: "/Agents", current: false },
  { name: "FAQ", href: "/faq", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "About us ", href: "/about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto h-screen">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-black hover:opacity-100"
                    : "hover:text-black hover:opacity-100",
                  "py-1 text-lg font-normal opacity-75 block"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[14px] relative top-[15vh] text-base text-gray-400 md:mt-0 md:order-1 xxxs:text-center">
        Ellahomes © 2023 All Rights Reserved.{" "}
        <a href="https://Ellahomeske.com/" target="_blank" rel="noopener"></a>
      </p>
    </div>
  );
};

export default Data;
