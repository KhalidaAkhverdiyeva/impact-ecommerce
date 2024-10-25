import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import HeroSliderSection from "@/components/Hero Section/SliderSection";
import ClickandCheckSection from "@/components/Click & Check Section/ClickAndCheckSection";
import ExploreCollectionsSection from "@/components/Explore Collections Section/exploreCollectionsSection";
import NewArrivalsSection from "@/components/New Arrivals Section/NewArrivalsSection";
import GrowingImgSection from "@/components/Growing Img Section/growingImgSection";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import ReadOurStoriesSection from "@/components/Read Our Stories Section/readOurStoriesSection";
import ImageRevealSlider from "@/components/Remini Reveal Slider/imgRevealSlider";
import JustImgSection from "@/components/Just Image Section/justImgSection";
import CompanyCountSection from "@/components/Company Count Section/companyCountSection";
import HomeDesignerGridSection from "@/components/Home Designer Grid Section/homeDesignerGrid";
import RichTextSection from "@/components/Designers Rich Text Section/richTextSection";
import NewsletterCard from "@/components/Newsletter Card/newsletterCard";
import { Header } from "@/components/Layout/Header/header";
import Quote from "@/components/Designer Quote/quote";

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
        <JustImgSection />
        <ImageRevealSlider />
        <ReadOurStoriesSection />
        <ShopifySection />
      </div>
    </div>
  );
}
