"use client";
import React, { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { motion } from "framer-motion";

const HomeHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      srcSet:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/Mags_Corner_comb_2_Right_Lint_grey_Rebar_Square_Coffee_Table_marble_tabletop_soft_black_frame_Moire_Kelim_green_DLM_sun_yellow_cb7f484e-59a1-46ee-8c0b-8aa9b9971738.jpg?v=1657547898&width=2800",
      mobileSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/Mags_Corner_comb_2_Right_Lint_grey_Rebar_Square_Coffee_Table_marble_tabletop_soft_black_frame_Moire_Kelim_green_DLM_sun_yellow_mobile.jpg?v=1656590750&width=800",
      text: "Decoration ",
      title: ["Refresh your", "living room"],
      button: "Shop Decoration",
    },
    {
      srcSet:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/PC_Portable_olive_Palissade_Lounge_chair_olive_Palissade_Table_olive_Coffee_M_mint_Rainbow_mug.jpg?v=1656504940&width=2800",
      mobileSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/PC_Portable_olive_Palissade_Lounge_chair_olive_Palissade_Table_olive_Coffee_M_mint_Rainbow_mug_mobile.jpg?v=1656504947&width=800",
      text: "Hay PC Portable Lamp",
      title: ["Pierre", "Charpin's", "refined lamp"],
      button: "Discover",
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
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-start p-[20px]">
              <p className="text-white text-[16px] font-bold">{slide.text}</p>
              <div className="flex flex-col mt-2 z-50 text-[50px] font-[900] leading-[1.1] text-white">
                {slide.title.map((line, i) => (
                  <motion.span
                    key={`${currentSlide}-${i}`}
                    initial={{ opacity: 0, y: 20, rotate: 4 }}
                    animate={{
                      opacity: isCurrent ? 1 : 0,
                      y: isCurrent ? 0 : 20,
                      rotate: isCurrent ? 0 : 4,
                    }}
                    transition={{
                      delay: isCurrent ? i * 0.2 : 0,
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    style={{ transformOrigin: "top left" }}
                  >
                    {line}
                  </motion.span>
                ))}
              </div>
              <button className="text-[#272727] cursor-pointer text-[14px] font-[800] mt-[24px] bg-white py-[16px] px-[32px]">
                {slide.button}
              </button>
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
