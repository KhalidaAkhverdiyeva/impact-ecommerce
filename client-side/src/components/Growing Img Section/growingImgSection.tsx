"use client";
import React, { useEffect, useState, useRef } from "react";

const GrowingImgSection: React.FC = () => {
  const [clipPath, setClipPath] = useState("inset(40% 30%)"); // Initial small section
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollable, setScrollable] = useState(true); // State to manage scrollability

  useEffect(() => {
    const handleScroll = () => {
      if (!isInView || !scrollable) return;

      // Calculate the inset values based on the scroll position within the section
      const sectionTop = sectionRef.current?.offsetTop || 0;
      const sectionHeight = sectionRef.current?.offsetHeight || 1;
      const scrollY = window.scrollY + window.innerHeight; // Adjusting scrollY for better accuracy

      // Calculate how far the user has scrolled within the section
      const progress = Math.min(
        Math.max((scrollY - sectionTop) / sectionHeight, 0),
        1
      );

      // Adjust the inset values from 40% to 0% as the user scrolls within the section
      const insetValue = 40 - progress * 40;
      setClipPath(`inset(${insetValue}% ${insetValue / 1.5}%)`);

      // Stop being scrollable once the image is fully revealed
      if (progress >= 1) {
        setScrollable(false); // Disable scroll in this section
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.05 } // Trigger when 5% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener and observer
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView, scrollable]);

  return (
    <div
      className="z-[-1] my-[50px] sticky top-0 "
      style={{ height: "100vh", overflowY: "scroll" }}
    >
      <div
        ref={sectionRef}
        className="flex justify-center items-center h-screen"
        style={{ overflowY: scrollable ? "hidden" : "hidden" }} // Keep inner overflow hidden
      >
        <div
          className="relative w-full h-full bg-cover bg-center transition-all duration-300 ease-out"
          style={{
            backgroundImage:
              "url('https://impact-theme-home.myshopify.com/cdn/shop/files/Palissade_Chair_Palissade_Cone_Table_PC_Portable_olive.jpg?v=1653309441&width=3200')",
            clipPath: clipPath,
          }}
        />
      </div>
    </div>
  );
};

export default GrowingImgSection;
