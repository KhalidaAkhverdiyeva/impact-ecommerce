import RichTextSection from "@/components/Designers Rich Text Section/richTextSection";
import { Header } from "@/components/Layout/Header/header";
import React from "react";

const ThomasBentzen = () => {
  return (
    <div className="relative">
      <Header />
      {/* <div className="relative">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-hero.jpg?v=1656412386&width=1600"
          />
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-hero-mobile.jpg?v=1656412390&width=800"
            alt="thomas-bentzen"
            className="w-full max-h-[640px] object-cover"
          />
        </picture>
      </div> */}
      <div className=" h-[560px] lg:h-[640px]  relative overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(min-width: 768px)"
            srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-hero.jpg?v=1656412386&width=1600"
          />
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-hero-mobile.jpg?v=1656412390&width=800"
            alt="thomas"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <h2 className="text-white font-[800] text-[40px] md:text-[48px] lg:text-[68px]  text-center">
            Thomas Bentzen
          </h2>
        </div>
      </div>

      <RichTextSection />
    </div>
  );
};

export default ThomasBentzen;
