import { Link } from "@/i18n/routing";
import React from "react";
import Image from "next/image";

interface DesignersDropdownProps {
  setIsDropdownOpen: (value: boolean) => void;
}

const DesignersDropdown = ({ setIsDropdownOpen }: DesignersDropdownProps) => {
  return (
    <div
      onClick={() => setIsDropdownOpen(false)}
      className="absolute top-[95px] left-0 z-[50] bg-black h-[100vh] w-[100%] bg-opacity-30"
    >
      <div className="bg-white border-t-[1px] border-t-solid border-t-[#dcdbdb]">
        <div className="flex items-center justify-between max-w-[1600px] mx-auto pl-[20px] md:pl-[32px] lg:pl-[48px]  overflow-visible">
          <ul className="text-[#272727] text-left font-[700] text-[26px] w-[30%]">
            <li
              className="text-[16px] font-[400] mb-[5px] text-[#464545] opacity-0 animate-slideIn"
              style={{ animationDelay: "0ms" }}
            >
              Trending
            </li>

            <Link aria-label="George Sowden" href="/sowden-collection">
              <li
                className="cursor-pointer relative group w-max opacity-0 animate-slideIn"
                style={{ animationDelay: "50ms" }}
              >
                Sowden
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            </Link>

            <Link aria-label="Pierre Charpin" href="/pierre-charpin">
              <li
                className="cursor-pointer relative group w-max opacity-0 animate-slideIn"
                style={{ animationDelay: "100ms" }}
              >
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            </Link>

            <Link aria-label="Andreas Engesvik" href="/andreas-engesvik">
              <li
                className="cursor-pointer relative group w-max opacity-0 animate-slideIn"
                style={{ animationDelay: "150ms" }}
              >
                Andreas Engesvik
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            </Link>

            <Link aria-label="Thomas Bentzen" href="/thomas-bentzen">
              <li
                className="cursor-pointer relative group w-max opacity-0 animate-slideIn"
                style={{ animationDelay: "200ms" }}
              >
                Thomas Bentzen
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            </Link>

            <Link aria-label="Phanta" href="/collections">
              <li
                className="cursor-pointer relative group w-max opacity-0 animate-slideIn"
                style={{ animationDelay: "250ms" }}
              >
                Collections
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            </Link>

            <Link aria-label="All designers" href="/designers">
              <li
                className="cursor-pointer relative group w-max opacity-0 animate-slideIn"
                style={{ animationDelay: "300ms" }}
              >
                All designers
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            </Link>
          </ul>

          <div className="flex overflow-visible h-[100%] gap-[2px] w-[100%]">
            <Link
              aria-label="Clara von Zweigberk"
              href="/clara-von-zweigberk "
              className="flex-1 h-[100%]  overflow-hidden relative cursor-pointer "
            >
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/The_Origami_Family_by_Clara_von_Zweigbergk_8_2.jpg?v=1659011539&width=1000"
                alt="clara"
                width={1000}
                height={750} // Adjust this based on your image aspect ratio
                className="w-full h-full object-cover block transition-all duration-500 ease-in-out relative hover:scale-105"
              />
              <span className="absolute bottom-[20px] left-[20px] text-[34px] font-[800] text-white max-w-[300px] leading-[1]">
                Clara von Zweigberk
              </span>
            </Link>

            <Link
              aria-label="Wang & Söderström"
              href="/wang-soderstrom"
              className="flex-1 h-[100%]  overflow-hidden relative cursor-pointer"
            >
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/wang--soderstrom-bw_1220x1220_1.jpg?v=1659103986&width=1000"
                alt="wong"
                width={1000}
                height={1000}
                className="w-full h-full object-cover block transition-all duration-500 ease-in-out relative hover:scale-105"
              />
              <span className="absolute bottom-[20px] left-[20px] text-[34px] font-[800] text-white  leading-[1]">
                Wang & Söderström
              </span>
            </Link>
            <Link
              aria-label="Pierre Charpin"
              href="/pierre-charpin"
              className="flex-1 h-[100%]  overflow-hidden relative cursor-pointer"
            >
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/1500x1500_2_1.jpg?v=1664282703&width=1000"
                alt="charpin"
                width={1000}
                height={1000} // Adjust height based on the aspect ratio of the image
                className="w-full h-full object-cover block transition-all duration-500 ease-in-out relative hover:scale-105"
                loading="lazy"
              />
              <span className="absolute bottom-[20px] left-[20px] text-[34px] font-[800] text-white  leading-[1]">
                Pierre Charpin
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignersDropdown;
