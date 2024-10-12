import Banner from "@/components/Banner/banner";
import Header from "@/components/Header/header";
import HomeHeroSlider from "@/components/Home Hero Slider/homeHeroSlider";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="relative">
        <Header />
        <HomeHeroSlider />
      </div>
    </div>
  );
}
