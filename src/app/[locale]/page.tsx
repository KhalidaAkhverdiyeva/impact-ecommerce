"use client";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import HeroSliderSection from "@/components/Hero Section/SliderSection";
import ClickAndCheckSection from "@/components/Click & Check Section/clickandchecksection";
import ExploreCollectionsSection from "@/components/Explore Collections Section/exploreCollectionsSection";
import ShopifySection from "@/components/Shopify Section/shopifySection";

import ReadOurStoriesSection from "@/components/Read Our Stories Section/readOurStoriesSection";
import ImageRevealSlider from "@/components/Remini Reveal Slider/imgRevealSlider";
import CompanyCountSection from "@/components/Company Count Section/companyCountSection";
import HomeDesignerGridSection from "@/components/Home Designer Grid Section/homeDesignerGrid";
import RichTextSection from "@/components/Designers Rich Text Section/richTextSection";
import NewsletterCard from "@/components/Newsletter Card/newsletterCard";
import { Header } from "@/components/Layout/Header/header";
import Quote from "@/components/Designer Quote/quote";
import ShopTheRoomSection from "@/components/Shop The Room Section/shopTheRoomSection";
import Image from "next/image";
import { useState } from "react";
import ScrollableProducts from "@/components/Scrollable Products/scrollProducts";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "@/i18n/routing";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  return (
    <div>
      <div className="relative">
        <Header />
        <HeroSliderSection />
        <section className="flex flex-col items-center justify-center">
          <div className="py-[48px] px-[20px] md:py-[64px] md:px-[32px] lg:px-[48px] max-w-[1600px] w-full">
            <h3 className="text-[32px] text-[#272727] md:text-[40px] lg:text-[48px] font-[800]">
              New arrivals
            </h3>
            <div className="flex flex-col lg:flex-row justify-between">
              <p className="pt-[15px] text-[#303030] text-[14px] md:text-[16px] lg:max-w-[700px] font-[400] pb-[20px]">
                We are inspired by the realities of life today, in which
                traditional divides between personal and professional space are
                more fluid.
              </p>
              <Link
                href="/shop"
                className="text-[#484848] flex gap-[5px] items-center"
              >
                <p>View all</p>
                <button
                  aria-label="View all"
                  className="bg-[#E9E9E9] p-[6px] rounded-full flex justify-center items-center"
                >
                  <FaAngleRight size={14} />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full overflow-x-hidden mx-auto max-w-[1600px]">
            <ScrollableProducts
              scrollProgress={scrollProgress}
              setScrollProgress={setScrollProgress}
            />
          </div>
        </section>
        <FloatingTextSection
          text="Good design is everyone's right."
          color="#708A5C"
        />
        <ClickAndCheckSection />
        <ExploreCollectionsSection />
        <Quote bgColor="#708A5C" />
        <ShopTheRoomSection />
        <NewsletterCard />
        <RichTextSection title="From all over the world" />
        <HomeDesignerGridSection />
        <CompanyCountSection />
        <section className="bg-white py-[50px] ">
          <picture className="w-full">
            <source
              media="(min-width: 640px)"
              srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/Enamel-family-05.jpg?v=1653311262&width=2000"
            />
            <Image
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/Enamel-family-05_mobile_715d0c91-0660-4a0a-bd19-e830511d6828.jpg?v=1663056832&width=800"
              alt="lamp img"
              width={800}
              height={533}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </picture>
        </section>
        <ImageRevealSlider />
        <ReadOurStoriesSection />
        <ShopifySection />
      </div>
    </div>
  );
}
