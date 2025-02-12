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
import FeatureDropdown from "./featureDropdown";
import AddToCartSidebar from "@/components/Add to Card Sidebar/addToCartSidebar";

export const Header = ({ transparent = true }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddToCartOpen, setIsAddCartOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const dropdownClass = openDropdown ? dropdownBaseClass : "";

  return (
    <>
      <header
        className={`${
          openDropdown ? dropdownClass : isSticky ? stickyClass : baseClass
        } flex justify-center transition-all duration-300`}
      >
        <div className="py-[18px] md:py-[34px] md:px-[32px] lg:px-[48px] px-[20px] flex justify-between items-center w-full max-w-[1600px]">
          <div className="flex items-center gap-[15px] flex-1">
            <div className="block lg:hidden">
              <IoMenu className="text-[30px]" />
            </div>
            <ul className="text-[18px] font-[700] hidden lg:flex lg:gap-[30px]">
              <Link  
              aria-label="Shop"
              href="/shop">
                <li
                  className={`cursor-pointer hover:text-[#D4D7D6] ${
                    openDropdown
                      ? "hover:text-[#403f3f]"
                      : "hover:text-[#D4D7D6]"
                  }`}
                >
                  Shop
                </li>
              </Link>
              <div onClick={() => toggleDropdown("designers")}>
                <li
                  className={`cursor-pointer flex items-center gap-[10px] ${
                    openDropdown === "designers"
                      ? "hover:text-[#403f3f]"
                      : "hover:text-[#D4D7D6]"
                  }`}
                >
                  Designers <FaAngleDown />
                </li>
                {openDropdown === "designers" && <DesignersDropdown />}
              </div>

              <Link 
              aria-label="About"
              href="/about">
                <li
                  className={`cursor-pointer hover:text-[#D4D7D6]  ${
                    openDropdown
                      ? "hover:text-[#403f3f]"
                      : "hover:text-[#D4D7D6]"
                  }`}
                >
                  About
                </li>
              </Link>
              <Link 
              aria-label="Blog"
              href="/blog">
                <li
                  className={`cursor-pointer hover:text-[#D4D7D6]  ${
                    openDropdown
                      ? "hover:text-[#403f3f]"
                      : "hover:text-[#D4D7D6]"
                  }`}
                >
                  Blog
                </li>
              </Link>
              <div onClick={() => toggleDropdown("features")}>
                <li
                  className={`cursor-pointer flex items-center gap-[10px] ${
                    openDropdown === "features"
                      ? "hover:text-[#403f3f]"
                      : "hover:text-[#D4D7D6]"
                  }`}
                >
                  Features <FaAngleDown />
                </li>
                {openDropdown === "features" && <FeatureDropdown />}
              </div>
            </ul>
            <div className="block md:hidden">
              <IoSearch className="text-[22px]" />
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <Link 
            aria-label="Logo"
            href="/">
              <Image
                src={
                  !transparent || isSticky || openDropdown
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
            <Link 
            aria-label="FAQ"
            href="/faq">
              <div
                className={`text-[17px] font-[700] mx-[10px] hidden lg:block cursor-pointer hover:text-[#D4D7D6]  ${
                  openDropdown ? "hover:text-[#403f3f]" : "hover:text-[#D4D7D6]"
                }`}
              >
                FAQ
              </div>
            </Link>
            <Link 
            aria-label="Contact"
            href="/contact">
              <div
                className={`text-[17px] font-[700] mx-[10px] hidden lg:block cursor-pointer hover:text-[#D4D7D6]  ${
                  openDropdown ? "hover:text-[#403f3f]" : "hover:text-[#D4D7D6]"
                }`}
              >
                Contact
              </div>
            </Link>
            <LanguageSelector />
            <div
              onClick={openSidebar}
              className={`${
                openDropdown ? "hover:text-[#403f3f]" : "hover:text-[#D4D7D6]"
              } hidden md:block cursor-pointer`}
            >
              <IoSearch className="text-[24px] mx-[10px]" />
            </div>
            <Link
            aria-label="Login"
              href="/login"
              className={`hidden md:block cursor-pointer ${
                openDropdown ? "hover:text-[#403f3f]" : "hover:text-[#D4D7D6]"
              }`}
            >
              <AiOutlineUser className="text-[24px] mx-[10px]" />
            </Link>
            <div
              onClick={() => setIsAddCartOpen(true)}
              className={`cursor-pointer ${
                openDropdown ? "hover:text-[#403f3f]" : "hover:text-[#D4D7D6]"
              }`}
            >
              <FiShoppingCart className="text-[26px] ml-[10px]" />
            </div>
          </div>
        </div>

        <SearchSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <AddToCartSidebar
          isAddToCartOpen={isAddToCartOpen}
          setIsAddCartOpen={setIsAddCartOpen}
        />
      </header>
    </>
  );
};
