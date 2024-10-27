import BlueVibezz from "@/components/Blue Vibes Section/blueVibezz";
import JustImgSection from "@/components/Just Image Section/justImgSection";
import { HeaderWhite } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React from "react";

const SowdenCollectionPage = () => {
  return (
    <div>
      <HeaderWhite />
      <div className="max-w-[1600px] mx-auto py-[50px] px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex flex-col gap-[15px] lg:gap-[25px] items-center">
          <h1 className="text-[#C6E6F3] font-[900] text-[60px] md:text-[106px] lg:text-[216px] leading-[1]">
            Sowden
          </h1>
          <h3 className="text-[26px] md:text-[32px] font-[800] max-w-[690px] text-[#272727] text-center  leading-[1.2]">
            Our collaboration with the designer George Sowden
          </h3>
          <div className="text-center text-[#272727] max-w-[690px]">
            This collection brings the designer’s signature aesthetic and style
            to a higher level, transforming essential household products into
            decorative as well as functional objects.
          </div>
        </div>
      </div>
      <JustImgSection />
      <BlueVibezz />
      <div className="max-w-[1600px] mx-auto py-[50px]">
        <div className=" flex flex-col lg:items-center lg:flex-row gap-[36px] lg:gap-[100px] px-[20px] md:px-[32px]  lg:px-[48px] ">
          <div className="flex gap-[20px] lg:w-[55%]">
            <div className="w-[40%]">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/George_Sowden_Tin_by_Sowden_Coffee_Sowden_Bottle_Travel_Cup_Tea.jpg?v=1659077866&width=900"
                alt=""
              />
            </div>
            <div className="pt-[40px] w-[60%]">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_EU_yelllow_Sowden_Toaster_EU_blue_Salt_and_Pepper_M_yellow_6e8dd0d1-971e-4084-ad4c-4bb80cf8a534.jpg?v=1659077888&width=900"
                alt=""
              />
            </div>
          </div>
          <div className="text-[#272727] flex flex-col items-center lg:items-start lg:w-[45%]">
            <p className="font-[900] ">About the designer</p>
            <h2 className="text-[40px] font-[900] lg:text-[60px]">
              George Sowden
            </h2>
            <p className="text-center lg:text-left pt-[20px] max-w-[600px]">
              George Sowden studied architecture at Gloucestershire College of
              Art. In the 1970s, Sowden moved to Milan to work with names such
              as Ettore Sottsass and Olivetti, and in the 1980s he became one of
              the founders of the design collective, Memphis Group. He has won
              numerous design prizes including the prestigious Compasso d'Oro
              Award. Today he continues to live and work in Milan. For HAY,
              Sowden has designed the Coffee and Tea Pot, Sowden Bottle, Travel
              Cup, Tin by Sowden, Salt & Pepper, Sowden Toaster and Sowden
              Kettle.
            </p>
          </div>
        </div>
      </div>
      <FloatingTextSection
        text="Usefulness and enjoyment of everyday objects"
        color="#92BEE5"
      />
      <ShopifySection />
    </div>
  );
};

export default SowdenCollectionPage;
