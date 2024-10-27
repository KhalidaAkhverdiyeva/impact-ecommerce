import { sections } from "@/static/RoadSliderData";
import React, { useState } from "react";

const RoadScrollSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleSectionClick = (index: number) => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(false);
    }, 300);
  };

  return (
    <section>
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-[30px] min-h-[700px] lg:flex-row lg:gap-[140px]">
            <div
              className={`lg:flex-1 transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                src={sections[activeIndex].imgSrc}
                alt={sections[activeIndex].title}
                className="transition-transform duration-300 transform"
              />
            </div>
            <div
              className={`text-[#272727] lg:flex-1 transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <h6 className="font-[800] text-center lg:text-left text-[18px] mb-[10px] lg:mb-[25px]">
                {sections[activeIndex].title}
              </h6>
              <p className="text-[32px] text-center lg:text-left lg:text-[50px] leading-[1] font-[800]">
                {sections[activeIndex].description}
              </p>
            </div>
          </div>
          {/* Horizontal Controller */}
          <div className="lg:mt-[50px] flex items-center overflow-x-auto">
            <div className="relative w-max">
              {/* Horizontal Line */}
              <div className="absolute top-[20%] left-0 right-0 transform -translate-y-1/2 h-[2px] bg-gray-400" />
              {/* Circles and Numbers */}
              <div className="flex justify-between items-center relative z-10 gap-[100px]">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer shrink-0"
                    onClick={() => handleSectionClick(index)}
                  >
                    {/* Circle */}
                    <div
                      className={`w-[16px] h-[16px] rounded-full border-2 ${
                        activeIndex === index
                          ? "border-black bg-black"
                          : "border-gray-400 bg-white"
                      } transition-colors duration-300`}
                    ></div>
                    {/* Number */}
                    <span
                      className={`mt-[10px] font-[500] text-[14px] ${
                        activeIndex === index ? "text-black" : "text-gray-400"
                      } transition-colors duration-300`}
                    >
                      {section.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadScrollSection;
