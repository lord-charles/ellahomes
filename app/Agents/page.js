import Image from "next/image";
import React from "react";

const Agents = () => {
  return (
    <main className="flex flex-col flex-1">
      <div className="absolute top-[9vh] z-[1]">
        <Image
          src="/banners/bg1.jpeg"
          width={3000}
          height={3000}
          alt="bg"
          className="object-cover w-screen lg:h-[27rem] md:h-[27rem] xxxs:h-[25rem] blur-[0px]"
        />
      </div>
      <div className="mt-[540px]">
        <div className="flex items-center justify-center -mt-20 md:-mt-24">
          <div>
            <Image
              src="/assets/testimonial/userthree.png"
              alt="Agent Photo"
              width={382}
              height={382}
              className="object-cover object-center w-48 h-48 border-8 border-white rounded-full"
            />
            <h1 className="text-3xl leading-10 text-center uppercase font-heading relative top-3">
              Betty
            </h1>
          </div>
        </div>
        <div className="px-6 mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center space-x-6 md:order-2">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
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
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Youtube</span>
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
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
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
            <p className="max-w-3xl mx-auto mt-8 leading-8 text-center text-gray-600">
              Hello, I&apos;m ellahomes senior Agent, your local real estate
              expert. I&apos;m here to make your real estate goals a reality.
              Whether you&apos;re buying or selling, I&apos;ve got you covered.
              Let&apos;s get started!
            </p>
          </div>
        </div>
        <div className="max-w-6xl px-6 pb-20 mx-auto mt-12 border bg-emerland-50 pt-14 md:px-14">
          <div>
            <h3 className="text-lg text-red-400 uppercase font-heading font-semibold">
              Contact Me
            </h3>
          </div>
          <div className="mt-6 space-y-6 md:flex md:space-x-10 md:space-y-0">
            {/* Contact Form */}
            <form action="https://api.web3forms.com/submit" method="POST">
              <div className="space-y-6 md:flex md:w-2/3 md:space-x-6 md:space-y-0 ">
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />
                <div className="space-y-6 md:w-1/2">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name*"
                    required
                    className="w-full py-3 border p-1 rounded-md border-gray-300"
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Your Email*"
                    required
                    className="w-full border p-1 rounded-md border-gray-300"
                  />
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Your Phone"
                    className="w-full border p-1 rounded-md border-gray-300"
                  />
                </div>
                <div className="md:w-1/2">
                  <textarea
                    name="Message"
                    placeholder="Your Message*"
                    required
                    className="w-full h-32 border p-1 rounded-md border-gray-300"
                  ></textarea>
                </div>
                <div className="md:w-full lg:hidden md:hidden">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white bg-lime-500 hover:bg-lime-700 rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </div>

              <div className="md:w-[440px] relative top-10 left-[30px] lg:block md:block xxxs:hidden">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white bg-lime-500 hover:bg-lime-700 rounded-md"
                >
                  Send Message
                </button>
              </div>
            </form>
            {/* Contact Info */}
            <div className="space-y-6 md:w-1/2">
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-900">Email</h4>
                <p className="text-gray-600">info@ellahomeske.com</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-900">Phone</h4>
                <p className="text-gray-600">+254721636368</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-900">Address</h4>
                <p className="mt-2 leading-9 text-black">Nyali, Mombasa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Agents;
