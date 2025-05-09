﻿import React from "react";

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-green-purple-1 border-t border-green-purple-1 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
        © 2025{" "}
        <a href="https://CozyPotion.games/" className="hover:underline">
          CozyPotion™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="http://www.cozypotion.com/privacypolicy"
            className=" hover:underline me-4 md:me-6"
          >
            Privacy Policy
          </a>
        </li>

        <li>
          <a
            href="http://www.cozypotion.com/termsofservice"
            className=" hover:underline me-4 md:me-6 "
          >
            Terms of Service
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
