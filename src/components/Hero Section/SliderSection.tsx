"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slides } from "@/static/SliderData";
import SliderControllerButton from "./SliderControllerButton";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const HeroSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const subtitleAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
      rotate: 2,
    },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      rotate: -2,
      transition: {
        duration: 0.4,
      },
    },
  };

  const titleItemAnimation = (index: number) => ({
    hidden: {
      opacity: 0,
      y: 30,
      rotate: 4,
    },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.2 + index * 0.1, // Stagger effect
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  });

  const buttonAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
      rotate: 2,
    },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: 0.6, // Appears after title
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

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
              <Image
                src={slide.mobileSrc}
                alt="home decor"
                width={800}
                height={533}
                className="object-cover w-full h-full"
              />
            </picture>
            <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-[1600px] w-full flex flex-col items-start p-5 md:p-[32px] lg:p-[48px] z-20">
                <motion.p
                  key={`${currentSlide}-subtitle`}
                  variants={subtitleAnimation}
                  initial="hidden"
                  animate={isCurrent ? "show" : "exit"}
                  className="text-white text-[16px] mb-[20px] font-bold"
                >
                  {slide.text}
                </motion.p>
                <div className="flex flex-col mt-2 z-50 font-[900] leading-[1.05] text-white">
                  {(isDesktop ? slide.title.desktop : slide.title.mobile).map(
                    (line, i) => (
                      <motion.span
                        key={`${currentSlide}-${i}`}
                        custom={i}
                        variants={titleItemAnimation(i)}
                        initial="hidden"
                        animate={isCurrent ? "show" : "hidden"}
                        style={{
                          transformOrigin: "left",
                        }}
                        className={`text-[50px] md:text-[64px] lg:text-[80px] font-[900]`}
                      >
                        {line}
                      </motion.span>
                    )
                  )}
                </div>
                <Link aria-label="Shop" href="/shop">
                  <motion.button
                    key={`${currentSlide}-button`}
                    variants={buttonAnimation}
                    initial="hidden"
                    animate={isCurrent ? "show" : "hidden"}
                    aria-label="Shop"
                    className="text-[#272727] cursor-pointer text-[14px] font-[800] mt-[24px] bg-white py-[16px] px-[32px]"
                  >
                    {slide.button}
                  </motion.button>
                </Link>
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
