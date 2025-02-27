"use client";
import React, { useState, useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface QuoteProps {
  bgColor: string;
}

const Quote: React.FC<QuoteProps> = ({ bgColor }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const quoteRef = useRef(null);
  const isInView = useInView(quoteRef, { once: true, amount: 0.3 });

  const quotes = [
    {
      text: "We have always tried to focus on the people who were going to use the products, and we have always tried to design products for the life they live.",
      author: "Mette Hay",
      image:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/Mette.png?v=1656419248&width=140",
    },
    {
      text: "With our range of decorative objects, we want to create decoration that is not only pretty but that will give you a sense of pride and fullness.",
      author: "Steve Jobs",
      image:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/Rolf.png?v=1656591294&width=140",
    },
  ];

  const changeQuote = (newIndex: React.SetStateAction<number>) => {
    setIsFadingOut(true);
    setTimeout(() => {
      setCurrentQuoteIndex(newIndex);
      setIsFadingOut(false);
    }, 300);
  };

  const nextQuote = () => {
    changeQuote((currentQuoteIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    changeQuote((currentQuoteIndex - 1 + quotes.length) % quotes.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className=" bg-white ">
      <div className="py-[20px] max-w-[1600px] mx-auto ">
        <motion.div
          ref={quoteRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-white py-[20px] md:py-[40px] lg:py-[60px] md:mx-[32px] lg:mx-[48px]"
          style={{ backgroundColor: bgColor }}
        >
          <div className="flex flex-col gap-[10px] max-w-[1310px] mx-auto">
            <div className="relative">
              <Image
                src="data:image/svg+xml,%3Csvg width='86' height='55' viewBox='0 0 86 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M71.3163 54.6H42.5163L60.3163 0.400024H85.5163L71.3163 54.6ZM29.3163 54.6H0.716309L18.9163 0.400024H44.1163L29.3163 54.6Z' fill='rgba(233, 233, 233, 0.3)'/%3E%3C/svg%3E%0A"
                alt="quote"
                width={51}
                height={37}
                className="absolute top-[0px] md:top-[15px] lg:left-[77px] left-[10px] md:left-[50px] w-[51px] h-[37px] md:w-[70px] md:h-[45px]"
              />
              <motion.blockquote
                variants={itemVariants}
                className={`text-[26px] p-[20px] md:text-[36px] md:px-[70px] md:py-[40px] lg:text-[44px] relative font-[800] leading-[1.1] text-center transition-opacity duration-300 ease-in-out ${
                  isFadingOut ? "opacity-0" : "opacity-100"
                }`}
              >
                {quotes[currentQuoteIndex].text}
              </motion.blockquote>
            </div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-[10px] justify-center"
            >
              <div className="rounded-full w-[70px] h-[70px] overflow-hidden transition-opacity duration-300">
                <Image
                  src={quotes[currentQuoteIndex].image}
                  alt={quotes[currentQuoteIndex].author}
                  width={500}
                  height={500}
                  className={`w-full h-full rounded-full transition-opacity duration-300 ease-in-out ${
                    isFadingOut ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
              <motion.p
                variants={itemVariants}
                className="text-white text-[14px] text-center md:text-[16px]"
              >
                {quotes[currentQuoteIndex].author}
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-[20px] mt-4 max-w-[900px] mx-auto"
          >
            <button
              aria-label="Previous quote"
              onClick={prevQuote}
              className="py-2 px-4 border-[1px] border-[#9CA3AF] w-[48px] h-[48px] rounded-full"
            >
              <GrFormPrevious />
            </button>
            {/* Dots Navigation */}
            <div className="flex justify-center mt-2">
              {quotes.map((_, index) => (
                <button
                  aria-label="Quote dot"
                  key={index}
                  onClick={() => changeQuote(index)}
                  className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
                    index === currentQuoteIndex ? "bg-white" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
            <button
              aria-label="Next quote"
              onClick={nextQuote}
              className="py-2 px-4 border-[1px] border-[#9CA3AF] w-[48px] h-[48px] rounded-full"
            >
              <GrFormNext />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
