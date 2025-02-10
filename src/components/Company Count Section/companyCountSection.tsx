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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, 2002, {
        duration: 2,
      });
    }
  }, [isInView, count]);

  return (
    <section ref={sectionRef} className="bg-white py-[50px] ">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-[10px] md:gap-[20px] px-[20px] md:px-[32px] lg:px-[48px] text-center">
        <motion.h1 className="text-[72px] md:text-[126px] lg:text-[170px] font-[800] text-[#4F76B5] leading-[0.7]">
          {rounded}
        </motion.h1>

        <h3 className="text-[26px] font-[800] text-[#272727]">
          A new kind of design company
        </h3>
        <div className="mx-auto">
          {" "}
          <p className="text-[14px] md:text-[16px] max-w-[750px] ">
            Motivated by the certainty that good design is everyone&apos;s
            right, we set out to innovate new ways to answer the ever-evolving
            needs of the modern world - but at a more accessible price point
            than industry standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyCountSection;
