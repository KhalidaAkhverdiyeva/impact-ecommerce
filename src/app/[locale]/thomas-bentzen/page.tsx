import ColoredShopCard from "@/components/Colored Shop Card/coloredShopCard";
import DesignerInfoCard from "@/components/Designer Info Card/designerInfoCard";
import RichTextSection from "@/components/Designers Rich Text Section/richTextSection";
import HomeDesignerGridSection from "@/components/Home Designer Grid Section/homeDesignerGrid";
import { Header } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React from "react";
import Image from "next/image";

const ThomasBentzen = () => {
  return (
    <div className="relative">
      <Header />
      <div className=" h-[560px] lg:h-[640px]  relative overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(min-width: 768px)"
            srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-hero.jpg?v=1656412386&width=1600"
          />
          <Image
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-hero-mobile.jpg?v=1656412390&width=800"
            alt="thomas"
            width={800} // Set the width of the image
            height={533} // Adjust the height based on the aspect ratio
            className="object-cover w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <h2 className="text-white font-[800] text-[40px] md:text-[48px] lg:text-[68px]  text-center">
            Thomas Bentzen
          </h2>
        </div>
      </div>
      <div className="pt-[50px]">
        <DesignerInfoCard />
      </div>
      <ColoredShopCard
        title="Clean and elegant bin for your office"
        description="Featuring clean lines and modern silhouette, the shade bin is designed by Thomas Bentzen. Designed as an elegant and utilitarian office waste bin. Manufactured from long-lasting polypropylene."
        buttonText="Shop"
        buttonColor="#BAB0D3"
        imageUrls={{
          small:
            "https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-product.jpg?v=1656412400&width=800",
          medium:
            "https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-product.jpg?v=1656412400&width=1000",
          large:
            "https://impact-theme-home.myshopify.com/cdn/shop/files/thomas-bentzen-product.jpg?v=1656412400&width=1400",
        }}
      />
      <FloatingTextSection text="Meet our designers" color="#BAB0D3" />
      <div className="pb-[50px]">
        <RichTextSection title="Your Title Here" />
      </div>

      <HomeDesignerGridSection />
      <ShopifySection />
    </div>
  );
};

export default ThomasBentzen;
