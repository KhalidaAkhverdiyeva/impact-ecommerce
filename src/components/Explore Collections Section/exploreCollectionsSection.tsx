import React, { useRef } from "react";
import { LuChevronRight } from "react-icons/lu";
import CollectionCard from "./collectionCard";
import { Link } from "@/i18n/routing";
import { motion, useInView } from "framer-motion";

const ExploreCollectionsSections = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <div className="pt-[40px] overflow-hidden">
      <div className="flex flex-col gap-[40px] pb-[50px] mx-auto max-w-[1600px]">
        <motion.div
          ref={headerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="px-[20px] md:px-[32px] lg:px-[48px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[16px]"
        >
          <motion.h3
            variants={itemVariants}
            className="text-[#272727] text-[32px] font-[800] md:text-[44px] lg:text-[50px]"
          >
            Explore the collections
          </motion.h3>

          <motion.div variants={itemVariants}>
            <Link aria-label="View all collections" href="/collections">
              <div className="flex gap-[12px]">
                <p className="text-[14px] md:text-[16px] text-[#272727]">
                  View all
                </p>
                <button
                  aria-label="View all"
                  className="bg-[#E9E9E9] rounded-full w-[24px] h-[24px] flex justify-center items-center"
                >
                  <LuChevronRight size={14} />
                </button>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="mx-auto max-w-[1600px]">
        <div className="flex gap-4 overflow-hidden">
          <CollectionCard />
        </div>
      </div>
    </div>
  );
};

export default ExploreCollectionsSections;
