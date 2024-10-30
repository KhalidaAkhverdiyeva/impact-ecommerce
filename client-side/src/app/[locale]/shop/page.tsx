import BlogCard from "@/components/Blog Card/blogCard";
import ExploreCollectionsSections from "@/components/Explore Collections Section/exploreCollectionsSection";
import FilterSection from "@/components/Filter Section/filterSection";
import { Header } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React from "react";

const ShopPage = () => {
  return (
    <div className="relative">
      <Header />
      <div className=" h-[560px] lg:h-[640px]  relative overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(min-width: 768px)"
            srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/Two-Colour_160x82_red_wb_lacquer_tabletop_maroon_red_frame_Slant_233_white_Indian_Steel_Pitcher_NO._2.jpg?v=1655974258&width=3200"
          />
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/Two-Colour_160x82_red_wb_lacquer_tabletop_maroon_red_frame_Slant_233_white_Indian_Steel_Pitcher_NO._2_mobile.jpg?v=1655974257&width=800"
            alt="office"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 flex items-center  bg-black bg-opacity-10">
          <div className="flex flex-col w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
            <h2 className="text-white font-[800] text-[40px] md:text-[48px] lg:text-[68px] ">
              New Arivals
            </h2>
            <p className="text-white">
              As everyone heads back to work, whether that be into the office or
              the classroom, having an organized desk space is essential.
            </p>
          </div>
        </div>
      </div>
      <FilterSection />
      <FloatingTextSection
        text="Create a productive work environment"
        color="#F8E39A"
      />
      <div className="max-w-[1600px] mx-auto py-[30px]">
        <div className="px-[20px] md:px-[32px] lg:px-[48px]">
          <BlogCard />
        </div>
      </div>
      <ExploreCollectionsSections />
      <div className="py-[50px]">
        <div className=" h-[560px] lg:h-[760px]  relative overflow-hidden">
          <picture className="absolute inset-0 w-full h-full">
            <source
              media="(min-width: 768px)"
              srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/HAY_MetteandRolf_Portrait.jpg?v=1656685244&width=1600"
            />
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/HAY_MetteandRolf_Portrait_mobile.jpg?v=1656685248&width=800"
              alt="thomas"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <div className="flex flex-col gap-[10px] items-center text-[#272727]">
              <span className="text-white font-[800] text-[16px]  leading-[1] text-center max-w-[700px]">
                About us
              </span>
              <h2 className="text-white font-[800] text-[40px] md:text-[68px] lg:text-[80px] leading-[1] text-center max-w-[700px]">
                We do high-quality products
              </h2>
              <button className="text-[18px] font-[700] mt-[10px] lg:py-[14px] py-[13px] px-[24px] lg:px-[32px] bg-white inline-block w-[160px] text-center ">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      <ShopifySection />
    </div>
  );
};

export default ShopPage;
