import Banner from "@/components/Layout/Banner/banner";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import Header from "@/components/Layout/Header/header";
import HeroSliderSection from "@/components/Hero Section/SliderSection";
import ClickandCheckSection from "@/components/Click & Check Section/ClickAndCheckSection";
import NewArrivalsSection from "@/components/New Arrivals Section/newArrivalsSection";

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
      </div>
    </div>
  );
}
