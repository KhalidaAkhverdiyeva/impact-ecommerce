"use client";
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import LanguageSelector from "./languageSelector";
import SearchSidebar from "@/components/Search Sidebar/searchSidebar";
import { Link } from "@/i18n/routing";
import DesignersDropdown from "./designersDropdown";
// import AddToCartSidebar from "@/components/Add to Card Sidebar/addToCartSidebar";

export const Header = ({ transparent = true }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [isAddToCartOpen, setIsAddCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  const baseClass = transparent
    ? "absolute top-0 left-0 z-[70] w-full bg-transparent text-white"
    : "z-[70] w-full bg-white text-black";

  const stickyClass = isSticky
    ? "fixed top-0 left-0 w-full bg-white text-black shadow-md z-[70]"
    : "";

  const dropdownBaseClass = transparent
    ? "sticky top-0 left-0 z-[70] w-full bg-white text-black additional-dropdown-styles"
    : "sticky top-0  z-[70] w-full bg-white text-black";

  const dropdownClass = isDropdownOpen ? dropdownBaseClass : "";

  return (
    <>
      <header
        className={`${
          isDropdownOpen ? dropdownClass : isSticky ? stickyClass : baseClass
        } flex justify-center transition-all duration-300`}
      >
        <div className="py-[18px] md:py-[34px] md:px-[32px] lg:px-[48px] px-[20px] flex justify-between items-center w-full max-w-[1600px]">
          <div className="flex items-center gap-[15px] flex-1">
            <div className="block lg:hidden">
              <IoMenu className="text-[30px]" />
            </div>
            <ul className="text-[18px] font-[700] hidden lg:flex lg:gap-[30px]">
              <Link href="/shop">
                <li
                  className={`cursor-pointer hover:text-[#D4D7D6] ${
                    isDropdownOpen
                      ? "hover:text-[#403f3f]"
                      : "hover:text-[#D4D7D6]"
                  }`}
                >
                  Shop
                </li>
              </Link>
              <div onClick={toggleDropdown}>
                <li
                  className={`cursor-pointer  flex items-center gap-[10px] ${
                    isDropdownOpen
                      ? "hover:text-[#403f3f]"
                      : "hover:text-[#D4D7D6]"
                  }`}
                >
                  Designers <FaAngleDown />
                </li>
                {isDropdownOpen && <DesignersDropdown />}
              </div>

              <Link href="/about">
                <li
                  className={`cursor-pointer hover:text-[#D4D7D6]  ${
                    isDropdownOpen
                      ? "hover:text-[#403f3f]"
                      : "hover:text-[#D4D7D6]"
                  }`}
                >
                  About
                </li>
              </Link>
              <Link href="/blog">
                <li
                  className={`cursor-pointer hover:text-[#D4D7D6]  ${
                    isDropdownOpen
                      ? "hover:text-[#403f3f]"
                      : "hover:text-[#D4D7D6]"
                  }`}
                >
                  Blog
                </li>
              </Link>
              <li
                onClick={toggleDropdown}
                className={`cursor-pointer hover:text-[#D4D7D6]  flex gap-[10px] items-center ${
                  isDropdownOpen
                    ? "hover:text-[#403f3f]"
                    : "hover:text-[#D4D7D6]"
                }`}
              >
                Features <FaAngleDown />
              </li>
            </ul>
            <div className="block md:hidden">
              <IoSearch className="text-[22px]" />
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <Link href="/">
              <Image
                src={
                  !transparent || isSticky || isDropdownOpen
                    ? "https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact.png?v=1653297704&width=240"
                    : "https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact-white.png?v=1653297733&width=240"
                }
                alt="logo"
                width={120}
                height={26}
                className="logo cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            <Link href="/faq">
              <div
                className={`text-[17px] font-[700] mx-[10px] hidden lg:block cursor-pointer hover:text-[#D4D7D6]  ${
                  isDropdownOpen
                    ? "hover:text-[#403f3f]"
                    : "hover:text-[#D4D7D6]"
                }`}
              >
                FAQ
              </div>
            </Link>
            <Link href="/contact">
              <div
                className={`text-[17px] font-[700] mx-[10px] hidden lg:block cursor-pointer hover:text-[#D4D7D6]  ${
                  isDropdownOpen
                    ? "hover:text-[#403f3f]"
                    : "hover:text-[#D4D7D6]"
                }`}
              >
                Contact
              </div>
            </Link>
            <LanguageSelector />
            <div
              onClick={openSidebar}
              className={`${
                isDropdownOpen ? "hover:text-[#403f3f]" : "hover:text-[#D4D7D6]"
              } hidden md:block cursor-pointer`}
            >
              <IoSearch className="text-[24px] mx-[10px]" />
            </div>
            <Link
              href="/login"
              className={`hidden md:block cursor-pointer ${
                isDropdownOpen ? "hover:text-[#403f3f]" : "hover:text-[#D4D7D6]"
              }`}
            >
              <AiOutlineUser className="text-[24px] mx-[10px]" />
            </Link>
            <div
              // onClick={() => setIsAddCartOpen(true)}
              className={`cursor-pointer ${
                isDropdownOpen ? "hover:text-[#403f3f]" : "hover:text-[#D4D7D6]"
              }`}
            >
              <FiShoppingCart className="text-[26px] ml-[10px]" />
            </div>
          </div>
        </div>

        <SearchSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* <AddToCartSidebar
          isAddToCartOpen={isAddToCartOpen}
          setIsAddCartOpen={setIsAddCartOpen}
          product={product}
        /> */}
      </header>
    </>
  );
};
