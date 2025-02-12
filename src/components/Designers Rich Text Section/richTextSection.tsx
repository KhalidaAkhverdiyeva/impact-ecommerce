import React, { FC } from "react";

interface RichTextProps {
  title: string;
  // add other props if needed
}

const RichTextSection: FC<RichTextProps> = ({ title }) => {
  return (
    <section className="bg-white py-[50px] ">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-[10px] md:gap-[20px] px-[20px] md:px-[32px] lg:px-[48px] text-center">
        <p className="font-[800] lg:text-[18px] text-[#272727]">Designers</p>
        <h3 className="text-[42px] md:text-[48px] lg:text-[62px] py-[10px] leading-[1] font-[800] text-[#272727]">
          {title}
        </h3>
        <div className="mx-auto">
          <p className=" max-w-[750px] text-[#272727] leading-[1.3] ">
            HAY has always believed that good design is everyone&apos;s right.
            That&apos;s why, from the very beginning, co-founders and Creative
            Directors Mette and Rolf Hay committed to working with their
            generation&apos;s best designers from all over the world to create
            high-quality products that would be available to a wide audience.
          </p>
          <button 
           aria-label="View designers"
           className="border-[#272727] text-[#272727] border-[3px] font-[800] border-solid mt-[20px] py-[16px] px-[32px]">
            View designers
          </button>
        </div>
      </div>
    </section>
  );
};

export default RichTextSection;
