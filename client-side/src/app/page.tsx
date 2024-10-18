import Banner from "@/components/Layout/Banner/banner";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import Header from "@/components/Layout/Header/header";
import HeroSliderSection from "@/components/Hero Section/SliderSection";
import ClickandCheckSection from "@/components/Click & Check Section/ClickAndCheckSection";
import ExploreCollectionsSection from "@/components/Explore Collections Section/exploreCollectionsSection";
import NewArrivalsSection from "@/components/New Arrivals Section/NewArrivalsSection";
import GrowingImgSection from "@/components/Growing Img Section/growingImgSection";
import Footer from "@/components/Layout/Footer/footer";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import ReadOurStoriesSection from "@/components/Read Our Stories Section/readOurStoriesSection";
import ImageRevealSlider from "@/components/Remini Reveal Slider/imgRevealSlider";
import JustImgSection from "@/components/Just Image Section/justImgSection";
import CompanyCountSection from "@/components/Company Count Section/companyCountSection";
import HomeDesignerGridSection from "@/components/Home Designer Grid Section/homeDesignerGrid";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="relative">
        <Header />
        <HeroSliderSection />
        <NewArrivalsSection />
        <FloatingTextSection />
        <ClickandCheckSection />
        <ExploreCollectionsSection />
        <GrowingImgSection />

        <HomeDesignerGridSection />
        <CompanyCountSection />
        <JustImgSection />
        <ImageRevealSlider />
        <ReadOurStoriesSection />
        <ShopifySection />
        <Footer />
      </div>
    </div>
  );
}
