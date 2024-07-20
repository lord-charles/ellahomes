"use client";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

const Footer = () => {
  return (
    <div className="mt-[0px]">
      <footer className="relative">
        {/* <div className="absolute inset-0 h-20 bg-bottom bg-no-repeat bg-cover -top-20">
          <Image
            src="/assets/listings/building_trees.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div> */}
        <div className="px-6 pt-24 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8 md:flex md:space-y-0">
              <div className="space-y-8 md:space-y-0 md:flex md:w-8/12">
                <div className="md:w-1/2">
                  <h4 className="text-xl text-white uppercase font-heading">
                    Contact Info
                  </h4>
                  <p className="mt-6 leading-9 text-gray-300">
                    Nyali, Mombasa
                    <br />
                    Email : info@ellahomeske.com
                    <br />
                    Phone : +254717808035 | 254 701374731 | 254721636368
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h4 className="text-xl text-white uppercase font-heading">
                    Navigations
                  </h4>
                  <nav className="mt-6 space-y-3 md:flex md:space-y-0">
                    <div className="flex flex-col space-y-3 md:w-1/2">
                      <Link className="text-gray-300" href="/#">
                        Home
                      </Link>
                      <Link className="text-gray-300" href="/about">
                        About us
                      </Link>

                      <Link className="text-gray-300" href="/faq">
                        FAQ
                      </Link>
                      <Link className="text-gray-300" href="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="md:w-4/12">
                <h4 className="text-xl text-white uppercase font-heading">
                  Subscribe to newsletter
                </h4>
                <div className="mt-6">
                  <p className="text-gray-300">
                    Enter your email address &amp; get daily newsletter
                  </p>
                  <form method="post" className="flex mt-6">
                    <input
                      className="w-full px-6 border-none rounded-l md:flex-1"
                      type="email"
                      placeholder="Email address"
                    />
                    <div
                      className="px-4 py-3 font-medium text-white rounded-r bg-lime-600 cursor-pointer"
                      onClick={() => toast.success("success")}
                    >
                      Subscribe
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="pt-8 mt-8 border-t border-gray-700 md:flex md:items-center md:justify-between ">
              <div className="flex space-x-6 md:order-2 xxxs:justify-center">
                <Link
                  href="https://www.facebook.com/profile.php?id=100063639368925&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/ellahomes_?utm_source=qr&igsh=cTE3ZTFsejhsN2lj"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 01-1.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
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
                </Link>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
                <Link
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">YouTube</span>
                  <Image
                    src={"/icons/youtube-icon.png"}
                    alt="icon"
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
              <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1 xxxs:text-center">
                ellahomes © 2024 All Rights Reserved.{" "}
                <Link
                  href="https://ellahomeske.com/"
                  target="_blank"
                  rel="noopener"
                ></Link>
              </p>
            </div>

            {/* All Rights Reserved */}
            <div className="py-4 md:flex justify-between  items-center">
              <div className="flex gap-5 mb-2 md:mt-0 justify-center md:justify-start">
                <h4 className="text-gray-400 opacity-75 text-sm font-normal">
                  <Link href="/" target="_blank">
                    Privacy policy
                  </Link>
                </h4>
                <div className="h-5 bg-white opacity-25 w-0.5"></div>
                <h4 className="text-gray-400 opacity-75 text-sm font-normal">
                  <Link href="/" target="_blank">
                    Terms & conditions
                  </Link>
                </h4>
              </div>
              <div className="flex justify-center">
                <Link
                  href="https://charlesmwaniki.com/"
                  className=" opacity-75  text-center md:text-start text-sm text-gray-400"
                >
                  Developed by{" "}
                  <h2 className="text-purple-500 underline">
                    charlesmwaniki.com
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
