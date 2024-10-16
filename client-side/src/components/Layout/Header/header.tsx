"use client";
import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isSticky
          ? "fixed top-0 left-0 z-[50] w-full bg-white shadow-md"
          : "absolute top-0 left-0 z-[50] w-full text-white"
      } flex justify-center`}
    >
      <div className="py-[18px] md:py-[34px] md:px-[32px] lg:px-[48px] px-[20px] flex justify-between items-center w-full max-w-[1600px]">
        <div className="flex items-center gap-[15px] flex-1">
          <div className="block lg:hidden">
            <IoMenu className="text-[30px]" />
          </div>
          <ul className="text-[17px] font-[700] hidden lg:flex lg:gap-[30px]">
            <li className="flex justify-center items-center gap-[10px] cursor-pointer  hover:text-gray-500">
              Shop <FaAngleDown />
            </li>
            <li className="flex justify-center items-center gap-[10px] cursor-pointer  hover:text-gray-500">
              Designers <FaAngleDown />
            </li>
            <li className="cursor-pointer  hover:text-gray-500">About</li>
            <li className="cursor-pointer  hover:text-gray-500">Blog</li>
          </ul>

          <div className="block md:hidden">
            <IoSearch className="text-[22px]" />
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Link href="/" onClick={() => window.location.reload()}>
            <Image
              src={
                isSticky
                  ? "https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact.png?v=1653297704&width=240"
                  : "https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact-white.png?v=1653297733&width=240"
              }
              alt="logo"
              width={120}
              className="logo cursor-pointer"
              height={26}
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="text-[17px] font-[700] mx-[10px] hidden lg:block cursor-pointer  hover:text-gray-500">
            FAQ
          </div>
          <div className="text-[17px] font-[700] mx-[10px] hidden lg:block cursor-pointer  hover:text-gray-500">
            Contact
          </div>
          <div className="hidden lg:block text-[17px] font-[700] mx-[10px] cursor-pointer">
            USD $
          </div>
          <div className="hidden md:block cursor-pointer">
            <IoSearch className="text-[24px] mx-[10px]" />
          </div>
          <div className="hidden md:block cursor-pointer">
            <AiOutlineUser className="text-[24px] mx-[10px]" />
          </div>
          <div className="cursor-pointer">
            <FiShoppingCart className="text-[26px] ml-[10px]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
