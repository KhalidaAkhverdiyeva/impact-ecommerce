import AllDesignersGridSection from "@/components/All Designers Grid Section/allDesignersGrid";
import Quote from "@/components/Designer Quote/quote";
import { HeaderWhite } from "@/components/Layout/Header/header";
import NewsletterCard from "@/components/Newsletter Card/newsletterCard";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React from "react";

const DesignersPage = () => {
  return (
    <div>
      <HeaderWhite />
      <div className="max-w-[1600px] mx-auto py-[50px] px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex flex-col gap-[15px] items-center">
          <h1 className="text-[#C6E6F3] font-[900] text-[60px] md:text-[106px] lg:text-[216px] leading-[1]">
            Designers
          </h1>
          <h3 className="text-[26px] md:text-[32px] font-[800] max-w-[690px] text-[#272727] text-center  leading-[1.2]">
            From the beginning we collaborate with talented designers.
          </h3>
          <div className="text-center text-[#272727] max-w-[690px]">
            We work with these designers to bring their own experiences, each of
            which plays a vital role. These are not just collaborations between
            a brand and designers but a beautiful interaction between members of
            a large family.
          </div>
        </div>
      </div>
      <AllDesignersGridSection />
      <div className="py-[50px] mx-auto">
        <Quote />
      </div>

      <NewsletterCard />
      <ShopifySection />
    </div>
  );
};

export default DesignersPage;
