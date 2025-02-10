import Image from "next/image";
import React from "react";

const DesignerCard = () => {
  return (
    <div className="w-[314px] md:w-[276px] lg:w-[340px] relative group">
      <div className="relative overflow-hidden">
        <Image
          src="https://impact-theme-home.myshopify.com/cdn/shop/files/Clara_von_Zweigbergk.jpg?v=1659097451&width=500"
          alt="Clara von Zweigbergk"
          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          width={600}
          height={600}
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-[18px] md:text-[20px] lg:text-[24px] font-semibold text-center px-4">
          <span>Clara</span>
          <span>von Zweigbergk</span>
        </div>

        <svg
          role="presentation"
          focusable="false"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className="absolute left-1/2 bottom-[30%] transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          fill="white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM10.47 9.53 12.94 12l-2.47 2.47 1.06 1.06 3-3 .53-.53-.53-.53-3-3-1.06 1.06Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default DesignerCard;
