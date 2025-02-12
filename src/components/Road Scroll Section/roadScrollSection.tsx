import { sections } from "@/static/RoadSliderData";
import React, { useState, useRef } from "react";
import ControlButtons from "./controlButtons";
import Image from "next/image";

const RoadScrollSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSectionClick = (index: number) => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(false);
      sectionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }, 300);
  };

  return (
    <section>
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-[30px] min-h-[700px] md:min-h-[1000px] lg:min-h-[600px] lg:flex-row lg:gap-[140px]">
            <div
              className={`lg:flex-1 transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={sections[activeIndex].imgSrc}
                alt={sections[activeIndex].title}
                width={800}
                height={600}
                className="transition-transform duration-300 transform"
                loading="lazy"
              />
            </div>
            <div
              className={`text-[#272727] lg:flex-1 transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <h2 className="font-[800] text-center lg:text-left text-[18px] mb-[10px] lg:mb-[25px]">
                {sections[activeIndex].title}
              </h2>
              <p className="text-[32px] text-center lg:text-left lg:text-[50px] leading-[1] font-[800]">
                {sections[activeIndex].description}
              </p>
            </div>
          </div>
          {/* Horizontal Controller */}
          <div className="lg:mt-[50px] flex items-center overflow-x-auto scroll-smooth">
            <div className="relative w-max lg:w-[100%] lg:pt-[30px]">
              {/* Horizontal Line */}
              <div className="absolute top-[20%] lg:top-[50%] left-0 right-0 transform -translate-y-1/2 h-[1px] lg:h-[3px] bg-[#E5E5E5]" />
              {/* Circles and Numbers */}
              <div className="flex justify-between items-center relative z-10 gap-[100px]">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      sectionRefs.current[index] = el;
                    }}
                    className="flex flex-col items-center cursor-pointer shrink-0 scroll-mx-4"
                    onClick={() => handleSectionClick(index)}
                  >
                    {/* Circle */}
                    <div
                      className={`w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] rounded-full border-[2px] ${
                        activeIndex === index
                          ? "border-[#272727] bg-[#272727]"
                          : "border-[#E5E5E5] bg-white"
                      } transition-colors duration-300`}
                    ></div>
                    {/* Number */}
                    <span
                      className={`mt-[10px] font-[700] text-[14px] ${
                        activeIndex === index
                          ? "text-[#272727]"
                          : "text-[#939393]"
                      } transition-colors duration-300`}
                    >
                      {section.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ControlButtons
              activeIndex={activeIndex}
              sectionsLength={sections.length}
              handleSectionClick={handleSectionClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadScrollSection;
