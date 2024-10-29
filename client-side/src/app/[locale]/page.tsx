import { Header } from "@/components/Layout/Header/header";
import NewArrivalsSection from "@/components/New Arrivals Section/NewArrivalsSection";
import dynamic from "next/dynamic";

const FloatingTextSection = dynamic(
  () => import("@/components/Marquee Text/floatingTexts")
);
const HeroSliderSection = dynamic(
  () => import("@/components/Hero Section/SliderSection")
);
const ClickandCheckSection = dynamic(
  () => import("@/components/Click & Check Section/ClickAndCheckSection")
);
const ExploreCollectionsSection = dynamic(
  () =>
    import("@/components/Explore Collections Section/exploreCollectionsSection")
);
const GrowingImgSection = dynamic(
  () => import("@/components/Growing Img Section/growingImgSection")
);
const ShopifySection = dynamic(
  () => import("@/components/Shopify Section/shopifySection")
);
const ReadOurStoriesSection = dynamic(
  () => import("@/components/Read Our Stories Section/readOurStoriesSection")
);
const ImageRevealSlider = dynamic(
  () => import("@/components/Remini Reveal Slider/imgRevealSlider")
);
const CompanyCountSection = dynamic(
  () => import("@/components/Company Count Section/companyCountSection")
);
const HomeDesignerGridSection = dynamic(
  () => import("@/components/Home Designer Grid Section/homeDesignerGrid")
);
const RichTextSection = dynamic(
  () => import("@/components/Designers Rich Text Section/richTextSection")
);
const NewsletterCard = dynamic(
  () => import("@/components/Newsletter Card/newsletterCard")
);
const Quote = dynamic(() => import("@/components/Designer Quote/quote"));

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
        <GrowingImgSection />
        <Quote bgColor="#708A5C" />
        <NewsletterCard />
        <RichTextSection />
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
