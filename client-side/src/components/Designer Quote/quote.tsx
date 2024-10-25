"use client";
import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Quote = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Example quotes data (You can replace this with your actual quotes)
  const quotes = [
    {
      text: "We have always tried to focus on the people who were going to use the products, and we have always tried to design products for the life they live.",
      author: "Mette Hay",
      image:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/Mette.png?v=1656419248&width=140",
    },
    {
      text: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs",
      image: "https://example.com/steve-jobs.png", // Replace with a valid image URL
    },
    // Add more quotes as needed
  ];

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex(
      (prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length
    );
  };

  return (
    <section className="max-w-[1600px] mx-auto bg-[#363D88] py-[20px]">
      <div className="text-white">
        <div className="flex flex-col gap-[10px] max-w-[900px] mx-auto">
          <div className="relative">
            <img
              src="data:image/svg+xml,%3Csvg width='86' height='55' viewBox='0 0 86 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M71.3163 54.6H42.5163L60.3163 0.400024H85.5163L71.3163 54.6ZM29.3163 54.6H0.716309L18.9163 0.400024H44.1163L29.3163 54.6Z' fill='rgba(233, 233, 233, 0.3)'/%3E%3C/svg%3E%0A"
              alt="quote"
              className="absolute top-[0px] left-[10px] md:left-[-40px] w-[51px] h-[37px] md:w-[70px] md:h-[45px]"
            />

            <blockquote className="text-[26px] p-[20px] md:text-[36px] lg:text-[44px] relative font-[800] leading-[1.1] text-center">
              {quotes[currentQuoteIndex].text}
            </blockquote>
          </div>
          <div className="flex flex-col items-center gap-[10px] justify-center">
            <div className="rounded-full w-[70px] h-[70px]">
              <img
                src={quotes[currentQuoteIndex].image}
                alt={quotes[currentQuoteIndex].author}
                className="w-full h-full rounded-full"
              />
            </div>
            <p className="text-white text-[14px] text-center md:text-[16px]">
              {quotes[currentQuoteIndex].author}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-[20px] mt-4 max-w-[900px] mx-auto">
          <button
            onClick={prevQuote}
            className="  py-2 px-4 border-[1px] border-[#9CA3AF] w-[48px] h-[48px] rounded-full"
          >
            <GrFormPrevious />
          </button>
          {/* Dots Navigation */}
          <div className="flex justify-center mt-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuoteIndex(index)}
                className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
                  index === currentQuoteIndex ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
          <button
            onClick={nextQuote}
            className="  py-2 px-4 border-[1px] border-[#9CA3AF] w-[48px] h-[48px] rounded-full"
          >
            <GrFormNext />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quote;
