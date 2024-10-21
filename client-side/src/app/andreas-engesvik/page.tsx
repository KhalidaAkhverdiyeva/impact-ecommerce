import ColoredShopCard from "@/components/Colored Shop Card/coloredShopCard";
import RichTextSection from "@/components/Designers Rich Text Section/richTextSection";
import HomeDesignerGridSection from "@/components/Home Designer Grid Section/homeDesignerGrid";
import { Header } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React from "react";

const AndreasEngesvik = () => {
  return (
    <div className="relative">
      <Header />
      <div className=" h-[560px] lg:h-[640px]  relative overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(min-width: 768px)"
            srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik-hero.jpg?v=1656417295&width=3200"
          />
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik-hero-mobile.jpg?v=1656417299&width=800"
            alt="andreas"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <h2 className="text-white font-[800] text-[40px] md:text-[48px] lg:text-[68px]  text-center">
            Andreas Engesvik
          </h2>
        </div>
      </div>

      <ColoredShopCard
        title="Add a nice touch of color to your bathroom"
        description="With its simple yet functional design, the Tann Toothbrush from HAY is manufactured by tooth care professionals Jordan. Made with a plastic handle and nylon brushes in a variety of colors."
        buttonText="Shop"
        buttonColor="#C4D9CB"
        imageUrls={{
          small:
            "https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik-product.jpg?v=1656417358&width=800",
          medium:
            "https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik-product.jpg?v=1656417358&width=800",
          large:
            "https://impact-theme-home.myshopify.com/cdn/shop/files/andreas-engesvik-product.jpg?v=1656417358&width=1400",
        }}
      />
      <FloatingTextSection text="Meet our designers" color="#C4D9CB" />
      <div className="pb-[50px]">
        <RichTextSection />
      </div>
      <HomeDesignerGridSection />
      <ShopifySection />
    </div>
  );
};

export default AndreasEngesvik;
