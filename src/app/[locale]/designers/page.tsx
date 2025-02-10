import AllDesignersGridSection from "@/components/All Designers Grid Section/allDesignersGrid";
import { Header } from "@/components/Layout/Header/header";
import NewsletterCard from "@/components/Newsletter Card/newsletterCard";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React from "react";
import Image from "next/image";

const DesignersPage = () => {
  return (
    <div>
      <Header transparent={false} />
      <div className="max-w-[1600px] mx-auto py-[50px] px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex flex-col gap-[15px] lg:gap-[25px] items-center">
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
        <div className="text-[#272727]  max-w-[1600px] mx-auto">
          <div className="flex flex-col gap-[40px] max-w-[900px] mx-auto">
            <div className="relative">
              <Image
                src="data:image/svg+xml,%3Csvg width='86' height='55' viewBox='0 0 86 55' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M71.3163 54.6H42.5163L60.3163 0.400024H85.5163L71.3163 54.6ZM29.3163 54.6H0.716309L18.9163 0.400024H44.1163L29.3163 54.6Z' fill='%23E9E9E9'/%3E%3C/svg%3E%0A"
                alt="quote"
                width={70}
                height={45}
                className="absolute top-[-20px] left-[-7px] md:left-[-40px] w-[51px] h-[37px] md:w-[70px] md:h-[45px]"
              />
              <blockquote className="text-[28px] md:text-[36px] lg:text-[44px] relative font-[800] leading-[1.1] text-center">
                We work with the best designers of our generation from around
                the world to create high-quality products that would be
                accessible to a wide audience.
              </blockquote>
            </div>
            <div className="flex flex-col items-center gap-[10px] justify-center">
              <div className="rounded-full w-[70px] h-[70px] relative">
                <Image
                  src="https://impact-theme-home.myshopify.com/cdn/shop/files/Mette.png?v=1656419248&width=140"
                  alt="Mette Hay"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-[#272727B3] text-[14px] text-center md:text-[16px]">
                Mette Hay
              </p>
            </div>
          </div>
        </div>
      </div>

      <NewsletterCard />
      <ShopifySection />
    </div>
  );
};

export default DesignersPage;
