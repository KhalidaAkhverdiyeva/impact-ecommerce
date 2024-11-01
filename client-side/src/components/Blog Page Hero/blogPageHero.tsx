"use client";
import React, { useState } from "react";
import { Header } from "../Layout/Header/header";

const BlogPageHero = () => {
  const [activeSection, setActiveSection] = useState("All posts");

  const sections = [
    "All posts",
    "Collection",
    "Inspiration",
    "News",
    "Recipe",
    "Story",
  ];

  return (
    <div className="relative pb-[80px]">
      <Header />
      <div className="bg-[#3C619E] w-[100%] h-[570px] text-[white] flex items-center justify-center flex-col text-center relative">
        <h1 className="text-[50px] md:text-[60px] leading-[1] pb-[10px] lg:text-[80px] font-[800] max-w-[380px] md:max-w-[700px] lg:max-w-[1000px]">
          Stories to inspire you
        </h1>
        <p className="text-[14px] lg:text-[16px] max-w-[360px] md:max-w-[700px]">
          Get exclusive access to the latest news and inspiration from Impact.
          Simply sign up for our newsletter.
        </p>
        <div className="mt-[24px] flex flex-col md:flex-row items-center gap-[15px] w-[100%] max-w-[360px] md:max-w-[500px]">
          <input
            type="email"
            placeholder="Email"
            className="border border-[#476AA4] bg-transparent w-[100%] placeholder:text-[#9CAECE] md:flex-[60%] text-white pr-[32px] pl-[20px] py-[16px] outline-none"
          />
          <button className="bg-white font-[800] text-[#3C619E] w-[100%] md:flex-[40%] flex items-center justify-center gap-[10px] text-center px-[32px] py-[16px]">
            <svg
              role="presentation"
              fill="none"
              focusable="false"
              strokeWidth="1.5"
              width="18"
              height="18"
              viewBox="0 0 18 14"
            >
              <path
                clipRule="evenodd"
                d="M1 2.5A1.5 1.5 0 0 1 2.5 1h13A1.5 1.5 0 0 1 17 2.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 1 11.5v-9Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="m16 2-5.61 4.506c-.82.659-1.96.659-2.78 0L2 2"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Submit
          </button>
        </div>

        <div className="absolute bottom-0 w-full">
          <div className="flex gap-[15px] md:justify-center overflow-x-auto px-[20px]">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-[20px] lg:px-[24px] lg:py-[14px] py-[10px] border font-[700] text-[16px] md:text-[18px] whitespace-nowrap border-transparent ${
                  activeSection === section
                    ? "bg-white text-black transition-all duration-300 ease-in-out"
                    : "text-[#9EB0CF] hover:text-[white] transition-all duration-300 ease-in-out"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageHero;
