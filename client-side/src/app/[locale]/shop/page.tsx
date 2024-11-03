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
          <div className="flex flex-col lg:flex-row text-[#272727]">
            <div className="flex-[75%] overflow-hidden cursor-pointer">
              <img
                src="https://impact-theme-home.myshopify.com/cdn/shop/articles/Time_L_yellow_Perforated_Tray_dark_green.jpg?v=1656320330&width=2000"
                alt="sofa"
                className="w-[100%] h-[100%] transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>

            <div className="flex-[40%] bg-[#F8E39A] flex flex-col gap-[20px] p-[20px] md:p-[48px]">
              <div className="">
                <button className="text-[16px] font-[700] bg-[#272727] bg-opacity-15 py-[6px] px-[20px]">
                  News
                </button>
              </div>

              <h2 className="text-[32px] md:text-[44px] font-[800] leading-[1.1] cursor-pointer">
                Back to the office
              </h2>
              <p className="text-[18px] md:text-[20px]">
                Finding the balance between utility and aesthetics is key to
                creating a work environment that feels both productive and
                inviting.
              </p>
              <div className="flex gap-[12px] md:text-[14px] items-center">
                <div className="flex gap-[10px]">
                  <svg
                    role="presentation"
                    fill="none"
                    focusable="false"
                    strokeWidth="1.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.372 1v2.877M10.455 1v2.877"
                      stroke="currentColor"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M14.338 7.632H1.497l.179-4.57 6.164-.448 6.497.448v4.57Z"
                      fill="currentColor"
                      fillOpacity=".12"
                    ></path>
                    <path
                      d="M1.224 12.073c.183 1.631 1.508 2.925 3.147 3.004a73.18 73.18 0 0 0 3.546.083c1.256 0 2.413-.028 3.546-.083 1.639-.079 2.964-1.374 3.146-3.004.124-1.099.225-2.224.225-3.37 0-1.147-.102-2.273-.225-3.371-.182-1.631-1.507-2.925-3.146-3.004a73.22 73.22 0 0 0-3.546-.083 73.22 73.22 0 0 0-3.546.083c-1.639.079-2.964 1.374-3.147 3.004C1.101 6.43 1 7.556 1 8.703c0 1.146.102 2.272.224 3.37ZM1.331 7.202h13.24"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  <div className="text-[12px] md:text-[14px]">May 23, 2022</div>
                </div>
                <div className="flex gap-[10px]">
                  <svg
                    role="presentation"
                    fill="none"
                    focusable="false"
                    strokeWidth="1.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.602 1.881A6.961 6.961 0 1 1 5.6 14.318l-3.806.633a.57.57 0 0 1-.635-.745l.974-2.904a6.961 6.961 0 0 1 2.47-9.42Z"
                      fill="currentColor"
                      fillOpacity=".12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M5.5 6.286h5.572M5.5 9.714h4.214"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <div className="text-[12px] md:text-[14px]">2 comments</div>
                </div>
              </div>
            </div>
          </div>
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
