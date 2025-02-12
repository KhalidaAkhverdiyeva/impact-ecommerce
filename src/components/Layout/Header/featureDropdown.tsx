import { Link } from "@/i18n/routing";
import React from "react";

const FeatureDropdown = () => {
  return (
    <div className="absolute top-[95px] left-0 z-[50] bg-black h-[100vh] w-[100%] bg-opacity-30">
      <div className="bg-white py-[40px] border-t-[1px] border-t-solid border-t-[#dcdbdb]">
        <div className="flex items-center justify-between max-w-[1600px] mx-auto pl-[20px] md:pl-[32px] lg:pl-[48px]  overflow-visible">
          <ul className="text-[#272727] text-left font-[700] text-[26px] w-[30%]">
            <li
              className="text-[16px] font-[400] mb-[5px] text-[#464545] opacity-0 animate-slideIn"
              style={{ animationDelay: "0ms" }}
            >
              Trending
            </li>

            <Link 
            aria-label="Collections"
            href="/collections">
              <li
                className="cursor-pointer relative group w-max opacity-0 animate-slideIn"
                style={{ animationDelay: "50ms" }}
              >
                Collections
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            </Link>

            <Link 
            aria-label="Sowden Collections"
            href="/sowden-collection" >
              <li
                className="cursor-pointer relative group w-max opacity-0 animate-slideIn"
                style={{ animationDelay: "100ms" }}
              >
                Sowden Collections{" "}
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            </Link>

            <Link 
            aria-label="Andreas Engesvik"
            href="/andreas-engesvik">
              <li
                className="cursor-pointer relative group w-max opacity-0 animate-slideIn"
                style={{ animationDelay: "150ms" }}
              >
                Andreas Engesvik
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            </Link>

            <Link 
            aria-label="Thomas Bentzen"
            href="/thomas-bentzen">
              <li
                className="cursor-pointer relative group w-max opacity-0 animate-slideIn"
                style={{ animationDelay: "200ms" }}
              >
                Thomas Bentzen
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            </Link>

            <Link 
            aria-label="Phanta"
            href="/phanta">
              <li
                className="cursor-pointer relative group w-max opacity-0 animate-slideIn"
                style={{ animationDelay: "250ms" }}
              >
                Phanta
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureDropdown;
