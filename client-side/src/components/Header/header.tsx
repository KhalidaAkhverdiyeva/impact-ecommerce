import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 z-[50] w-full">
      <div className="py-[18px] px-[20px] text-white flex justify-between items-center w-full">
        <div className="flex items-center gap-[15px] flex-1">
          <div>
            <IoMenu className="text-[30px]" />
          </div>
          <div>
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
          <FiShoppingCart className="text-[26px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
