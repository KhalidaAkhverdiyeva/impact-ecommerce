import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CollectionCard = () => {
  return (
    <section className="max-w-[1600px] mx-auto pb-[50px] px-[20px] md:px-[32px] lg:px-[48px]">
      <div className="flex flex-wrap gap-[20px] md:gap-[70px] justify-center items-stretch">
        {[
          {
            title: "Decoration",
            description:
              "For a living room refresh that adds color, texture, and functionality, take a look at some of our latest styles and collaborations.",
            image:
              "https://impact-theme-home.myshopify.com/cdn/shop/files/Mags_Soft_2_5_seater_combination_1_Flamiber_petrol_blue_J4_Rebar_Side_Table_soft_black_w_marble_top_Juice_Vase_wide_yellow_Tulou_Coffee_Table_off_white_Moire_Kelim_grey_fe2266d8-d21e-4351-928e-389454406332.jpg?v=1660122812&width=800",
          },
          {
            title: "Kitchen",
            description:
              "Update your kitchen with the latest styles, including the new Sowden Salt & Pepper, a continuation of our collaboration with designer George Sowden.",
            image:
              "https://impact-theme-home.myshopify.com/cdn/shop/files/Sowden_Kettle_EU_yellow_Sowden_Toaster_grey_Ellipse_Tray_S_dark_green.jpg?v=1660122858&width=600",
          },
          {
            title: "Office",
            description:
              "As everyone heads back to work, whether that be into the office or the classroom, having an organized desk space is essential.",
            image:
              "https://impact-theme-home.myshopify.com/cdn/shop/files/Slant_233_white_2b94a7ba-ef46-49a1-bb21-f6596acd09b3.jpg?v=1660122878&width=800",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col w-full md:w-[45%] lg:w-[30%] bg-white text-[#272727] p-4 "
          >
            <motion.div
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </motion.div>
            <h2 className="text-[32px] lg:text-[48px] font-[800] mb-2">
              {item.title}
            </h2>
            <p className="mb-4">{item.description}</p>
            <a href="#" className="underline">
              Shop {item.title}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CollectionCard;
