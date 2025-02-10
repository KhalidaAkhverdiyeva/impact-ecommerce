import { Link } from "@/i18n/routing";
import React from "react";

const Return = () => {
  return (
    <div className="bg-[#EAF2ED] text-[#00A341] text-[14px] p-[20px] flex flex-col items-center gap-[10px]">
      <div className="font-[700] flex items-center gap-[5px]">
        <svg
          role="presentation"
          fill="none"
          focusable="false"
          strokeWidth="2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M2.04 17.208a5.362 5.362 0 0 0 4.721 4.731c1.706.189 3.456.347 5.24.347 1.782 0 3.532-.158 5.238-.347a5.362 5.362 0 0 0 4.72-4.731c.18-1.697.327-3.435.327-5.208 0-1.773-.148-3.513-.326-5.208a5.362 5.362 0 0 0-4.721-4.731c-1.706-.189-3.456-.347-5.239-.347s-3.533.158-5.239.347a5.362 5.362 0 0 0-4.72 4.731c-.18 1.697-.327 3.435-.327 5.208 0 1.773.148 3.513.326 5.208Z"
            fill="#00A341"
            fillOpacity=".12"
            stroke="currentColor"
          ></path>
          <path
            d="M6.857 13.977h5.907a3.429 3.429 0 0 0 3.429-3.429V7.293M10.2 10.635c-1.468 1.2-2.2 1.934-3.343 3.343C8 15.384 8.732 16.118 10.2 17.32"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        Return
      </div>
      <div className="text-center">
        Not satisfied with your purchase?
        <Link href="/contact" className="underline pl-[5px]">
          Contact us
        </Link>{" "}
        within 3 days after after you received your order.
      </div>
    </div>
  );
};

export default Return;
