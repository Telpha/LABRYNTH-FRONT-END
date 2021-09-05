import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGooglePlusG,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <main>
      <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10">
        <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              My Account
            </div>

            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              My orders
            </a>
            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              My address
            </a>
            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              My vouchers
            </a>
          </div>

          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              Chef
            </div>

            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Chef login
            </a>
            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Chef FAQs
            </a>
            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Chef Registration
            </a>
          </div>

          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              Information
            </div>

            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              About us
            </a>
            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Our story
            </a>
            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              FAQ
            </a>
            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Cancellation policy
            </a>
            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Blog
            </a>
          </div>

          <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
              Contact
            </div>

            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Call us now: 12345678
            </a>
            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Whatsapp : 123456897
            </a>
            <a
              href="#"
              class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              support@abcd.com
            </a>
          </div>
        </div>

        <div class="pt-2">
          <div
            class="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl"
          >
            <div class="mt-2">
              © Copyright 2021-year @FOODNEXTDOOR. All Rights Reserved.
            </div>

            <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              <a href="#" class="w-12 mx-1">
                <FaFacebook />
              </a>
              <a href="#" class="w-12 mx-1">
                <FaInstagram />
              </a>
              <a href="#" class="w-12 mx-1">
                <FaTwitter />
              </a>
              <a href="#" class="w-12 mx-1">
                <FaGooglePlusG />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};
export default Footer;
