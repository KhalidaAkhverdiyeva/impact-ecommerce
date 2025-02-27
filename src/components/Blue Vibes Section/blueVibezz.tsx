"use client";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import ScrollableProducts from "../Scrollable Products/scrollProducts";

const BlueVibezz = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="py-[48px] px-[20px] md:py-[34px] md:px-[32px] lg:px-[48px] max-w-[1600px] w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <h3 className="text-[32px] text-[#3C619E] md:text-[40px] lg:text-[48px] font-[800]">
            Blue vibes
          </h3>
          <div className="text-[#484848] flex gap-[5px] items-center">
            <p>View all</p>
            <button
              aria-label="View all"
              className="bg-[#E9E9E9] p-[6px] rounded-full flex justify-center items-center"
            >
              <FaAngleRight size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full overflow-x-hidden mx-auto max-w-[1600px]">
        <ScrollableProducts
          scrollProgress={scrollProgress}
          setScrollProgress={setScrollProgress}
        />
      </div>
    </section>
  );
};

export default BlueVibezz;
