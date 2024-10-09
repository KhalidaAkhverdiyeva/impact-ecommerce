import React from "react";
import Banner from "../Banner/banner";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Banner />
      <div className="py-[18px] px-[20px]">
        <div className="flex items-center">
          <div>
            <IoMenu className="text-[30px]" />
          </div>
          <div>
            <IoSearch className="text-[22px]" />
          </div>
        </div>

        <div>
          <Image
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/logo-impact-white.png?v=1653297733&width=240"
            alt="logo"
            width={100}
            height={22}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
