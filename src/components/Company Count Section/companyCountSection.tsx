"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const CompanyCountSection = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, 2002, {
        duration: 2,
      });
      return animation.stop;
    }
  }, [isInView, count]);

  const textRevealVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="bg-white py-[50px] ">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-[10px] md:gap-[20px] px-[20px] md:px-[32px] lg:px-[48px] text-center">
        <motion.h1 className="text-[72px] md:text-[126px] lg:text-[170px] font-[800] text-[#4F76B5] leading-[0.7]">
          {rounded}
        </motion.h1>

        <motion.h3
          className="text-[26px] font-[800] text-[#272727]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textRevealVariants}
        >
          A new kind of design company
        </motion.h3>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textRevealVariants}
        >
          <p className="text-[14px] md:text-[16px] max-w-[750px]">
            Motivated by the certainty that good design is everyone&apos;s
            right, we set out to innovate new ways to answer the ever-evolving
            needs of the modern world - but at a more accessible price point
            than industry standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyCountSection;
