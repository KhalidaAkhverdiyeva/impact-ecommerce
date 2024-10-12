import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 z-[50] w-full flex justify-center ">
      <div className="py-[18px] px-[20px] text-white flex justify-between items-center w-full max-w-[1440px]">
        <div className="flex items-center gap-[15px] flex-1 md: ">
          <div className="block lg:hidden">
            <IoMenu className="text-[30px]" />
          </div>
          <ul className="text-[17px] font-[700] hidden  lg:flex lg:gap-[30px] ">
            <li>Shop</li>
            <li>Designers</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
          <div className="block md:hidden">
            <IoSearch className="text-[22px]" />
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact-white.png?v=1653297733&width=240"
            alt="logo"
            width={100}
            height={22}
          />
        </div>
        <div className="flex-1 flex justify-end ">
          <div className="text-[17px] font-[700] mx-[10px] hidden lg:block">
            FAQ
          </div>
          <div className="text-[17px] font-[700] mx-[10px]  hidden lg:block">
            Contact
          </div>
          <div className="hidden lg:block text-[17px] font-[700] mx-[10px]">
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
    </div>
  );
};

export default Header;
