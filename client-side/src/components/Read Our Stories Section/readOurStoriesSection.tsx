import { CiCalendar } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";

const ReadOurStoriesSection = () => {
  return (
    <section className="bg-white py-[50px]">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-[32px] justify-between px-[20px] md:px-[32px]  lg:px-[48px]">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <h4 className="text-[32px] md:text-[46px] font-[800] text-[#272727]">
            Read our stories
          </h4>
          <div className="text-[#484848] flex gap-[10px] items-center">
            <p className="text-[14px] md:text-[16px]">View all stories</p>
            <button className="bg-[#e9e9e9] p-[6px] rounded-full flex justify-center items-center">
              <FaAngleRight size={12} />
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-[75%]">
            <img
              src="https://impact-theme-home.myshopify.com/cdn/shop/articles/Pouf_cool_rose_Mags_3_Seater_comb_1_Hallingdal_220_Plica_Sprinkle_cream_Outline_Cushion_vivid_blue_76d5321d-a7ce-4891-bd3a-35ad1f2c3a7a.jpg?v=1653735991&width=1400"
              alt="sofa"
              className="w-[100%] h-[100%]"
            />
          </div>

          <div className="flex-[40%] bg-[#cf6c6c] flex flex-col gap-[20px] p-[20px] md:p-[48px]">
            <div className="">
              <div className="text-[16px] font-[700]">Inspiration</div>
            </div>

            <h2 className="text-[32px] md:text-[44px] font-[800] leading-[1.1]">
              Enjoy a cozy living room
            </h2>
            <p className="text-[18px] md:text-[20px]">
              Explore our most comfortable collections and bring warmth to the
              places you gather with friends and loved ones.
            </p>
            <div className="flex gap-[12px] md:text-[14px] items-center">
              <div>
                <CiCalendar />
              </div>
              <div className="text-[12px] md:text-[14px]">May 23, 2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadOurStoriesSection;
