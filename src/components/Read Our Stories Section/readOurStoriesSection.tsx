import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const ReadOurStoriesSection = () => {
  const revealVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white">
      <motion.div
        className="max-w-[1600px] mx-auto flex flex-col gap-[32px] justify-between px-[20px] md:px-[32px] lg:px-[48px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div
          className="flex flex-col lg:pt-[50px] lg:flex-row lg:justify-between"
          variants={revealVariants}
        >
          <h4 className="text-[32px] md:text-[46px] font-[800] text-[#272727]">
            Read our stories
          </h4>
          <div className="text-[#484848] flex gap-[10px] items-center">
            <p className="text-[14px] md:text-[16px]">View all stories</p>
            <button
              aria-label="View all stories"
              className="bg-[#e9e9e9] p-[6px] rounded-full flex justify-center items-center"
            >
              <FaAngleRight size={12} />
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row">
          <motion.div
            className="flex-[75%] overflow-hidden cursor-pointer"
            variants={revealVariants}
          >
            <Image
              src="https://impact-theme-home.myshopify.com/cdn/shop/articles/Pouf_cool_rose_Mags_3_Seater_comb_1_Hallingdal_220_Plica_Sprinkle_cream_Outline_Cushion_vivid_blue_76d5321d-a7ce-4891-bd3a-35ad1f2c3a7a.jpg?v=1653735991&width=1400"
              alt="sofa"
              width={1400}
              height={1050} // Adjust the height to match the aspect ratio of the image
              className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </motion.div>

          <motion.div
            className="flex-[40%] bg-[#3C619E] flex flex-col gap-[20px] p-[20px] md:p-[48px]"
            variants={revealVariants}
          >
            <div className="">
              <div className="text-[16px] font-[700] text-white">
                Inspiration
              </div>
            </div>

            <h2 className="text-[32px] text-white md:text-[44px] font-[800] leading-[1.1] cursor-pointer">
              Enjoy a cozy living room
            </h2>
            <p className="text-[18px] md:text-[20px] text-white">
              Explore our most comfortable collections and bring warmth to the
              places you gather with friends and loved ones.
            </p>
            <div className="flex gap-[12px] md:text-[14px] items-center">
              <div>
                <CiCalendar className="text-white" />
              </div>
              <div className="text-[12px] md:text-[14px] text-white">
                May 23, 2022
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReadOurStoriesSection;
