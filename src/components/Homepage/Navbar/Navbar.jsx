import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileIcon from "./profile.png";
import Logo from "./campus food.png"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    const closeDropdown = () => {
      setIsDropdownOpen(false);
    };
    if (isDropdownOpen) {
      document.addEventListener("click", closeDropdown);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [isDropdownOpen]);

  return (
    <nav className=" border-orange-400 #e2e8f0">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <a href="/Home" className="flex items-end space-x-2 rtl:space-x-reverse mx-5">
          <img
            src={Logo}  
            className="h-12 w-12 rounded-full"
            alt="Phoenix"
          />
          <span className=" self-center text-3xl  font-semibold whitespace-nowrap dark:text-orange-600 ">
            Phoenix
          </span>
        </a>
        <div className="flex-grow md:flex-grow-0 mr-48">
          <div className="flex items-center justify-end ">
            <div className="relative ">
              <span className="absolute inset-y-0 left-1 pl-1 flex items-center ">
                <svg
                  className="w-5 h-5 text-#dc2626 "
                  fill="none"
                  stroke="orange"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-5.2-5.2"
                  />
                  <circle cx="10" cy="10" r="8" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search items, Hall nightcanteens / Restaurants..."
                className=" py-2 px-10 border text-gray-500  border-orange-600 rounded-xl focus:outline-none focus:ring focus:ring-orange-200  transition ease-in-out delay-150  hover:translate-y-2 hover:scale-110  duration-300"
                style={{ width: "600px" }}
              />
            </div>
          </div>
        </div>
        <div className="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-16">
          <button className="flex pr-6 space-x-0 sm:pr-2 " >
            <AiOutlineShoppingCart className=" w-8 h-8 fill-orange-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-101  duration-300 mx-5" />
            {/* <span className="text-sm font-medium text-gray-100 rounded-full pb-4 pl-0 bg-black w-3 h-4 hover:bg-white hover:text-orange-500 hover:font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-101  duration-300">
              0
            </span> */}
          </button>
          <button
            type="button"
            className="flex text-sm -10  bg-orange-800 mx-5 rounded-full md:me-0 focus:ring-4 focus:ring-orange-700 dark:focus:ring-orange-600  relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-101  duration-300"
            id="user-menu-button"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only ">user</span>
            <img
              className="w-8 h-8  rounded-full  "
              src={ProfileIcon}
              alt="user photo"
            />
          </button>
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute right-6  top-8 mt-11 text-base  list-none  divide-y bg-slate-50 divide-gray-200 rounded-lg shadow dark:bg-white-700 dark:divide-orange-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300`}
            id="user-dropdown"
          >
            <div className="px-5 py-3">
              <span className="flex items-center justify-around  text-sm font-bold text-orange-700 dark:text-orange overflow-x-hidden">
                Name
              </span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                +91 9876543210
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-12 py-2 font-medium text-sm center text-orange-700 hover:bg-gray-100 dark:hover:bg-orange-600 dark:text-orange-600 dark:hover:text-white"
                >
                  Orders
                </a>
                <a
                  href="#"
                  className="block px-12  py-2  font-medium text-sm center text-orange-700 hover:bg-gray-100 dark:hover:bg-orange-600 dark:text-orange-600 dark:hover:text-white"
                 >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
