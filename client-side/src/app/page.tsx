import Banner from "@/components/Banner/banner";
import ClickandCheckSection from "@/components/Click & Check Section/clickandchecksection";
import FloatingTextSection from "@/components/Floating Text Section/floatingTexts";
import Header from "@/components/Header/header";
import HomeHeroSlider from "@/components/Home Hero Slider/homeHeroSlider";
import NewArrivalsSection from "@/components/New Arrivals Section/newArrivalsSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="relative">
        <Header />
        <HomeHeroSlider />
        <NewArrivalsSection />
        <FloatingTextSection />
        <ClickandCheckSection />
      </div>
    </div>
  );
}
