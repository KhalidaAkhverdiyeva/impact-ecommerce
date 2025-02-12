import CollectionCard from "@/components/Collection Card/collectionCard";
import { Header } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import Image from "next/image";
import React from "react";

const CollectionsPage = () => {
  return (
    <div>
      <Header transparent={false} />
      <section className="max-w-[1600px] mx-auto">
        <div className="px-[20px] py-[48px] md:px-[32px] lg:px-[48px] text-center">
          <span
            className="text-[54px] md:text-[94px] lg:text-[170px] font-[800]"
            style={{
              background:
                "linear-gradient(180deg, rgba(231, 231, 231, 1), rgba(255, 255, 255, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Collections
          </span>
        </div>
      </section>
      <CollectionCard />
      <section>
        <div className="max-w-[1600px] mx-auto h-[480px] px-[20px] md:px-[32px] lg:px-[48px]">
          <div className="relative h-full">
            <div className="relative h-full">
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/PC_Portable_cream_white_Palissade_olive.jpg?v=1655974487&width=3200"
                alt="lampos"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="text-white absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-[48px] md:text-[64px] font-[800]">
                Lighting
              </h3>
              <p className="text-[14px] md:text-[16px] mt-2">
                Vast and varied selection of fresh, stylish lighting options,
                including pendant, table, floor lamps and more.
              </p>
              <button  
                aria-label="Shop Lighting"
               className="mt-[24px] text-white border-solid font-[800] border-white border-[2px] px-[32px] py-[16px]">
                Shop Lighting
              </button>
            </div>
          </div>
        </div>
      </section>
      <FloatingTextSection text="Collaboration" color="#F2F2F2" />
      <div className="max-w-[1600px] mx-auto ">
        <div className=" flex flex-col lg:items-center lg:flex-row gap-[36px] lg:gap-[100px] px-[20px] md:px-[32px]  lg:px-[48px] ">
          <div className="flex items-center  lg:w-[55%]">
            <div className="w-[40%]">
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_EU_yelllow_Sowden_Toaster_EU_blue_Salt_and_Pepper_M_yellow_30c2a164-6b41-49df-b3d2-d4e7534a1679.jpg?v=1660123231&width=1000"
                alt="ch"
                width={500}
                height={500}
                className="-rotate-3"
              />
            </div>
            <div className="pt-[40px] w-[60%]">
              <Image
                src="https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Toaster_EU_yellow.jpg?v=1660123240&width=1000"
                alt="chsolse"
                width={500}
                height={500}
                className="rotate-3"
              />
            </div>
          </div>
          <div className="text-[#272727] flex flex-col items-center lg:items-start lg:w-[45%]">
            <p className="font-[900] pb-[10px]">Sowden</p>
            <h2 className="text-[40px] md:text-[56px] font-[900] lg:text-[60px] text-center lg:text-left leading-[1]">
              Collaboration with the designer George Sowden
            </h2>
            <p className="text-center lg:text-left pt-[20px] max-w-[600px]">
              This collection brings the designer’s signature aesthetic and
              style to a higher level, transforming essential household products
              into decorative as well as functional objects.
            </p>
            <button 
              aria-label="Shop Collection"
             className="bg-[#92BEE5] font-[700] text-white py-[16px] px-[32px] mt-[20px] md:mt-[40px]">
              Shop Collection
            </button>
          </div>
        </div>
      </div>
      <ShopifySection />
    </div>
  );
};

export default CollectionsPage;
