import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

interface ScrollToTheTopProps {
    showScrollButton: boolean;
    scrollPercentage: number;
  }

  const ScrollToTheTop: React.FC<ScrollToTheTopProps> = ({ showScrollButton, scrollPercentage }) => {  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: showScrollButton ? 1 : 0,
        scale: showScrollButton ? 1 : 0.8,
      }}
      onClick={scrollToTop}
      className="fixed bottom-[40px] right-[40px] z-50 bg-white shadow-lg rounded-full w-[50px] h-[50px] cursor-pointer hover:shadow-xl  transition-all duration-300 flex items-center justify-center"
      style={{
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="relative w-full h-full">
        {/* Circular progress background */}
        <svg
          className="absolute inset-0 transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#E8E8E8"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#272727"
            strokeWidth="2"
            strokeDasharray={`${scrollPercentage * 2.83}, 283`}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        {/* Arrow icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <IoIosArrowUp
            size={20}
            className={`text-[#FF5C00] transform transition-transform duration-300 ${
              scrollPercentage === 100 ? "scale-110" : ""
            }`}
          />
        </div>
      </div>
    </motion.button>
  );
};

export default ScrollToTheTop;
