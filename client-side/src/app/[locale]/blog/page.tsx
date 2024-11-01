import BlogCard from "@/components/Blog Card/blogCard";
import BlogPageHero from "@/components/Blog Page Hero/blogPageHero";
import ExploreCollectionsSections from "@/components/Explore Collections Section/exploreCollectionsSection";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import { Link } from "@/i18n/routing";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <BlogPageHero />
      <BlogCard
        imgSrc="https://impact-theme-home.myshopify.com/cdn/shop/articles/Time_L_yellow_Perforated_Tray_dark_green.jpg?v=1656320330&width=800"
        bgColor="bg-[#F8E39A]"
        flexDirection="row"
      />
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row py-[50px]">
        <BlogCard
          imgSrc="https://impact-theme-home.myshopify.com/cdn/shop/articles/Time_L_yellow_Perforated_Tray_dark_green.jpg?v=1656320330&width=800"
          bgColor="bg-transparent"
          flexDirection="col"
        />
        <BlogCard
          imgSrc="https://impact-theme-home.myshopify.com/cdn/shop/articles/Time_L_yellow_Perforated_Tray_dark_green.jpg?v=1656320330&width=800"
          bgColor="bg-transparent"
          flexDirection="col"
        />
        <BlogCard
          imgSrc="https://impact-theme-home.myshopify.com/cdn/shop/articles/Time_L_yellow_Perforated_Tray_dark_green.jpg?v=1656320330&width=800"
          bgColor="bg-transparent"
          flexDirection="col"
        />
      </div>
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        <div className=" h-[560px] relative overflow-hidden  ">
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
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 ">
            <div className="flex flex-col gap-[10px] items-center text-[#272727]">
              <span className="text-white font-[800] text-[16px]  leading-[1] text-center max-w-[700px]">
                About us
              </span>
              <h2 className="text-white font-[800] text-[40px] md:text-[56px] lg:text-[70px] leading-[1] text-center max-w-[300px] md:max-w-[700px] lg:max-w-[800px]">
                Inspired by architecture art & fashion
              </h2>
              <Link href="/about">
                <button className="text-[18px] font-[700] mt-[10px] lg:py-[14px] py-[13px] px-[24px] lg:px-[32px] bg-white inline-block w-[160px] text-center ">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ExploreCollectionsSections />
      <FloatingTextSection
        text="Good design is everyone's right."
        color="#3C619E"
      />
      <ShopifySection />
    </div>
  );
};

export default BlogPage;
