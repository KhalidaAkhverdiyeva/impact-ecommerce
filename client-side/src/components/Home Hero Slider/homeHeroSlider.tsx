/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const HomeHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      srcSet:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/Mags_Corner_comb_2_Right_Lint_grey_Rebar_Square_Coffee_Table_marble_tabletop_soft_black_frame_Moire_Kelim_green_DLM_sun_yellow_cb7f484e-59a1-46ee-8c0b-8aa9b9971738.jpg?v=1657547898&width=2800",
      mobileSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/Mags_Corner_comb_2_Right_Lint_grey_Rebar_Square_Coffee_Table_marble_tabletop_soft_black_frame_Moire_Kelim_green_DLM_sun_yellow_mobile.jpg?v=1656590750&width=800",
      text: "Hay PC Portable Lamp",
      title: ["Pierre", "Charpin's", "refined lamp"],
    },
    {
      srcSet:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/PC_Portable_olive_Palissade_Lounge_chair_olive_Palissade_Table_olive_Coffee_M_mint_Rainbow_mug.jpg?v=1656504940&width=2800",
      mobileSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/PC_Portable_olive_Palissade_Lounge_chair_olive_Palissade_Table_olive_Coffee_M_mint_Rainbow_mug_mobile.jpg?v=1656504947&width=800",
      text: "Decoration",
      title: ["Refresh your", "living room"],
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(slideInterval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative flex justify-center w-full overflow-hidden home-hero-slider">
      {slides.map((slide, index) => {
        const isCurrent = currentSlide === index;

        return (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              isCurrent ? "opacity-100" : "opacity-0"
            }`}
          >
            <picture>
              <source media="(min-width: 690px)" srcSet={slide.srcSet} />
              <img
                src={slide.mobileSrc}
                alt="home decor"
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute left-4 bottom-16 z-20">
              <div className="text-white text-[14px] font-bold">
                {slide.text}
              </div>
              <div className="flex flex-col mt-2 z-50 overflow-hidden">
                {slide.title.map((line, lineIndex) => (
                  <div
                    key={lineIndex}
                    className={`transform text-[48px] text-white font-[700] transition-transform duration-700 ease-in-out`}
                    style={{
                      opacity: isCurrent ? 1 : 0,
                      transform: isCurrent
                        ? "rotate(0deg)" // Final position
                        : "rotate(-10deg)", // Initial rotated position
                      transitionDelay: `${lineIndex * 200}ms`, // Stagger the animations
                    }}
                  >
                    {line} {/* Full line of text */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-4 right-4 flex gap-3 z-20">
        <button
          onClick={goToPrevSlide}
          className="text-white border-2 flex justify-center items-center w-10 h-10 border-solid border-white rounded-full"
        >
          <LuChevronLeft size={20} />
        </button>
        <button
          onClick={goToNextSlide}
          className="text-white border-2 flex justify-center items-center w-10 h-10 border-solid border-white rounded-full"
        >
          <LuChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HomeHeroSlider;
