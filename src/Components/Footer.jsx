import React from "react";
import { NavLink } from "react-router-dom";

const FooterComp = () => {
  return (
    <footer className=" bg-white rounded-lg shadow dark:bg-gray-900  pt-8">
      <div className="w-full  mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavLink
            to=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="MovieMoz Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MovieMoz
            </span>
          </NavLink>
          <ul className="flex flex-wrap text-lg items-center mb-6 pr-4 font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <NavLink to="/" className="hover:underline me-4 md:me-6">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:underline me-4 md:me-6">
                Licensing
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <NavLink to="" className="hover:underline">
            MovieMoz™
          </NavLink>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterComp;
