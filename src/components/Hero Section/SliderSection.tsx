"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slides } from "@/static/SliderData";
import SliderControllerButton from "./SliderControllerButton";

const HeroSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check window size on mount and resize
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 490);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-[1600px] w-full flex flex-col items-start p-5 md:p-[32px] lg:p-[48px] z-20">
                <p className="text-white text-[16px] mb-[20px] font-bold">
                  {slide.text}
                </p>
                <div className="flex flex-col mt-2 z-50  font-[900] leading-[1.05] text-white">
                  {(isDesktop ? slide.title.desktop : slide.title.mobile).map(
                    (line, i) => (
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
                        style={{
                          transformOrigin: "top left",
                        }}
                        className={`text-[50px] md:text-[64px] lg:text-[80px] font-[900]`}
                      >
                        {line}
                      </motion.span>
                    )
                  )}
                </div>
                <button className="text-[#272727] cursor-pointer text-[14px] font-[800] mt-[24px] bg-white py-[16px] px-[32px]">
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <SliderControllerButton
        goToPrevSlide={goToPrevSlide}
        goToNextSlide={goToNextSlide}
      />
    </div>
  );
};

export default HeroSliderSection;
