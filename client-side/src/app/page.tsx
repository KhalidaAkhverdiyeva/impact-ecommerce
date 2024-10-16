import Banner from "@/components/Layout/Banner/banner";
import ClickandCheckSection from "@/components/Click & Check Section/clickandchecksection";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import Header from "@/components/Layout/Header/header";
import NewArrivalsSection from "@/components/New Arrivals Section/newArrivalsSection";
import HeroSliderSection from "@/components/Home Hero Section/SliderSection";

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
