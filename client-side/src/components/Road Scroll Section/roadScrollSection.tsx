import React, { useState } from "react";

const RoadScrollSection = () => {
  // Dummy data for the sections
  const sections = [
    {
      number: "01",
      title: "Australia",
      description:
        "Wide selection of new releases and bestselling furniture, lighting and homewares direct from Denmark.",
      imgSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/06_2.jpg?v=1664271761&width=1500",
    },
    {
      number: "02",
      title: "New Zealand",
      description:
        "Discover beautiful home furnishings and design classics from Scandinavian brands.",
      imgSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/05.jpg?v=1664270935&width=832",
    },
    {
      number: "03",
      title: "Denmark",
      description: "The finest Danish designs brought directly to your door.",
      imgSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/04_1.jpg?v=1664270723&width=1500",
    },
    {
      number: "04",
      title: "Denmark",
      description: "The finest Danish designs brought directly to your door.",
      imgSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/03.jpg?v=1664270552&width=832",
    },
    {
      number: "05",
      title: "Denmark",
      description: "The finest Danish designs brought directly to your door.",
      imgSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/04_1.jpg?v=1664270723&width=1500",
    },
    {
      number: "06",
      title: "Denmark",
      description: "The finest Danish designs brought directly to your door.",
      imgSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/02_1.jpg?v=1664270390&width=1500",
    },
    {
      number: "07",
      title: "Denmark",
      description: "The finest Danish designs brought directly to your door.",
      imgSrc:
        "https://impact-theme-home.myshopify.com/cdn/shop/files/01.jpg?v=1664271050&width=1500",
    },
  ];

  // State to track the active section
  const [activeIndex, setActiveIndex] = useState(0);

  // State for managing the fade animation
  const [fade, setFade] = useState(false);

  // Handle click on a number
  const handleSectionClick = (index: number) => {
    // Trigger fade-out animation
    setFade(true);
    // After the animation completes, update the active index and fade back in
    setTimeout(() => {
      setActiveIndex(index);
      setFade(false);
    }, 300); // Animation duration (300ms)
  };

  return (
    <section>
      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex flex-col ">
          <div className=" flex flex-col gap-[30px] min-h-[700px] lg:flex-row lg:gap-[140px]">
            <div
              className={`lg:flex-1 transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                src={sections[activeIndex].imgSrc}
                alt={sections[activeIndex].title}
                className="transition-transform duration-300 transform"
              />
            </div>
            <div
              className={`text-[#272727] lg:flex-1 transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <h6 className="font-[800] text-center lg:text-left text-[18px] mb-[10px] lg:mb-[25px]">
                {sections[activeIndex].title}
              </h6>
              <p className="text-[32px] text-center lg:text-left lg:text-[50px] leading-[1] font-[800]">
                {sections[activeIndex].description}
              </p>
            </div>
          </div>
          {/* Horizontal Controller */}
          <div className="lg:mt-[50px] flex justify-center items-center overflow-x-auto relative">
            <div className="relative w-full">
              {/* Circles and Numbers */}
              <div className="flex flex-nowrap justify-start items-center z-10   space-x-[100px]">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => handleSectionClick(index)}
                  >
                    {/* Circle */}
                    <div
                      className={`w-[16px] h-[16px] rounded-full border-2 ${
                        activeIndex === index
                          ? "border-black bg-black"
                          : "border-gray-400 bg-white"
                      } transition-colors duration-300`}
                    ></div>
                    {/* Number */}
                    <span
                      className={`mt-[10px] font-[500] text-[14px] ${
                        activeIndex === index ? "text-black" : "text-gray-400"
                      } transition-colors duration-300`}
                    >
                      {section.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-[20%] left-0 right-0  h-[2px] bg-gray-400 z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadScrollSection;
