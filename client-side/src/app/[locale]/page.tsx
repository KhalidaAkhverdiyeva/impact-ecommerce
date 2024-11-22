import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import HeroSliderSection from "@/components/Hero Section/SliderSection";
import ClickandCheckSection from "@/components/Click & Check Section/ClickAndCheckSection";
import ExploreCollectionsSection from "@/components/Explore Collections Section/exploreCollectionsSection";
import NewArrivalsSection from "@/components/New Arrivals Section/NewArrivalsSection";
// import GrowingImgSection from "@/components/Growing Img Section/growingImgSection";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import ReadOurStoriesSection from "@/components/Read Our Stories Section/readOurStoriesSection";
import ImageRevealSlider from "@/components/Remini Reveal Slider/imgRevealSlider";
import CompanyCountSection from "@/components/Company Count Section/companyCountSection";
import HomeDesignerGridSection from "@/components/Home Designer Grid Section/homeDesignerGrid";
import RichTextSection from "@/components/Designers Rich Text Section/richTextSection";
import NewsletterCard from "@/components/Newsletter Card/newsletterCard";
import { Header } from "@/components/Layout/Header/header";
import Quote from "@/components/Designer Quote/quote";
// import ImageGallery from "@/components/Image Card Gallery Section/page";
import ShopTheRoomSection from "@/components/Shop The Room Section/shopTheRoomSection";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Header />
        <HeroSliderSection />
        <NewArrivalsSection />
        <FloatingTextSection
          text="Good design is everyone's right."
          color="#708A5C"
        />
        <ClickandCheckSection />
        <ExploreCollectionsSection />
        {/* <GrowingImgSection /> */}
        {/* <ImageGallery /> */}
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
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/files/Enamel-family-05_mobile_715d0c91-0660-4a0a-bd19-e830511d6828.jpg?v=1663056832&width=800"
              alt="lamp img"
              className="w-full h-full object-cover"
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
